# Build Notes v9.14.0 - Editor State Consolidation and Curator Workflow Fixes

## Purpose

This build continues the editor/runtime consistency work from v9.13.0 and rolls in three small but visible workflow fixes.

## Changes

- Reduced hallway portal seam padding so hallway side walls sit more cleanly against room wall openings.
- Reduced conduit segment end overlap to avoid thin side-wall strips protruding into connected rooms.
- Added half-wall / partition entries to the Artwork Placement Editor wall selector when the partition sits inside the selected room.
- Added 2D editing support for partition-mounted artwork using the same world-positioned record shape used by 3D Curator Mode.
- Prevented Curator Mode from restoring the entry splash overlay when pointer lock is released for editing.

## Notes

- The hallway change is cosmetic and intentionally conservative. It avoids returning to the earlier solid-plug hallway behaviour.
- Half-wall artwork edited in `artwork-editor.html` is saved with `surface: "partition"`, `partitionId`, `placement: "world"`, `worldPosition`, and `rotY`, so the 3D view can render it on the partition surface.
- Further state consolidation for `gallery-manager.html`, `publish.html`, and the main page should continue in v9.15.0.

## Validation

- Static script parsing should pass for all non-module scripts.
- The 3D module script should parse after import stripping.
