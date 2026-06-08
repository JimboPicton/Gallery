# Build Notes – v9.8.4

## Focus

Hotfix for hallway portal seams, active-gallery routing, room material sync, and teleport prompting.

## Changes

- Expanded straight hallway conduits slightly beyond portal planes to remove visible gaps at wall openings.
- Matched hallway physical width to portal clear width so conduit sides meet doorway edges more cleanly.
- Added active gallery loading in 3D view using `?gallery=` or the selected `active-gallery-id`.
- Added active gallery loading/saving in the layout and artwork editors for local gallery projects.
- Ensured preview links include the active gallery id.
- Restored teleport prompt updates in the animation loop and made proximity checks work without relying only on raycast aim.
- Updated GitHub Pages-facing version files.
