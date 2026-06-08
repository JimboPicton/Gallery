# Gallery v9.9.3 - Artwork Editor Draft Preview Fix

## Included
- Fixed the Artwork Editor's View 3D Gallery link so it opens `gallery-3d.html?draft=1` and reads local draft artwork data.
- Preserved the current room/wall toolbar view when applying artwork metadata changes.
- Refreshed JSON/status after Apply Artwork Changes without rebuilding the wall view and jumping surfaces.

## Notes
- 3D placements on room walls should bridge back to the wall editor when they include room/wall metadata.
- 3D placements on partitions/half walls remain world-positioned records and need a dedicated world-placement list in a later build.
