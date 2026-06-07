# Gallery v9.5.5 – Artwork/Hallway Intersection Guard

This build prevents stale or overlapping artwork planes from rendering inside hallway doorway cuts.

## Fixes
- Adds a world-space hallway intersection check before rendering artwork.
- Hides artwork and wall statements if they overlap a hallway/doorway volume.
- Expands doorway conflict detection with a small safety margin for frames/shadows.
- Accepts legacy wall aliases such as north/south/east/west.

## Why
If an artwork was already placed on a wall and a hallway was later added through that wall, the artwork mesh could remain in the opening and look like a split hallway artefact.
