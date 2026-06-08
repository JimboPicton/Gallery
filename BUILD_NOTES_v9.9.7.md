# Build Notes v9.9.7 - Curator Artwork Repositioning

## Focus

This build improves the in-gallery curator workflow so artwork placement can be adjusted directly in the 3D view.

## Changes

- Shrunk the `Click to Enter Gallery` overlay when Curator Mode is active, keeping it in the top-right corner instead of the centre of the screen.
- Added **Move Artwork** to the right-click artwork menu in Curator Mode.
- Added a click-to-place move flow for existing artworks:
  - Right-click an artwork.
  - Choose **Move Artwork**.
  - Click a room wall or half wall / partition surface.
  - The artwork saves back to the active draft/gallery data and the 3D view reloads in place.
- Reused the existing 3D placement hit testing so moved artworks use the same world-position, room/wall, and half-wall metadata as newly created 3D artworks.
- Added Escape cancellation while moving an artwork.

## Notes

- This is a first-pass implementation of the artwork-editor style repositioning workflow inside the 3D curator view.
- Fine-grained drag handles, live resize, and nudge controls are still better candidates for a follow-up build after testing this simpler context-menu workflow.
