# Build Notes v9.9.8 - Flush Open Hallway Portals

## Focus

This build fixes hallway entrances that appeared as solid protruding plugs at room wall openings.

## Changes

- Kept hallway connector mouths on the room wall plane by default.
- Removed the previous inward doorway overlap that could make a hallway end look like a solid slab inside the room.
- Matched hallway render height to the doorway opening height so the top and bottom edges sit flush with the wall cutout.
- Preserved open hallway ends by keeping portal-facing caps suppressed.
- Applied the same renderer change to both `gallery-3d.html` and `gallery.mjs`.

## Rollout Plan

The full feature set should move sequentially:

1. v9.10.0: Spatial Navigation Panel / restored mini map.
2. v9.11.0: Guided Tour foundations and click-next presentation mode.
3. v9.12.0: Formal Visitor, Curator, and Presentation modes with unified panel styling.
4. v9.13.0: Data architecture cleanup to reduce editor/renderer drift.

Keeping these as separate checkpoints should make hallway rendering, navigation UI, and tour logic easier to test without masking regressions.
