# 3D Student Gallery v9.23.0

A static, GitHub Pages-friendly virtual exhibition platform for Creative Media student work. The project includes a main gallery, an immersive Three.js walkthrough, an artwork/media admin page, an artwork placement editor, and a visual layout editor for rooms, half walls, hallways, lighting, wall colours, artwork placement, and teleport points.

## Current Version: v9.23.0 - Presentation Mode Upgrade

### Latest changes

- Added Play/Pause timed playback to Presentation Mode tours.
- Added smooth camera transitions between tour stops instead of instant jumps.
- Added optional narration/audio URL and type fields to each Tour Editor stop.
- Added tour-stop narration playback support for direct audio and external embed links.
- Added visible, interactive audio markers in the 3D gallery for audio sources created in the Layout Editor.
- Added YouTube, SoundCloud and Echo-style external audio playback from 3D audio markers using look-at + `E` interaction.
- Kept external audio opt-in so YouTube/SoundCloud/Echo links do not autoplay unexpectedly as visitors move through the gallery.
- Kept direct MP3/OGG/WAV/M4A sources distance-faded, with only the nearest direct sources audible to avoid overpowering the space.
- Stopped embedded/external audio when another media panel takes focus or when sound is turned off.
- Converted the Layout Editor inspector into an overlay drawer so the map keeps the full editing width.
- Improved the 3D gallery sound button contrast.
- Added layout-editor zoom in/out controls with a live zoom percentage.
- Added Fit and Selection view controls for large gallery layouts.
- Added Pan mode and Ctrl+mouse-wheel zoom around the cursor.
- Added `gallery-ui.css` as a shared CQU UI layer for active gallery pages.
- Updated the shared UI palette to CQU Conifer `#C7DC5D`, Te Papa Green `#1E4041`, and White `#FFFFFF`.
- Standardised page typography around Noto Sans.
- Added a centred adaptive media viewer in the 3D gallery for images, direct video, YouTube, Echo-style embeds, and SoundCloud links.
- Kept the side panel path for link-only or text-heavy records where reading is the primary task.
- Added an optional right-hand detail rail for long artist statements so media remains large and centred.
- Added modal close behaviour via Close, outside click, and Escape.
- Improved Layout Editor toolbar responsiveness so navigation panels wrap cleanly at normal browser zoom/window sizes.
- Changed Layout Editor create actions to a blue colour family to distinguish them from amber save/export actions.
- Added a Layout Editor Panel toggle so the right inspector can be hidden and the map can use the full workspace while arranging rooms.
- Reworked Gallery Manager gallery-card actions into a responsive button grid so the lower controls align cleanly.
- Restyled Gallery Manager to use the same appbar, panel, card and action-button system as the other tools.
- Standardised button meaning across active pages: navigation neutral, create/tool Te Papa Green, save/export amber, publish/enter green, and reset/delete red.
- Updated Admin, Artwork Placement, Publish, Layout, Gallery Manager and 3D entry points to share the same build identity.
- Preserved existing page workflows while consolidating the visual system.
- Added a Tour Editor tab in Gallery Admin for creating and editing Presentation Mode tours.
- Added curator controls to choose artworks, reorder stops, rename stop titles, set durations, and write narration text.
- Saved tour data into the active gallery layout as `settings.tours` so Publish exports it cleanly.
- Removed tiny non-walkable cracks from hallway floor-cell bounds so segmented hallway joins no longer catch the viewer.
- Smoothed 3D movement by resolving forward/back and sideways movement separately.
- Restored the splash graphic and entry message on first load of the 3D gallery.
- Hid Visitor / Curator / Presentation controls while the entry splash is visible.
- Restored ESC behaviour so leaving pointer-lock viewing returns visitors to the splash overlay.
- Kept Curator controls gated to draft, preview, or edit mode so published visitors do not see editing controls.
- Restored hallway side-wall edges to butt against the room wall plane so doorway joins do not expose the space behind.
- Routed the Gallery Manager through `GalleryState` for project load/save and active gallery selection.
- Routed the main page gallery picker through `GalleryState` for local active-gallery selection.
- Normalized layout, artwork data, and project records during Publish exports.
- Trimmed hallway portal joins so side walls no longer visibly protrude past the room wall opening.
- Added half-wall / partition entries to the Artwork Placement Editor wall selector for partitions inside the selected room.
- Saved artwork placed on half walls from the Artwork Placement Editor as 3D-compatible world-positioned records.
- Prevented 3D Curator Mode from returning to the splash/entry overlay when toggling out of edit mode.
- Added `gallery-state.js` as a shared normalization layer for gallery projects, active gallery IDs, layout drafts, and artwork drafts.
- Normalized artwork records when they load/save through the Artwork Placement Editor and 3D Curator Mode.
- Normalized gallery layout/settings records when loaded through Gallery Admin and the 3D gallery runtime.
- Added a first shared-state checkpoint to reduce drift between `gallery-layout-draft`, `gallery-data-draft`, local gallery projects, and published JSON.
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
- Shrunk the visitor entry overlay while Curator Mode is active so artwork positioning is no longer blocked by a large centre panel.
- Added a 3D Curator Mode **Move Artwork** action for repositioning existing artworks onto room walls or half walls from inside the gallery.
- Fixed hallway entrances so the tube mouths stay open and connect flush with the room wall opening instead of protruding as solid plugs.
- Restored a compact/expanded 3D map panel with room labels, hallway footprint, teleports, artwork markers, current room highlighting and live visitor position.
- Added Guided Tour foundations with automatic artwork highlight tours and support for future `settings.tours` records.
- Added formal Visitor, Curator and Presentation modes in the 3D gallery view.
- Added a presentation panel with Previous / Next / Exit controls and camera focus per stop.

