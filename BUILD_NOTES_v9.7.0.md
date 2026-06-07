# Gallery v9.7.0 — First-Class Hallway Conduit Refactor

This build changes hallway generation so hallways are treated as explicit rectangular conduit spaces between two portal nodes, rather than fragile visual bridge patches.

## Main changes

- Reworked hallway rendering in `gallery-3d.html` and `gallery.mjs`.
- Updated the layout editor to display hallway conduits as rectangular spaces with red portal openings, rather than thin connection lines.
- Hallways now use one portal/centreline route for floor, ceiling, side walls and walkable bounds.
- Doorway-facing caps are suppressed so hallway ends meet room walls as open portals.
- Added more robust room/wall colour resolution for the 3D renderer.
- Updated GitHub Pages-facing version information in `index.html`, `README.md`, and `version.json`.

## Files to deploy

- `index.html`
- `gallery-3d.html`
- `gallery.mjs`
- `layout-editor.html`
- `layout.js`
- `artwork-editor.html`
- `admin.html`
- `gallery-manager.html`
- `publish.html`
- `gallery-layout.json`
- `gallery-data.json`
- `favicon.svg`
- `README.md`
- `version.json`
- `BUILD_NOTES_v9.7.0.md`
