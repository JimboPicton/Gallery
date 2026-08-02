# Build Notes v9.35.5 - Layout Vertical Pan Extent Hotfix

Date: 2026-08-01

## Changes
- Fixed Layout Editor Pan mode feeling horizontal-only when the map is zoomed.
- Converted the layout coordinate origin from fixed constants to adjustable canvas offsets.
- Added dynamic top, bottom, left and right scroll padding based on current layout bounds.
- Preserved existing zoom, fit, selection zoom, pan toggle and Undo behaviours.

## Validation
- Run the inline script syntax checker.
- Run git diff --check.
- Preview layout-editor.html locally and confirm the page responds.
