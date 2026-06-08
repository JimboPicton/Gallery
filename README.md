# 3D Student Gallery v9.9.4

A static, GitHub Pages-friendly virtual exhibition platform for Creative Media student work. The project includes a main gallery, an immersive Three.js walkthrough, an artwork/media admin page, an artwork placement editor, and a visual layout editor for rooms, half walls, hallways, lighting, wall colours, artwork placement, and teleport points.

## Current Version: v9.9.4 - World Placement Artwork Editor List

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

In v9.9.0, the most intuitive method is the 3D gallery view:

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


## v9.9.0 Notes
- CQU colour scheme now applies to page chrome only, not gallery material palettes.
- Restored neutral gallery swatches for wall, floor, ceiling and hallway colour selection.
- Added differentiated toolbar action colours for navigation, create, draft and publish actions.


## v9.9.0 Curator Workflow Polish
- Standardised semantic button colours: publishing/enter green, save/export orange, reset/restore/delete red.
- Added Gallery Settings in Admin for visibility/password and entry splash/warning.
- Clarified Restore Last Draft versus Reset to Published in the Layout Editor.
- Added Curator Mode guidance in 3D editor preview; editing controls remain draft/preview only.
- Preserved camera position after 3D artwork edits.
- Added artwork lighting presets: Picture Light, Ceiling Spot and Soft Wash.

## v9.9.1 Room Materials and Hallway Conduit Update
- Fixed room wall colour overrides so a room-level wall colour now applies to all un-overridden room surfaces.
- Preserved explicit per-wall colour overrides only when they differ from the room base colour.
- Added hallway wall texture persistence and renderer support.
- Kept hallways as straight hollow rectangular conduits between selected room wall nodes.

## v9.9.2 3D Artwork Editor Bridge and Hallway Join Fix
- Tagged 3D room-wall surfaces with room/wall metadata so new 3D artwork placements also appear in the artwork placement editor.
- Preserved world-position data when artwork records pass through the artwork editor.
- Added a 3D-placement note in the artwork editor for records positioned directly in the 3D gallery.
- Extended hallway conduits slightly through portal openings to reduce visible edge gaps at room-wall joins.

## v9.9.3 Artwork Editor Draft Preview Fix
- Fixed the artwork editor's View 3D Gallery link so it opens draft preview mode and reads the same local artwork data the editor saves.
- Stopped Apply Artwork Changes from forcing the toolbar to jump to another room/wall surface after saving.
- Kept Apply Artwork Changes as an in-place metadata save, with the current JSON/status refreshed without rebuilding the wall view.

## v9.9.4 World Placement Artwork Editor List
- Added a 3D / World Placements list to the artwork placement editor so artwork placed on half walls and partitions can be selected for metadata edits.
- Kept world-only placements out of the ordinary wall canvas unless they have real room/wall metadata.
- Preserved world-only placement coordinates when applying metadata changes from the artwork editor.
