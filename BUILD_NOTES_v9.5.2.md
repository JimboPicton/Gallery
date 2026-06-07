# Gallery v9.5.2 — Teleport + Colour Regression Fix

## Fixes

### Teleports
- Restored configurable teleport activation modes in the Layout Editor:
  - Press E / look target
  - Walk over / proximity
  - Either walk over or press E
- Restored activation radius control.
- Preserves legacy `interaction` data while also writing `triggerMode`.
- 3D renderer now honours proximity/walk-over teleports again.

### Room and wall colour workflow
- Palette swatches now apply immediately rather than only changing the hidden colour field.
- Room previews in the Layout Editor now visibly reflect room colour overrides.
- Per-wall overrides are shown through the room outline colours in the Layout Editor.
- Existing JSON fields are preserved: `wallColor`, `wallColors`, `defaultWallColor`, `floorColor`, `ceilingColor`, and `hallwayColor`.

## JSON note
If you only want to test the code changes, no JSON update is required.
If you edit teleport activation modes or colour settings in the Layout Editor, export/commit the updated `gallery-layout.json`.
