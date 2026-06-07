# Build Notes – v9.7.2 Hallway State Rebuild and Material Sync

## Fixes
- Rebuilds/normalises hallway state after room movement and hallway edits.
- Removes invalid/stale hallway links left by earlier layout states.
- Snaps hallway union coordinates in the 3D renderer to prevent phantom divider walls after dragging rooms.
- Adds small segment overlap at hallway elbows so corridor unions remain continuous.
- Keeps hallway colours independent per hallway instead of forcing the global default across the network.
- Updates the layout editor hallway display so internal segment borders no longer appear as dividing walls.
- Expands room wall colour import/export compatibility so editor wall colours carry through into 3D.

## Deployment
Upload the included files to the GitHub Pages repository root.
