# Build Notes - v9.31.5 Layout Spawn Point

Date: 2026-08-01

## Added
- Layout Editor right-click action for setting or moving the viewer spawn point.
- Draggable red map-pin spawn marker with a dedicated Spawn inspector tab.
- Exact spawn X/Z and facing-direction controls, plus delete support.
- Shared layout normalisation for `settings.spawnPoint`.

## Changed
- The 3D gallery now starts visitors at the saved spawn point when one exists.
- If no spawn point is configured, the 3D gallery keeps the previous first-room-centre fallback.
- Version metadata updated to v9.31.5.

## Testing Notes
- Right-click the layout canvas or a room, choose Set Viewer Spawn Here, then enter the 3D preview.
- Drag the spawn marker or use the Spawn inspector to refine its position and facing angle.
