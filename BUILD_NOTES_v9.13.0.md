# Build Notes v9.13.0 - Shared Gallery State Normalization

## Purpose

This build is a stability checkpoint. It introduces a shared state/normalization helper so the admin page, artwork editor, and 3D gallery runtime interpret gallery projects, layouts, and artwork records consistently.

## Changes

- Added `gallery-state.js` with `window.GalleryState`.
- Added shared helpers for:
  - safe JSON parsing
  - project load/save
  - active gallery ID read/write
  - layout normalization
  - artwork data normalization
  - draft layout/data read/write
- Routed Gallery Admin layout/settings loading and saving through the shared normalizer.
- Routed Artwork Placement Editor layout/artwork loading and artwork autosave through the shared normalizer.
- Routed 3D gallery layout/artwork loading and curator-mode artwork persistence through the shared normalizer.
- Added `gallery-state.js` to the layout editor as preparation for the next consolidation build.

## Notes

- This is phase 1 of the data architecture cleanup. The layout editor still keeps most of its existing local upgrade/autosave logic in place for safety.
- The next build should progressively replace the remaining page-local gallery/project helpers in `layout-editor.html`, `gallery-manager.html`, `publish.html`, and `index.html`.

## Validation

- Static script parsing should pass for `gallery-state.js` and existing non-module scripts.
- The 3D module script should continue to parse after stripping import lines for local validation.
