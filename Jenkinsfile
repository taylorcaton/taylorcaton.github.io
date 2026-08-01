// Jenkinsfile  -- lives in the repo root of taylorcaton.github.io
//
// Vue 3 + Vite -> GitHub Pages (gh-pages). Runs on ernie's Jenkins (DooD).
//
//   checkout main -> npm ci -> lint (GATE) -> unit tests (GATE) -> build
//   -> lighthouse audit of ./dist + upload to LHCI (record only, NO gate)
//   -> if all above passed: push ./dist to gh-pages via SSH deploy key
//
// Agent image is OUR own lhci-runner (node:22 + Google Chrome installed
// directly), built on ernie. This is the LHCI-recommended approach vs. a
// prebuilt container. Chrome is at /usr/bin/google-chrome-stable (CHROME_PATH
// is baked into the image).

pipeline {
  agent {
    docker {
      image 'lhci-runner:node22-chrome'
      // --network: reach the LHCI server (http://lhci:9001) by container name.
      // --cap-add=SYS_ADMIN + --shm-size=2g: Chrome needs these to run headless
      //   in a container without crashing (documented LHCI requirement).
      args '--network lhci_default --cap-add=SYS_ADMIN --shm-size=2g'
    }
  }

  options {
    timeout(time: 20, unit: 'MINUTES')
    buildDiscarder(logRotator(numToKeepStr: '20'))
  }

  environment {
    LHCI_TOKEN                = credentials('lhci-build-token')
    // LHCI basic-auth password (username is not secret, set inline below).
    LHCI_BASIC_AUTH_PASSWORD  = credentials('lhci-basic-auth-password')
    npm_config_cache          = "${WORKSPACE}/.npm"
  }

  stages {

    stage('Install') {
      steps { sh 'npm ci' }
    }

    stage('Lint') {
      steps {
        sh 'npx eslint src --ext .vue,.js,.jsx,.cjs,.mjs'
      }
    }

    stage('Unit tests') {
      steps {
        sh 'npx vitest run --passWithNoTests'
      }
    }

    stage('Build') {
      steps { sh 'npm run build' }
    }

    stage('Lighthouse') {
      steps {
        // autorun reads lighthouserc.cjs. Basic-auth creds are passed so the
        // upload clears the server's HTTP basic auth (the 401 fix). `|| true`
        // keeps Lighthouse from ever failing the build (record-only).
        sh '''
          npx --yes @lhci/cli@0.15.x autorun \
            --upload.basicAuth.username=taylor \
            --upload.basicAuth.password="$LHCI_BASIC_AUTH_PASSWORD" \
          || true
        '''
      }
    }

    stage('Deploy to gh-pages') {
      steps {
        sshagent(credentials: ['github-deploy-key']) {
          sh '''
            mkdir -p ~/.ssh
            ssh-keyscan -t ed25519,rsa github.com >> ~/.ssh/known_hosts 2>/dev/null

            git config --global user.email "jenkins@ernie.local"
            git config --global user.name  "Jenkins (ernie)"

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
      cleanWs()
      echo "Build ${BUILD_NUMBER} deployed. Lighthouse history: http://ernie.local:9001"
    }
    failure {
      echo "Build ${BUILD_NUMBER} failed -- gh-pages unchanged. (Workspace kept for debugging.)"
    }
  }
}
