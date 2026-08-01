# Build v9.35.3 - Half Wall Rotation Context Menu

## Focus
- Add quick half-wall rotation actions to the Layout Editor right-click menu.

## Changes
- Right-clicking a half wall now shows rotation actions.
- Added 15 degree left/right rotation for fine adjustment.
- Added 90 degree left/right rotation for quick perpendicular wall placement.
- Rotation pivots around the half wall centre and preserves its length.
- 90 degree rotations also attempt to re-snap wall joins where nearby joins exist.
- Rotation changes are stored in the five-step Undo stack.

## Notes
- This is a small usability build layered on top of v9.35.2 pan/undo and v9.35.1 alignment/snap tools.
