// lighthouserc.cjs -- config for Lighthouse CI (LHCI), read by the
// `npx @lhci/cli autorun` command that Jenkins runs in the Lighthouse stage
// of the pipeline (see Jenkinsfile).
//
// Must keep the .cjs extension: package.json sets "type": "module", which
// makes plain .js files ES modules, but LHCI's config loader expects
// CommonJS (`module.exports`, not `export default`).
//
// What this config tells LHCI to do, in order:
//   1. collect -- build a headless Chrome session and run Lighthouse
//                 against the built site (dist/), gathering scores
//   2. assert  -- decide pass/fail (skipped on purpose, see the bottom
//                 of this file)
//   3. upload  -- send the results to the LHCI server for history/trends
//
// This pipeline treats Lighthouse as a dashboard, not a gate: scores are
// recorded so trends are visible over time, but a bad score never blocks a
// deploy.

module.exports = {
  ci: {
    collect: {
      // Audit the already-built static files in dist/, rather than pointing
      // at a dev server. LHCI spins up its own minimal static file server on
      // a random local port, runs Lighthouse against it, then shuts it back
      // down. This is the most realistic option for a static site like this
      // one, since it tests the exact files that end up deployed.
      staticDistDir: './dist',

      // This site is currently a single page with no client-side routes
      // (no vue-router). If routes are added later, uncomment the line
      // below so LHCI serves index.html for unknown paths the way a real
      // router would -- otherwise every route but "/" would 404 during
      // the audit.
      // isSinglePageApplication: true,

      // Run the audit 3 times and use the median score. A single Lighthouse
      // run can vary a bit from normal machine/network jitter; averaging a
      // few runs gives a steadier, more trustworthy number.
      numberOfRuns: 3,

      settings: {
        // Two Chrome flags required to run Lighthouse in a CI container:
        //   --no-sandbox    Chrome's sandbox needs OS privileges that
        //                   containers don't grant by default; this is the
        //                   standard, documented workaround for CI.
        //   --headless=new  Runs Chrome with no visible window (there's no
        //                   display in CI), using Chrome's current headless
        //                   implementation.
        chromeFlags: '--no-sandbox --headless=new',
      },
    },

    upload: {
      target: 'lhci',
      // 'lhci' is the Lighthouse CI server's container name on the Docker
      // network this pipeline's container is attached to (see `--network`
      // in the Jenkinsfile) -- Docker resolves container names like
      // hostnames, so no IP address is needed here.
      serverBaseUrl: 'http://lhci:9001',
      // Auth token for the LHCI server, provided by Jenkins as an
      // environment variable at build time -- never hardcoded here.
      token: process.env.LHCI_TOKEN,
    },

    // No `assert` block here, intentionally: without one, LHCI records
    // results but never fails the run based on scores. That keeps
    // Lighthouse purely informational -- a regression shows up as a dip on
    // the dashboard, not as a blocked deploy.
  },
};
