# Gallery v9.8.0 – Half-wall Gallery Layout Pivot

## Purpose
This build introduces a practical workaround for the persistent hallway artefacts by supporting gallery-style half walls / partition walls. These can be used to divide a large open room into exhibition zones without relying on fragile room-to-room hallway geometry.

## Changes
- Added **Half Wall** creation tool to the Layout Editor.
- Half walls are created by clicking two points on the layout grid.
- Half walls are stored as first-class layout objects in `partitions`.
- Added editor controls for half wall ID, title, start/end coordinates, height, thickness, colour, and texture URL.
- Added 3D rendering for floor-to-ceiling partition planes.
- Added optional floor texture and ceiling texture fields in Theme defaults.
- Added automatic artwork accent lights above artworks, with intensity control.
- Updated GitHub Pages-facing version information to v9.8.0.

## Notes
The hallway system remains in the project, but this version makes it possible to build more gallery-like layouts using large rooms and internal partition walls. This should avoid the current hallway shearing/splitting issues while preserving the option to revisit hallway topology later.
