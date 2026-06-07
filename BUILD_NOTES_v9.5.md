# Gallery v9.5 – Hallway Rectangular Tube Geometry Fix

This build changes hallway rendering so each hallway is treated as a simple rectangular tube/prim with open ends where it connects to room wall openings.

## Fixes
- Removed the overlapping hallway stub segments that caused raised edges and uneven surfaces.
- Hallways now generate from portal centre to portal centre, rather than from extra inset/outset segments.
- Doorway ends remain open: no transverse cap plane is generated at either room connection.
- Straight hallways now render as one continuous rectangular floor plane, one ceiling plane, and side wall planes.
- Elbow hallways use the smallest required right-angle route without extra doorway blocking planes.

## Notes
- No JSON update is required if you are only testing this code/build fix.
- Existing gallery layout JSON will continue to drive room and hallway placement.
