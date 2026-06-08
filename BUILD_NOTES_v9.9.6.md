# Gallery v9.9.6 - Simpler Orthogonal Hallway Connectors

## Included
- Replaced free-angle hallway rendering with orthogonal rectangular connector sleeves.
- Restored the union/perimeter conduit renderer for hallways so floors, ceilings, exterior walls and collision bounds are generated from axis-aligned rectangles.
- Updated the layout editor preview to draw the same orthogonal connector path used by the 3D renderer.

## Why
- The previous straight, free-angle hallway model was trying to intersect angled hallway walls with axis-aligned rectangular room openings.
- That mismatch caused recurring slivers, gaps and overlapping wall shards at doorway edges.
- Orthogonal connectors are simpler and less glamorous, but they align with the rectangular room/node system and should be much more robust.
