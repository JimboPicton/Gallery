# Build Notes v9.23.1 - Presentation/Artwork Placement Hotfix

## Fixed

- Gallery Highlights / Presentation stops now clamp camera positions back into the nearest walkable room or hallway bound before moving the viewer.
- Tour transitions also re-check the final eye position, reducing the chance of a configured stop placing the visitor outside a wall or corridor.

## Improved

- Artwork now defaults to a square 1:1 frame for new admin, artwork-editor, and 3D curator placements.
- Artist names render centrally below artwork in the 3D gallery.
- Artist statements render as a compact clickable document/info icon near the artwork instead of a large readable wall panel.
- Artwork width and height inputs in `artwork-editor.html` are presented in wall-preview pixels while preserving the gallery's internal 3D units.

## Notes

- GitHub-hosted drag/drop upload of media assets is planned as a larger follow-up because it needs file handling, folder routing, and GitHub Contents API upload support.
