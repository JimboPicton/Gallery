# Gallery v9.4 – Hallway Opening Fix

This build changes the hallway renderer so corridor walls are generated from the exposed perimeter of hallway rectangles rather than from every individual segment.

## Fixed
- Removed the blocking/internal planes that could appear across doorway openings.
- Hallway openings now remain clear where a corridor meets a room wall.
- Internal walls between overlapping hallway segments and elbows are suppressed.
- Corridor floors and ceilings still overlap slightly at joins to prevent visible cracks.

## Notes
- No JSON update is required if you are only replacing the build files to test this rendering fix.
- Updated JSON files are only needed after changing gallery content, layout, artwork, media, labels, or settings.
