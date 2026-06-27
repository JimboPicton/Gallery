# Build Notes v9.30.6 - Viewer Wall Collision Hotfix

## Changes

- The viewer now has a 0.34 metre collision footprint instead of a zero-size point.
- Movement validates the complete footprint against the union of rooms and hallways.
- Long movement frames are subdivided to prevent tunnelling through thin walls.
- Half walls use explicit segment colliders and are no longer treated as walkable bounds.
- Teleport destinations are moved to the nearest safe walkable point when necessary.
