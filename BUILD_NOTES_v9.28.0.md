# Build Notes - v9.28.0 Curator Entry State Hotfix

## Focus
- Cleaned up the shared entry overlay, visitor mode, and curator mode state flow in `gallery-3d.html`.
- Kept this as a small roadmap rollout so it can be reviewed before the next larger feature build.

## Fixes
- Full gallery entry splash now remains the initial overlay experience.
- Curator edit reloads after artwork add/move/delete/light changes now return to the working gallery view without showing the entry splash.
- Pressing `F` now toggles Curator mode on and off. Exiting Curator mode returns to normal visitor movement/viewing.
- Closing artwork/media panels in editor preview no longer forces the entry splash back over the gallery.

## Verification
- Static JavaScript parse check passed for the module body extracted from `gallery-3d.html`.
- Release/version metadata bumped to v9.28.0.