## Sequential Feature Roadmap

The next feature set should roll out as small, testable builds:

1. **v9.10.0 Spatial Navigation Panel / Mini Map** - restored as a top-down floorplan with room labels, live visitor position, teleport markers, and an expanded modal view.
2. **v9.11.0 Guided Tour Foundations** - added tour data structures, automatic artwork stops, artwork focus targets, and click-next presentation mode.
3. **v9.12.0 Formal Modes and Unified Panels** - added Visitor, Curator, and Presentation modes and began consolidating 3D controls into consistent panels.
4. **v9.13.0 Data Architecture Cleanup** - added a shared normalization layer and began routing admin, artwork editor, and 3D runtime state through consistent layout/artwork/project records.
5. **v9.14.0 Editor State Consolidation and Curator Workflow Fixes** - tightened hallway joins, added half-wall artwork placement support to the editor, and smoothed curator mode return behaviour.
6. **v9.15.0 Remaining State Consolidation and Hallway Flush Join** - moved the main page, Gallery Manager, and Publish flow onto shared state helpers and fixed the slight hallway gap at doorway joins.
7. **v9.16.0 Viewer Entry Overlay and Mode Recovery** - restored the intended entry splash and ESC recovery flow after the formal mode controls were added.
8. **v9.17.0 Hallway Walkability and Movement Smoothing** - removed invisible movement catches at hallway floor joins and improved diagonal movement handling.
9. **v9.18.0 Tour Editor UI** - added Admin-based tour creation/editing with artwork stop ordering and narration text.
10. **v9.19.0 Editor Zoom and Pan** - added canvas zoom, fit-to-gallery, zoom-to-selection, and pan mode for large-gallery editing.
11. **v9.20.0 Unified Panel System** - added shared CQU UI tokens, standard panel/button styling, and a refreshed Gallery Manager page.
12. **v9.21.0 Adaptive Media Viewer** - added centred media viewing with adaptive statement layout and side-panel fallback for non-previewable media.
13. **v9.22.0 Audio Playback Foundations** - added interactive 3D audio markers, YouTube/SoundCloud/Echo playback, and quieter distance-aware direct audio.
14. **v9.23.0 Presentation Mode Upgrade** - added timed playback, optional narration/audio per stop, and smoother camera transitions.
15. **v9.24.0 Performance and Stability** - lazy-load heavier media and reduce repeated geometry/material work.
16. **v9.25.0 Lighting Polish** - improve spotlight presets, softer defaults, and optional emissive signage/bloom.
17. **v9.26.0 Visitor Presence Prototype** - start with a simple visitor counter, then optional anonymous presence markers.

