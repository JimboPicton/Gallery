# Build Notes v9.15.0 - Remaining State Consolidation and Hallway Flush Join

## Purpose

This build completes the next state-consolidation pass and corrects the slight hallway gap introduced by the v9.14 portal trim.

## Changes

- Changed hallway portal rendering so side-wall edges butt up to the room wall plane again while portal end caps remain open.
- Routed `gallery-manager.html` through `GalleryState` for project load/save and active gallery ID updates.
- Routed the main page gallery selector through `GalleryState` for local active-gallery reads/writes.
- Routed `publish.html` through `GalleryState` so exported project, layout, and artwork JSON is normalized before download.
- Updated build metadata to v9.15.0.

## Notes

- The hallway adjustment removes only the over-trim that created a visible gap. It does not restore the earlier extra hallway width padding.
- Publish exports now normalize `gallery-projects.json`, `gallery-layout.json`, and `gallery-data.json` through the shared helper where available.

## Validation

- Static script parsing should pass for all non-module scripts.
- The 3D module script should parse after import stripping.
