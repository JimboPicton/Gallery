# 3D Student Gallery v9.8.7

A static, GitHub Pages-friendly virtual exhibition platform for Creative Media student work. The project includes a main gallery, an immersive Three.js walkthrough, an artwork/media admin page, an artwork placement editor, and a visual layout editor for rooms, half walls, hallways, lighting, wall colours, artwork placement, and teleport points.

## Current Version: v9.8.7 – CQU Chrome and Editor Palette Correction

### Latest changes

- Added standard navigation links to the Gallery Admin page so it matches the rest of the workflow.
- Consolidated the UI colour styling toward a CQU-inspired green/gold theme across HTML pages.
- Added active-gallery selection and gallery renaming to the Gallery Admin page.
- Added contextual 3D right-click artwork tools:
  - Add Artwork Here on a wall or half wall / partition.
  - Duplicate Artwork when right-clicking an existing artwork.
  - Delete Artwork when right-clicking an existing artwork.
  - Add/disable an artwork accent light contextually.
- Added 3D world-positioned artwork records, allowing artwork placement on half walls and partitions from the live gallery view.
- Continued active-gallery support so local galleries read consistently across editor, admin and 3D view.

## Positioning artwork on half walls

In v9.8.7, the most intuitive method is the 3D gallery view:

1. Enter the gallery.
2. Right-click on a half wall / partition surface.
3. Choose **Add Artwork Here**.
4. The artwork is saved as a world-positioned artwork record in the active gallery draft.
5. Use the admin or artwork editor to update title, artist, description and media URL.

Right-clicking an existing artwork opens contextual options for duplicate, delete and artwork light controls.

## Files

```text
Gallery/
├── index.html              # Main navigation and gallery landing page
├── gallery-3d.html         # Three.js walkthrough gallery
├── admin.html              # Gallery/admin/media management page
├── layout-editor.html      # Visual room, hallway, half wall, lighting, colour and teleport editor
├── artwork-editor.html     # Traditional artwork wall placement and sizing editor
├── gallery-manager.html    # Local gallery manager
├── publish.html            # Export/publish helper
├── gallery-data.json       # Artwork/media data
├── gallery-layout.json     # Room, hallway, partition, lighting, colour and teleport data
├── version.json            # GitHub Pages-facing version information
└── README.md               # Project documentation
```

## Publishing reminder

After testing locally or in GitHub Pages preview, use the Publish page to export updated JSON files and keep the repository version clean.


## v9.8.7 Notes
- CQU colour scheme now applies to page chrome only, not gallery material palettes.
- Restored neutral gallery swatches for wall, floor, ceiling and hallway colour selection.
- Added differentiated toolbar action colours for navigation, create, draft and publish actions.
