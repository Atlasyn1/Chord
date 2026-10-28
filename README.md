# Chord — ecosystem website

This ZIP includes the Chord homepage and the four connected spaces: Logic30, InsideCode, INTERSECT, and Folio Space.

## Run locally

For the static pages, open `index.html` in a browser. Folio Space's local workspace uses browser `localStorage`; use the same browser profile and site origin to see the same local data. For a more realistic test, serve this folder with a local HTTP server.

## Folio Space routes

- `folio-space/index.html` — Folio Space landing page
- `folio-space/app.html` — workspace dashboard
- `folio-space/new-page.html` — create-page screen
- `folio-space.html` — Folio Space overview within Chord

## Enable encrypted online page sharing

The API lives at the deployment root in `functions/api/` and is used by Folio Space at `/api/transfers` and `/api/transfer-status`.

1. Deploy the **entire extracted `chord-website` folder** to Cloudflare Pages using Git integration or Wrangler so Pages Functions are deployed. A static drag-and-drop upload will not run these functions.
2. Create a Cloudflare KV namespace.
3. In the Pages project's Settings → Bindings, add a KV namespace binding named exactly `NOTEFUL_TRANSFERS`.
4. Redeploy the project.
5. Open the HTTPS deployment, go to Folio Space → workspace → Settings, and use **Test online connection**.

Page shares are encrypted in the browser with AES-GCM using a passkey-derived key. The API stores only the encrypted payload. The alphanumeric code is not a substitute for the passkey: share them separately. Online snapshots remain until deleted or the underlying KV storage is removed. This is snapshot sharing, not automatic live sync. Importing a page adds it to the current workspace; importing a full workspace snapshot can replace the destination data, so make a backup first.

## Notes

- Browser-local data is not automatically shared between different browsers or devices.
- Cloudflare KV and Pages Functions must be configured for online sharing to work.
- Do not put credentials or secrets in this repository.
