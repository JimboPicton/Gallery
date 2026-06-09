# Build Notes - v9.28.1 Pointer Lock Gesture Hotfix

## Focus
- Resolve the browser console error introduced by the v9.28.0 edit-return recovery flow.

## Fixes
- Removed the automatic Pointer Lock request from the post-Curator-edit reload path.
- Added a guarded pointer-lock helper for gesture-driven entry and mode switching.
- Kept edit reloads splash-free while avoiding browser-blocked pointer-lock requests on page load.

## Verification
- Static JavaScript parse check passed for the module body extracted from `gallery-3d.html`.