## Positioning artwork on half walls

In v9.9.0, the most intuitive method is the 3D gallery view:

1. Enter the gallery.
2. Right-click on a half wall / partition surface.
3. Choose **Add Artwork Here**.
4. The artwork is saved as a world-positioned artwork record in the active gallery draft.
5. Use the admin or artwork editor to update title, artist, description and media URL.

Right-clicking an existing artwork opens contextual options for duplicate, delete and artwork light controls.
Choose **Move Artwork**, then click a new wall or half wall surface to reposition it from the 3D curator view.

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

## v9.9.5 Active Gallery and Half Wall Placement Fixes
- Fixed Gallery Manager draft preview links so Set Active opens the selected local gallery rather than the published active gallery.
- Added an Enter Active Gallery draft shortcut and Settings shortcut to Gallery Manager.
- Let the main index use a local active gallery during curator testing while public visitors still use published gallery data.
- Improved 3D half-wall/partition artwork placement by using the clicked face normal and offsetting artwork outward from the surface.

## v9.9.6 Simpler Orthogonal Hallway Connectors
- Replaced free-angle hallway rendering with orthogonal rectangular connector sleeves and bridge segments.
- Reused the existing hallway union/perimeter renderer so floor, ceiling, walls and collision bounds are generated from axis-aligned rectangles.
- Updated the layout editor preview so hallway drawings match the 3D connector route.
- Avoided angled hallway walls meeting rectangular doorway cuts, which was the main cause of recurring edge gaps and slivers.

## v9.9.7 Curator Artwork Repositioning
- Made the `Click to Enter Gallery` overlay compact when Curator Mode is active.
- Added **Move Artwork** to the 3D artwork context menu.
- Reused the existing 3D wall and half-wall hit testing so moved artworks save with the same room/wall/world placement data as newly added artworks.
- Added Escape cancellation while an artwork move is in progress.

## v9.9.8 Flush Open Hallway Portals
- Stopped hallway connector geometry from pushing inward through the room wall plane by default.
- Matched hallway render height to the doorway cutout height so the top and bottom edges do not protrude past the room wall opening.
- Kept hallway end caps suppressed at the doorway so each connector behaves as an open rectangular tube/tunnel.
- Documented the next sequential rollout path for minimap, guided tours, mode separation, and data cleanup.

## v9.10.0 Spatial Navigation Panel
- Restored a top-down mini map in the 3D gallery view.
- Added compact and expanded map modes.
- Draws rooms, orthogonal hallway connector footprints, half walls / partitions, teleport markers and artwork markers from the active layout/data.
- Shows the visitor's live position and facing direction.
- Highlights the current room while the visitor is inside a room footprint.
- Lets teleport markers on the map activate the same teleport destinations used in the 3D scene.

## v9.11.0 Guided Tour Foundations
- Added tour data support for `layout.settings.tours` / `layout.tours`.
- Added automatic Gallery Highlights tours from placed artwork records when no explicit tour is configured.
- Added camera focus generation for wall-placed and world-positioned artworks.
- Added click-next presentation navigation with Previous, Next and Exit controls.
- Kept auto-walkthrough movement out of this build so the tour model can be tested first.

## v9.12.0 Formal Modes and Unified Panels
- Added explicit Visitor, Curator and Presentation mode controls in the 3D gallery view.
- Kept Curator mode visible only in editor/draft preview contexts.
- Added keyboard shortcuts: `P` for Presentation mode, `V` for Visitor mode and `E` to advance while presenting.
- Moved tour controls into a consistent floating panel style aligned with the map/audio HUD.
- Kept Presentation mode read-only for visitors while preserving Curator right-click tools in draft mode.
