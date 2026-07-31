// lighthouserc.js  -- lives in the repo root of taylorcaton.github.io
//
// Config for Lighthouse CI. Jenkins runs `lhci autorun`, which reads this.
//
// Design (per your choices):
//   - collect: serve the freshly-built ./dist and audit it locally
//   - assert:  NONE -- scores recorded, never used to fail the build
//   - upload:  send results to your LHCI server on ernie for history
//
// The build token is injected by Jenkins as LHCI_TOKEN (env), NOT hardcoded.
// serverBaseUrl uses the container name `lhci` because the pipeline container
// is attached to the lhci_default docker network.

module.exports = {
  ci: {
    collect: {
      // Audit the static build output. LHCI spins up its own static server
      // pointed at this dir (serves index.html on a random localhost port),
      // audits it, then shuts the server down. Most deterministic option for
      // a built SPA -- no dev server or `vite preview` process to manage.
      staticDistDir: './dist',

      // If you later add client-side routes (vue-router), uncomment this so
      // LHCI redirects unknown paths to index.html the way GitHub Pages won't:
      // isSinglePageApplication: true,

      numberOfRuns: 3, // median smooths run-to-run variance
      settings: {
        // Chrome cannot sandbox inside a container without elevated caps;
        // --no-sandbox is the standard, documented CI flag. headless=new is
        // the current headless mode.
        chromeFlags: '--no-sandbox --headless=new',
      },
    },
    upload: {
      target: 'lhci',
      serverBaseUrl: 'http://lhci:9001',
      token: process.env.LHCI_TOKEN, // build token, injected by Jenkins
    },
    // No `assert` block on purpose: results are recorded to the server for
    // trend history, but never cause a non-zero exit. Lighthouse never blocks
    // your deploy.
  },
};