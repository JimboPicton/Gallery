# Build v9.3 Corridor / Publish Workflow Fixes

## Corridor / hallway fixes

- Reduced doorway cut-out clearance from `hallway width + 2.4` to `hallway width + 0.35`.
  - This prevents the large visible gaps around hallway entrances.
  - The same value is used in the 3D renderer and artwork editor doorway keep-clear zones.

- Added procedural corridor side walls to hallway segments.
  - Previous build generated hallway floors and ceilings only.
  - This caused hallways to appear open, gappy, or visually disconnected from rooms.

- Corridor stubs now render with side walls rather than floor/ceiling only.
  - This makes the doorway-to-corridor connection much more visually coherent.

## Artwork doorway handling

- Artwork editor doorway keep-clear zones now match the tighter 3D doorway opening size.
- Artwork that overlaps a doorway is still blocked/hidden in 3D as a safety measure, but the editor warning should now be more accurate.

## Publish / GitHub workflow clarification

For a public GitHub Pages update, commit BOTH:

1. the changed build files, such as `gallery-3d.html`, `artwork-editor.html`, `layout-editor.html`, etc.
2. the current JSON files, especially:
   - `gallery-layout.json`
   - `gallery-data.json`

The HTML/JS files define how the gallery works. The JSON files define what the live gallery contains.

Recommended order:

1. Edit layout/artwork in the browser.
2. Open **Publish Gallery**.
3. Download all JSON files.
4. Replace the matching JSON files in the repo.
5. Replace the updated build files from this ZIP.
6. Commit and push everything together.
7. Open the live GitHub Pages site in a private/incognito window or add `?draft=0` to avoid seeing local browser drafts.

