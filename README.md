# 3D Student Gallery v9.35.1

A static, GitHub Pages-friendly virtual exhibition platform for CQUniversity Creative Media student work. The project includes a main gallery, an immersive Three.js walkthrough, an artwork/media admin page, an artwork placement editor, and a visual layout editor for rooms, half walls, hallways, lighting, wall colours, artwork placement, and teleport points. Created by Jim Picton, Head of Course Digital Media CQUniversity Australia.

## Current Version: v9.35.1 - Layout Alignment and Wall Snap Tools

- Added a Media Library Browser to the Media Dashboard Add Media workflow.
- Local file selection now previews media, infers media type, and generates repository media paths.
- Hosted URL handling supports personal hosting, CQU links, Google Drive direct links, and existing managed-media reuse.
- Optional GitHub file upload can place selected media into repository media folders using a Contents write token.
- Direct audio file records are now supported in the metadata flow and 3D viewer.


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
15. **v9.23.1 Presentation/Artwork Placement Hotfix** - clamps Gallery Highlights stops to walkable floor space, adds artist labels and clickable statement icons, and makes new artwork frames default to square proportions.
16. **v9.24.0 Performance and Stability** - lazy-load artwork thumbnails near the viewer, cap renderer pixel ratio, and reduce repeated material/geometry creation.
17. **v9.24.1 Reticle Interaction Hotfix** - route primary mouse clicks through the same reticle interaction path as the E key for artwork, statement, audio and teleport targets.
18. **v9.24.2 Artwork Frame Fit Hotfix** - fit loaded image planes to the image aspect ratio and prevent statement icons overlapping artist labels.
19. **v9.25.0 Lighting Polish** - improve spotlight presets, softer defaults, and optional emissive signage/bloom.
20. **v9.26.0 Visitor Presence Prototype** - start with a simple visitor counter, then optional anonymous presence markers.
21. **v9.26.1 Lighting Visibility Hotfix** - prevent dark or stale lighting settings from making the gallery architecture disappear.
22. **v9.26.2 Artwork Overlay and Gallery Light Hotfix** - restore wall-mounted overlay visibility and improve light fixture aesthetics.
23. **v9.26.3 Lighting Editor Persistence Hotfix** - preserve light type/settings, add degree/percentage controls, and make configured lights emit from fixture heads.
24. **v9.27.0 Layout Editor Artwork Foundations** - begin consolidating artwork placement and metadata workflows into the layout editing surface.
25. **v9.28.0 Curator Entry State Hotfix** - keep the branded splash for entry, prevent curator edit reloads from showing the mini splash, and make F a reliable curator toggle.
26. **v9.28.1 Pointer Lock Gesture Hotfix** - prevent automatic pointer-lock requests after edit reloads and keep pointer-lock requests tied to user gestures.
27. **v9.28.2 3D Curator Artwork Workflow Hotfix** - add in-gallery artwork metadata editing, existing-media selection, thumbnail support, visual frame fitting, and half-wall side tracking.
28. **v9.29.0 3D Model Artwork Foundations** - completed: native `mediaType: model` records, GLB/GLTF loading, lazy loading, model placeholders, normalized display sizing, fallbacks, and shared model metadata fields.
29. **v9.30.0A 3D Interface and Curator Stability Checkpoint** - completed: docked controls, reliable mode switching, safe/live curator actions, and a consistent viewer eye height.
30. **v9.30.1 3D Interaction and Interface Hotfix** - completed: form-safe keyboard shortcuts, a 1.9 metre eye line for tall gallery rooms, statement-icon removal, clearer panel controls, and accurate local-presence wording.
31. **v9.30.2 Artwork Viewer and Editor Display Hotfix** - completed: unobstructed editor actions, valid model-scale increments, centered empty-artwork viewing, and proportional high-resolution artist labels.
32. **v9.30.3 Pointer Lock Return Hotfix** - completed: catchable pointer-lock requests, browser cooldown protection, and a click-to-resume return after closing artwork media.
33. **v9.30.4 Shared Version Display Hotfix** - completed: make version.json authoritative across the homepage, Gallery Manager, Admin, Layout Editor, and 3D Gallery.
34. **v9.30.5 Media Viewer Focus and Movement Hotfix** - completed: move focus before hiding media, use inert for the closed viewer, and resume movement from the close gesture with an overlay fallback.
35. **v9.30.6 Viewer Wall Collision Hotfix** - completed: add a viewer footprint, swept movement collision, explicit half-wall colliders, and safe teleport destinations.
36. **v9.31.0 Post-Edit Movement Resume Hotfix** - completed: replace the post-edit pointer-lock dead state with a compact, gesture-safe click-to-resume prompt.
37. **v9.31.0 Curator Management Workspace** - completed: consolidate Admin into a dashboard/checklist launchpad and deep-link existing records into the Artwork Placement Editor.
38. **v9.31.1 Unified Curator Console Shell** - completed: apply a common left-hand management shell across the curator pages and add Admin hash routing.
39. **v9.31.2 Management Header and Launch Cleanup** - completed: standardise curator page headers/toolbars and open fullscreen gallery views separately.
40. **v9.31.3 Curator UI Consistency Hotfix** - completed: align the main page with the dark curator shell, enforce shared button conventions, and repair Admin Submissions/Tours hash routing.
41. **v9.31.4 Navigation Naming Alignment** - completed: align menu labels with page headers, tab names and destination language.
42. **v9.31.5 Layout Spawn Point** - completed: add a draggable, editable viewer spawn marker and use it as the 3D gallery entry point.
43. **v9.32.0 Public/Private Publishing Model** - completed: generate a read-only public build and keep curator-only controls gated to draft/preview workflows.
44. **v9.33.0 Media Library Browser and Hosted URL Handling** - completed: add managed media browsing, browser file selection, hosted URL construction and optional GitHub media upload for gallery records.
45. **v9.34.0 Submission Checklist, Room Assignment and Auto-Placement** - completed: expanded the checklist with bulk selection, room/wall assignment, automatic wall-slot placement and file information.
46. **v9.35.0 Echo360 Thumbnail and Curator Frame IDs** - completed: added video thumbnail helpers, Echo360 poster guidance and curator-only 3D frame-code overlays.
47. **v9.35.1 Layout Alignment and Wall Snap Tools** - completed: added Layout Editor multi-select alignment controls and half-wall snap-to-join behaviour.
48. **v9.36.0 Model Placement and Curator Controls** - add rotation, height, floor/plinth/wall anchor, and drag/position controls for 3D models in the Layout Editor and 3D Curator workflow.
49. **v9.37.0 Open Brush / Tilt Brush Import Profile** - document a recommended GLB export/optimisation path, add Open Brush-specific material handling notes, and provide size/performance warnings for large stroke-heavy exports.
50. **v9.38.0 Model Viewer and Fallbacks** - add inspect/orbit viewing for models, preview thumbnails/posters, and image/video fallback records for slower devices.
51. **v9.39.0 Model Performance and Publishing Pipeline** - add lazy loading near the viewer, bounding-box checks, compression guidance, and repository `models/` asset-folder conventions for GitHub Pages.


