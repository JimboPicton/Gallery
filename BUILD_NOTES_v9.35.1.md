# Build Notes - v9.35.1 Layout Alignment and Wall Snap Tools

## Included

- Added an Align toolbar group to the Layout Editor with Vertical, Horizontal and Snap Wall actions.
- Added Shift/Ctrl-click multi-selection for rooms, half walls, lights, teleports, audio nodes and the spawn marker.
- Added selection overlays so secondary alignment targets are visible while using multi-select.
- Added half-wall snapping against nearby half-wall ends, projected wall faces and room edges.
- Snapping now runs while dragging half walls, after manual half-wall edits and when placing a new half wall.

## Notes

- Vertical alignment uses the shared X axis in the top-down layout.
- Horizontal alignment uses the shared Z axis in the top-down layout.
- The snap threshold is intentionally modest so walls only join when they are already close.
