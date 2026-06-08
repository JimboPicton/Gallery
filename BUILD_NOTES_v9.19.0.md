# Build Notes v9.19.0 - Editor Zoom and Pan

## Purpose

This build improves large-gallery editing in `layout-editor.html` by adding practical view navigation tools.

## Changes

- Added a compact `View` toolbar group to the Layout Editor.
- Added zoom out, zoom in, and live zoom percentage controls.
- Added `Fit` to center and scale the whole gallery layout into the editor viewport.
- Added `Selection` to center and scale the currently selected room, hallway, half wall, light, teleport, or audio source.
- Added Pan mode for drag-scrolling the empty canvas.
- Added Ctrl+mouse-wheel zoom around the cursor.
- Updated build metadata to v9.19.0.

## Notes

- The zoom system changes only the editor view scale. It does not alter saved room, hallway, artwork, light, teleport, or audio coordinates.
- Zooming does not autosave the layout by itself.

## Validation

- Static script parsing should pass for all non-module scripts.
- The 3D module script should parse after import stripping.
