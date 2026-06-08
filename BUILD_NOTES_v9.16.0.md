# Build Notes v9.16.0 - Viewer Entry Overlay and Mode Recovery

## Purpose

This build fixes the 3D viewer entry flow after the formal Visitor, Curator, and Presentation mode controls introduced a confusing startup state.

## Changes

- Restored the configured splash image and message on first entry to `gallery-3d.html`.
- Hid the mode selector while the entry splash overlay is visible.
- Restored ESC behaviour so releasing pointer lock returns visitors to the splash overlay.
- Preserved the editor-only Curator gate: published visitors do not see the Curator button unless the page is opened in draft, preview, or edit mode.
- Updated build metadata to v9.16.0.

## Notes

- Visitor, Curator, and Presentation modes are still available after entering the gallery.
- Curator behaviour is controlled by `editorMode`, which is enabled by `?draft=1`, `?preview`, or `?edit=1`.

## Validation

- Static script parsing should pass for all non-module scripts.
- The 3D module script should parse after import stripping.
- Browser smoke testing is still dependent on the local in-app browser plugin starting successfully.
