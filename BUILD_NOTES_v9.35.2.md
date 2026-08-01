# Build v9.35.2 - Layout Pan and Undo Tools

## Focus
- Improved Layout Editor panning when rooms or selected objects cover the visible map.
- Added a five-step undo safety net for common layout editing actions.

## Changes
- Pan mode now lets curators drag anywhere on the layout map, including over rooms, walls, nodes and selected areas.
- Holding Space and dragging temporarily pans without changing tools.
- Middle mouse / wheel-button drag pans without switching tools.
- Right-click remains reserved for context menus.
- Added an Undo button beside the Layout Editor view controls.
- Undo stores the previous five layout states and covers drag moves, add/save/delete actions, align/snap changes, spawn placement, draft restore and published reset.
- Pan drag clicks are suppressed after a pan so the current selection is not accidentally cleared.

## Notes
- This is a polish build on top of v9.35.1 alignment tools.
- The GitHub Pages live site will not show this build until the local files are committed and pushed.
