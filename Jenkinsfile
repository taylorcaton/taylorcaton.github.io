// Jenkinsfile  -- lives in the repo root of taylorcaton.github.io
//
// Pipeline for a Vue 3 + Vite site deployed to GitHub Pages (gh-pages branch).
// Runs on ernie's Jenkins, which drives ernie's host docker daemon (DooD).
//
// Flow:
//   checkout main -> npm ci -> lint (GATE) -> unit tests (GATE) -> build
//   -> lighthouse audit of ./dist + upload to LHCI (record only, NO gate)
//   -> if everything above passed: push ./dist to gh-pages via SSH deploy key
//
// Key design notes:
//   * Agent image is cimg/node:22-browsers -- Node 22 LTS WITH Chrome and all
//     its system libs preinstalled. Plain node:22 has no browser and Lighthouse
//     would crash; this is the image the official LHCI docs use for CI.
//   * That image runs as non-root user `circleci` (good practice) and includes
//     git + sudo, so the deploy stage works without extra setup.
//   * `--network lhci_default` lets the container reach the LHCI server by its
//     container name (`lhci`) for the results upload.
//   * The gh-pages push uses the SSH deploy key (credential id github-deploy-key),
//     NOT the HTTPS gh-pages default -- so no token is needed.

pipeline {
  agent {
    docker {
      image 'cimg/node:22-browsers'
      // Join the lhci network so the Lighthouse upload can reach http://lhci:9001.
      args '--network lhci_default'
    }
  }

  options {
    timeout(time: 20, unit: 'MINUTES')
    buildDiscarder(logRotator(numToKeepStr: '20'))
  }

  environment {
    // Injected from Jenkins credential store (Secret text).
    LHCI_TOKEN = credentials('lhci-build-token')
    // Keep npm's cache inside the workspace (writable by the container user).
    npm_config_cache = "${WORKSPACE}/.npm"
  }

  stages {

    stage('Install') {
      steps {
        sh 'npm ci'
      }
    }

    stage('Lint') {
      steps {
        // package.json's "lint" script includes --fix, which mutates files and
        // is wrong for CI. Call eslint directly, report-only, so a real lint
        // error FAILS the build (your choice: gate on it).
        sh 'npx eslint . --ext .vue,.js,.jsx,.cjs,.mjs --ignore-path .gitignore'
      }
    }

    stage('Unit tests') {
      steps {
        // package.json's "test:unit" is bare `vitest`, which watches forever
        // and would hang CI. `vitest run` does a single pass and exits.
        sh 'npx vitest run'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }

    stage('Lighthouse') {
      steps {
        // Audit ./dist and upload to the LHCI server. Reads lighthouserc.js.
        // `|| true` guarantees Lighthouse can NEVER fail the build -- results
        // are recorded for history only (your choice: no gate).
        sh 'npx --yes @lhci/cli@0.15.x autorun || true'
      }
    }

    stage('Deploy to gh-pages') {
      // Only reached if Install/Lint/Test/Build all succeeded.
      steps {
        sshagent(credentials: ['github-deploy-key']) {
          sh '''
            # Trust github.com's host key so the non-interactive push doesn't
            # prompt (which would hang the build).
            mkdir -p ~/.ssh
            ssh-keyscan -t ed25519,rsa github.com >> ~/.ssh/known_hosts 2>/dev/null

            # gh-pages needs a git identity for the commit it creates.
            git config --global user.email "jenkins@ernie.local"
            git config --global user.name  "Jenkins (ernie)"

            # Push ./dist to gh-pages over SSH (deploy key auth). -r forces the
            # SSH remote so gh-pages doesn't fall back to HTTPS origin (which
            # would need a token we deliberately avoid).
            npx --yes gh-pages@5 \
              -d dist \
              -r git@github.com:taylorcaton/taylorcaton.github.io.git \
              -b gh-pages \
              -m "Deploy from Jenkins build ${BUILD_NUMBER}"
          '''
        }
      }
    }
  }

  post {
    success {
      echo "Build ${BUILD_NUMBER} deployed. Lighthouse history: http://ernie.local:9001"
    }
    failure {
      echo "Build ${BUILD_NUMBER} failed before deploy -- gh-pages unchanged."
    }
    always {
      cleanWs()
    }
  }
}