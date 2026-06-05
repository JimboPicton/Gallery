# Digital Media Student Gallery

A static, GitHub Pages-friendly virtual exhibition platform for Creative Media student work. The project includes a main gallery, immersive Three.js walkthrough, visual layout editor, artwork/media placement editor, and admin content tools.

## Current Version

**v5.7 — Architecture stabilisation, minimap, guided tour, GLB model support**

### Latest changes in this build

- Formalised wall colour/texture resolution so the layout editor and 3D renderer now use the same hierarchy: gallery theme default → selected room override → individual wall override.
- Added a visual wall-colour preview strip to rooms in the layout editor so front/right/back/left wall colours can be checked without opening the 3D gallery.
- Added a 3D gallery minimap for visitors. Press `M` or use the minimap Hide/Show button.
- Added a lightweight guided tour HUD in the 3D gallery with Start, Next and Stop controls.
- Added GLB/GLTF model support using Three.js `GLTFLoader`.
- Added `model` as a media type in the artwork editor.
- Added editable model scale and Y rotation fields in the artwork editor.
- Added teleport activation settings to the layout editor: Press E or walk-over auto trigger, plus activation radius.
- Preserved the GitHub Pages static JSON workflow.

## Files

```text
Gallery/
├── index.html              # Main navigation and gallery landing page
├── gallery-3d.html         # Three.js walkthrough gallery
├── admin.html              # Artwork/media management page
├── layout-editor.html      # Visual room, hallway, lighting, colour, audio and teleport editor
├── artwork-editor.html     # Artwork/media/model placement and sizing editor
├── gallery-data.json       # Artwork, media and model data
├── gallery-layout.json     # Room, hallway, lighting, colour, audio and teleport data
└── README.md               # Project documentation
```

## Running on GitHub Pages

The project is designed to run directly from GitHub Pages.

For a project repository named `Gallery`, the public site will usually be:

```text
https://<username>.github.io/Gallery/
```

Use relative paths such as:

```text
./gallery-layout.json
./gallery-data.json
./gallery-3d.html
```

Avoid root-relative paths such as `/gallery-layout.json`, because those can break on GitHub Pages project sites.

## Running Locally

Do not double-click the HTML files directly when testing Three.js modules, GLB models or JSON loading. Run a local web server from the project folder:

```bash
python -m http.server
```

Then open:

```text
http://localhost:8000
```

## Main Workflow

### 1. Design the gallery layout

Open:

```text
layout-editor.html
```

Use this editor to:

- Add and drag rooms.
- Create hallways by selecting numbered room connection nodes.
- Edit global, room and individual wall colours.
- Check the per-wall colour preview strip on each room.
- Set wall textures.
- Add and position light nodes.
- Add and pair teleport tokens.
- Choose teleport activation mode and radius.
- Add and position audio nodes.
- Export, copy, locally save, restore, or optionally save `gallery-layout.json` to GitHub.

### 2. Place artworks, media and models

Open:

```text
artwork-editor.html
```

Use this editor to:

- Assign artworks to rooms.
- Choose the wall for image/video/link artwork placement.
- Adjust X/Y placement, width and height.
- Choose whether artist statements appear as wall text, popup text, both or neither.
- Set media type to `image`, `youtube`, `echo360`, `video`, `model`, or `link`.
- For GLB/GLTF models, enter the model URL/path, scale and Y rotation.

### 3. View the 3D gallery

Open:

```text
gallery-3d.html
```

Controls:

- Click to enter pointer-lock mode.
- `W/A/S/D` to move.
- Mouse to look.
- Click artworks or models to inspect metadata/media.
- Press `E` near a Press E teleport token.
- Walk over auto-trigger teleports if enabled.
- Press `M` to show/hide the minimap.
- Use the Guided Tour controls to step through artworks and models.
- `ESC` releases the cursor so page controls and links can be used.

## Layout Data: `gallery-layout.json`

The layout file controls rooms, hallway connections, wall colours, lighting, audio and teleport tokens.

### Colour hierarchy

