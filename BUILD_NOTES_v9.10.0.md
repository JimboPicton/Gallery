# Build Notes v9.10.0 - Spatial Navigation Panel

## Focus

This build restores the mini map as a spatial navigation panel inside the 3D gallery view.

## Changes

- Added a compact top-right map panel to `gallery-3d.html`.
- Added an expanded map mode for larger galleries.
- Draws the map from the active gallery layout and artwork data:
  - rooms
  - hallway connector footprints
  - half walls / partitions
  - teleport markers
  - artwork markers
- Shows the visitor's live position and facing direction.
- Highlights the current room while the visitor is inside a room footprint.
- Makes teleport markers clickable so they activate the existing 3D teleport destination logic.
- Updated version labels to v9.10.0.

## Next Checkpoint

The next planned build is v9.11.0, focused on Guided Tour foundations:

- tour records
- ordered stops
- artwork focus targets
- click-next presentation mode
- basic tour panel integration

Auto-walkthrough movement should wait until the click-next tour mode is stable.