## Future design notes
- **Layout Editor artwork management integration**: bring room/wall artwork lists and metadata editing into the right-hand Layout Editor panel as a larger feature build, while keeping `artwork-editor.html` as a focused fallback/editing page.

These ideas are parked for the next appropriate roadmap build rather than being implemented immediately.

- **Artwork frame builder:** add a standalone panel in `artwork-editor.html` for configurable frames. Likely controls: frame width, material, texture, colour swatches, mat on/off, floating frame on/off, and a live preview. The saved artwork record should store frame metadata separately from artwork size so curators can change framing without moving the work.
- **Artist statement wall treatment:** support a refined wall statement mode with stronger contrast, larger heading text, smaller body text, and clean spacing. The artwork itself should open the popup statement; a wall-text option should remain available for exhibition spaces where the statement is intentionally part of the display.
- **Gallery style presets:** consider reusable room/space presets for lighting, floor materials, wall colour, ceiling treatments, plinth/display-object layouts, and simple exhibition atmospheres. These would fit naturally with Layout Editor theme defaults and the Lighting Polish roadmap work.
- **Media asset upload:** add drag/drop or local upload support later so image, audio, and video assets can be committed into appropriate repository folders for GitHub Pages streaming rather than relying only on external URLs.
- **VR painting / Open Brush model support:** support web-friendly `.glb`/`.gltf` artworks exported from Open Brush, Tilt Brush, or similar VR-painting workflows. This should include model-specific metadata, scale/rotation/anchor controls, lazy loading, material/emissive handling, thumbnails or video fallbacks, and clear optimisation guidance so large brush-stroke exports do not overwhelm browser performance.

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
ÃƒÂ¢Ã¢â‚¬ÂÃ…â€œÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ index.html              # Main navigation and gallery landing page
ÃƒÂ¢Ã¢â‚¬ÂÃ…â€œÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ gallery-3d.html         # Three.js walkthrough gallery
ÃƒÂ¢Ã¢â‚¬ÂÃ…â€œÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ admin.html              # Gallery/admin/media management page
ÃƒÂ¢Ã¢â‚¬ÂÃ…â€œÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ layout-editor.html      # Visual room, hallway, half wall, lighting, colour and teleport editor
ÃƒÂ¢Ã¢â‚¬ÂÃ…â€œÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ artwork-editor.html     # Traditional artwork wall placement and sizing editor
ÃƒÂ¢Ã¢â‚¬ÂÃ…â€œÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ gallery-manager.html    # Local gallery manager
ÃƒÂ¢Ã¢â‚¬ÂÃ…â€œÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ publish.html            # Export/publish helper
ÃƒÂ¢Ã¢â‚¬ÂÃ…â€œÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ gallery-data.json       # Artwork/media data
ÃƒÂ¢Ã¢â‚¬ÂÃ…â€œÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ gallery-layout.json     # Room, hallway, partition, lighting, colour and teleport data
ÃƒÂ¢Ã¢â‚¬ÂÃ…â€œÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ version.json            # GitHub Pages-facing version information
ÃƒÂ¢Ã¢â‚¬ÂÃ¢â‚¬ÂÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ÃƒÂ¢Ã¢â‚¬ÂÃ¢â€šÂ¬ README.md               # Project documentation
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