Wall colours are resolved in this order:

```text
settings.defaultWallColor
  → room.wallColor
  → room.wallColors.front/back/left/right
```

Wall textures follow the same structure:

```text
room.wallTexture
  → room.wallTextures.front/back/left/right
```

### Room example

```json
{
  "id": "animation",
  "title": "Animation",
  "x": 0,
  "z": 0,
  "width": 20,
  "depth": 14,
  "height": 6,
  "wallColor": "#2a2a33",
  "wallColors": {
    "front": "#2a2a33",
    "back": "#334155",
    "left": "#2a2a33",
    "right": "#2a2a33"
  },
  "wallTexture": "",
  "wallTextures": {},
  "label": {
    "text": "Animation",
    "wall": "front",
    "x": 0,
    "y": 4.8
  }
}
```

### Teleport example

```json
{
  "id": "teleport1",
  "label": "Jump to Games",
  "x": 0,
  "z": 3,
  "size": 1.4,
  "linkedTo": "teleport2",
  "destinationLabel": "Games & Interactive Media",
  "interaction": "press",
  "radius": 2.2
}
```

Use `interaction: "press"` for Press E activation or `interaction: "auto"` for walk-over activation.

## Artwork and model data: `gallery-data.json`

### Standard artwork example

```json
{
  "id": "art1",
  "title": "Student Work",
  "artist": "Student Name",
  "description": "Artist statement text.",
  "room": "animation",
  "wall": "back",
  "x": 0,
  "y": 3.2,
  "width": 3.2,
  "height": 1.8,
  "mediaType": "image",
  "media": "uploads/work.jpg"
}
```

### GLB model example

```json
{
  "id": "model1",
  "title": "Digital Sculpture",
  "artist": "Student Name",
  "description": "A placed 3D model.",
  "room": "animation",
  "mediaType": "model",
  "media": "models/sculpture.glb",
  "x": 0,
  "y": 0,
  "z": 0,
  "modelScale": 1,
  "rotationY": 0
}
```

For model records, `x` and `z` are offsets from the room centre. `y` is height above the floor. `modelScale` controls overall scale and `rotationY` is in degrees.

## Audio Notes

Direct MP3/OGG/WAV/M4A files can be used as gallery or room audio sources with distance fade.

YouTube, SoundCloud and Echo360 URLs are not direct audio streams and should be treated as embedded media or external links rather than spatial audio sources.

## Changelog

### v5.8

- Added centre-screen viewer reticle/crosshair in the 3D gallery.
- Reticle changes state when looking at artworks, media, models and teleport pads.
- Pointer-lock click handling now uses the centre gaze ray for more VR-like interaction behaviour.
- Kept the feature viewer-facing only so the editor UI remains uncluttered.

### v5.7

- Shared wall colour/texture resolver added to editor and 3D renderer.
- Layout editor room previews now reflect resolved wall colours.
- Added minimap HUD to 3D gallery.
- Added guided tour HUD to 3D gallery.
- Added GLB/GLTF model loading via `GLTFLoader`.
- Added model media type, model scale and Y rotation fields to artwork editor.
- Added teleport activation mode and radius controls.

### v5.6

- Expanded admin metadata editing.
- Added duplication, search/filter, autoplay toggle and import/export concepts.

### v5.5

- Improved teleport activation workflow.
- Added clearer teleport prompts and pairing behaviour.

### v5.4 and earlier

- Added palette selection fixes, audio UI fixes, context menu tools, hallway snapping, lighting, teleports and visual layout editing.

## v5.9 – Management, Media Preview, UI and Colour Fixes

### Admin / Manage Submissions
- Rebuilt `admin.html` management workflow.
- Manage Submissions now supports metadata editing, duplication, deletion, search/filter, import, copy JSON, and export of `gallery-data.json`.
- Added support for media types: image, YouTube, Vimeo, Echo360, direct video, GLB/GLTF model, and external link.
- Added YouTube thumbnail cards in the management screen.

