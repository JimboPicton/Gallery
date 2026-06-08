# Build Notes v9.12.0 - Formal Modes and Unified Panels

## Focus

This build formalises the 3D gallery interaction modes and starts consolidating visitor-facing controls into consistent panels.

## Changes

- Added explicit 3D gallery modes:
  - Visitor
  - Curator
  - Presentation
- Curator mode remains available only in editor/draft preview contexts.
- Presentation mode opens the guided-tour panel and unlocks pointer look so tour controls are usable.
- Added keyboard shortcuts:
  - `P`: Presentation mode
  - `V`: Visitor mode
  - `E`: next tour stop while presenting
- Added consistent floating panel styling for mode and tour controls.
- Shifted the curator entry overlay away from the minimap to reduce panel overlap.

## Next Checkpoint

v9.13.0 should focus on data architecture cleanup:

- reduce duplicated localStorage and JSON responsibilities
- make tour data editable from an admin/editor surface
- clarify what belongs to gallery settings, layout, artwork data and presentation metadata
