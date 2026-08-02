# Build Notes v9.35.4 - Half Wall Corner Snap Hotfix

Date: 2026-08-01

## Changes
- Tightened Layout Editor half-wall snapping so nearby perpendicular wall endpoints resolve to the same exact corner point.
- Added a hard-corner pass after normal endpoint snapping for L-shaped joins and room-corner joins.
- Added small 3D partition corner caps for perpendicular half-wall joins to cover the tiny seams visible where two wall meshes meet.
- Bumped the shared gallery version to v9.35.4.

## Validation
- Run the inline script syntax checker.
- Run git diff --check.
- Preview layout-editor.html and gallery-3d.html locally.
