# Gallery v9.8.2 – Straight Hallway + Half Wall UX Hotfix

## Purpose
This build responds to the continuing hallway artefacts and the unclear Half Wall creation flow.

## Changes
- Hallways no longer create L-shaped or elbow routes.
- A hallway is now treated as a single straight rectangular conduit between two selected doorway portals.
- The 3D hallway renderer now creates one straight hollow prism with floor, ceiling, and two side walls; it does not generate internal route nodes or end caps.
- The layout editor now draws straight rotated hallway rectangles rather than axis-aligned elbow/union blocks.
- Half Wall mode now uses a crosshair cursor, start-point marker, clearer status prompts, Cancel/Escape support, and a minimum-length check.
- Updated `index.html`, `version.json`, `README.md`, `layout-editor.html`, `gallery-3d.html`, and `gallery.mjs` to v9.8.2.

## Note
Console messages such as “A listener indicated an asynchronous response...” are usually produced by browser extensions, not page code, when they reference `layout-editor.html:1`. This build improves the app-side interaction flow regardless.
