# Gallery v9.9.2 - 3D Artwork Editor Bridge and Hallway Join Fix

## Included
- Added room/wall metadata to generated room wall meshes so 3D curator placements can be associated with the surface they were placed on.
- New 3D wall artwork records now keep both world-position data and editor-friendly room/wall/x/y data.
- The artwork placement editor now preserves world-position fields instead of flattening 3D records into ordinary wall records.
- Added an editor note for artwork that was positioned directly in the 3D gallery.
- Hallway conduits now overlap their connected portal openings slightly to reduce visible gaps at room-wall joins.

## Notes
- This is a targeted geometry/data bridge build. It does not yet add full drag-to-reposition controls for world-positioned artwork in the artwork editor.
