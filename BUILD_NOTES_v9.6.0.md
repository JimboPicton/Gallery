# Gallery v9.6.0 — Portal-volume Corridor Refactor

This build introduces the recommended portal-volume refactor for hallway generation.

## What changed

- Added `getPortalVolume()` as the shared source of truth for doorway/hallway joins.
- Updated room wall cut-outs to use portal clear-width values.
- Updated hallway generation to use portal wall points instead of separate doorway approximations.
- Replaced hallway end-cap suppression with portal-volume-aware edge suppression.
- Added corridor edge trimming inside doorway throat zones to reduce black planes, visible seams, and split hallway artefacts.
- Kept v9.5.6 syntax protection for the duplicate `rangesOverlap()` issue.
- Updated GitHub Pages-facing version information in `index.html`, `README.md`, and `version.json`.

## Files changed

- `gallery-3d.html`
- `gallery.mjs`
- `index.html`
- `README.md`
- `version.json`
- `BUILD_NOTES_v9.6.0.md`

## Testing notes

After upload to GitHub Pages, hard refresh the browser and test:

1. Two rooms connected straight across.
2. Two rooms connected with an L-shaped corridor.
3. A hallway added to a wall that previously had artwork.
4. Artwork placement editor doorway keep-clear warnings.
5. Teleport behaviour, as this build does not intentionally alter teleport logic.