### YouTube Artwork Behaviour
- YouTube artworks now display a thumbnail-style wall preview rather than only title/artist placeholder text.
- Selecting a YouTube artwork now opens an embedded player panel with usable controls.
- The 3D gallery now releases pointer lock when opening the artwork/media panel so the viewer can use the YouTube playhead and controls.
- Optional autoplay metadata is supported for media popups.

### Consistent Editor UI
- Updated `artwork-editor.html` to better match the visual approach used in the Gallery Editor.
- Added clearer top navigation, card styling, improved side panel styling, and visual media badges.
- YouTube/image artworks now show a more meaningful preview in the wall positioning editor.

### Colour System Repair
- The 3D gallery now checks local editor drafts before falling back to repo JSON, so room/environment colour edits can be previewed immediately without first exporting/replacing JSON.
- Changing a room wall colour in the Layout Editor now synchronises the four wall colour fields, preventing stale per-wall overrides from making it appear that colour changes are not working.
- Added an “Apply wall colour to all rooms” option in Gallery Theme Defaults for fast exhibition-wide colour changes.

### Notes
- GitHub Pages remains static, so exported JSON still needs to be committed/replaced for the public live site unless using the GitHub save option.
- Local draft preview is intended for editor testing on the same browser/device.

## v6.0 hallway, labels and media interaction polish

- Removed the doorway threshold/cap planes that could appear as stray geometry inside hallways.
- Reworked room labels as clean transparent text with no grey panel or border.
- Added room-label editor options for subtitle, font choice, text size, text colour and label width.
- Updated the 3D media panel to open as a larger centred overlay and suppress the pointer-lock entry overlay while media is being used.
- Improved YouTube embeds with a larger playback panel and a fallback “Open on YouTube” link.


## v6.1 - Gallery Management and Welcome Banner

- Added `gallery-manager.html` for creating, duplicating, selecting, importing and exporting additional galleries in the browser.
- Added active-gallery support through `?gallery=` links and local browser storage so editors, submissions and the 3D viewer can target different gallery projects.
- Updated main page naming for consistency: Gallery Layout Editor, Artwork Placement Editor, Manage Submissions, Gallery Manager.
- Added a configurable welcome banner / cultural notice shown before entering the 3D gallery.
- Welcome banner supports transparent logo URLs, title, body text, custom button text, background opacity and show-once behaviour per gallery/browser.

### Note on multiple galleries

Because GitHub Pages is static hosting, browser-created galleries are saved locally unless exported and committed to the repository or backed by a future authenticated save workflow. Use Gallery Manager > Export Bundle to move or back up a gallery project.

## v6.2 Hallway, YouTube Overlay and JSON Reminder Fixes

- Fixed hallway rendering so offset doorway connections no longer create overlapping internal wall planes.
- Removed the extra in-scene placeholder/play mesh from video artworks; the reticle now provides the interaction cue without visually blocking the thumbnail.
- Updated YouTube embeds to use a cleaner playback panel with pointer lock released.
- Fixed Manage Submissions persistence so local draft edits are not immediately overwritten by the repository JSON when the list refreshes.
- Added an export/upload reminder when gallery metadata changes, reminding editors to export/copy `gallery-data.json` and upload or commit it to GitHub for the live site.

## v6.3 - Simplified Navigation, Gallery Access and VR Starter

- Simplified `index.html` around three clear user intents: **Enter the Gallery**, **Manage Galleries**, and **Design and Media Management Tools**.
- Renamed the admin workflow to **Manage Artwork & Media** for consistency across pages.
- Strengthened Gallery Manager as the central curator hub for selecting the active gallery and launching layout, artwork/media, and placement tools.
- Added optional password-gated gallery access for locally managed galleries.
- Added clear warning that static GitHub Pages password gates are suitable for draft review/casual access control only, not secure private hosting.
- Added WebXR/VR starter support via the Three.js VR button. This enables headset entry where supported by browser/device over HTTPS.
- Updated the 3D gallery access flow so password-protected galleries are unlocked before the welcome/cultural notice screen is shown.
