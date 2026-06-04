# Digital Media Student Gallery

A static, GitHub Pages-friendly virtual exhibition platform for Creative Media student work. The project includes a main gallery, an immersive Three.js walkthrough, an artwork editor, and a visual layout editor for rooms, hallways, lighting, wall colours, artwork placement, and teleport points.

## Current Version

**v4.5 — Teleport, hallway collision, and palette UX fixes**

### Latest changes

- Fixed hallway movement after the previous doorway alignment update. Doorway openings now remain visually aligned while the walkable bounds allow the viewer to pass through them.
- Added a **Teleport** tool to the layout editor.
- Teleport tokens appear on the 3D gallery floor with a visual icon.
- Hovering over a teleport token shows its destination label.
- Clicking a teleport token moves the viewer directly to its configured destination.
- Added visible selection highlighting to colour palette swatches.
- Updated `gallery-layout.json` schema to support `settings.teleports`.

## Files

```text
Gallery/
├── index.html              # Main navigation and gallery landing page
├── gallery-3d.html         # Three.js walkthrough gallery
├── admin.html              # Artwork management page
├── layout-editor.html      # Visual room, hallway, lighting, colour and teleport editor
├── artwork-editor.html     # Artwork wall placement and sizing editor
├── gallery-data.json       # Artwork/media data
├── gallery-layout.json     # Room, hallway, lighting, colour and teleport data
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

Do not double-click the HTML files directly when testing Three.js modules or JSON loading. Run a simple local web server from the project folder:

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
- Edit wall colours and wall textures.
- Set global default wall colours.
- Add and position light nodes.
- Add and position teleport tokens.
- Export, copy, locally save, restore, or optionally save `gallery-layout.json` to GitHub.

### 2. Place artworks

Open:

```text
artwork-editor.html
```

Use this editor to:

- Assign artworks to rooms.
- Choose the wall for each artwork.
- Adjust artwork X/Y placement.
- Adjust artwork width and height.
- Duplicate artwork placement entries.
- Choose whether artist statements appear as wall text, popups, both, or neither.

### 3. View the 3D gallery

Open:

```text
gallery-3d.html
```

Controls:

- Click to enter pointer-lock mode.
- `W/A/S/D` to move.
- Mouse to look.
- Click artworks to view media and statements.
- Hover/click teleport tokens to move to another location.
- `ESC` releases the cursor so the top-left menu can be used.

## Layout Data: `gallery-layout.json`

The layout file controls rooms, hallway connections, wall colours, lighting, and teleport tokens.

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

### Hallway example

```json
{
  "id": "hall1",
  "from": "animation",
  "to": "games",
  "fromWall": "right",
  "fromSlot": "center",
  "toWall": "left",
  "toSlot": "center",
  "width": 4,
  "height": 4,
  "wallColor": "#22222a"
}
```

Hallways are created from numbered nodes in the layout editor. The 3D gallery uses those nodes to cut wall openings and create walkable hallway bounds.

### Lighting example

```json
{
  "id": "light1",
  "x": 0,
  "y": 5.5,
  "z": 0,
  "intensity": 1.8,
  "color": "#ffffff",
  "distance": 18
}
```

Lights are stored under:

```json
"settings": {
  "additionalLights": []
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
  "toX": 30,
  "toZ": 0,
  "destinationLabel": "Games & Interactive Media"
}
```

Teleports are stored under:

```json
"settings": {
  "teleports": []
}
```

In the 3D gallery, teleport tokens are shown as floor icons. Hovering over one displays the destination. Clicking one moves the viewer to `toX` / `toZ`.

## Colour Palette System

The layout editor supports:

- A global default wall colour.
- A reusable colour palette.
- Per-room wall colour.
- Per-wall overrides for front, back, left, and right walls.
- Visual highlighting of selected palette swatches.

The palette lives in:

```json
"settings": {
  "defaultWallColor": "#2a2a33",
  "palette": ["#2a2a33", "#f5f0e8", "#334155"]
}
```

## Artwork Data: `gallery-data.json`

Artwork placement can include room, wall, size, media type, and statement display settings.

```json
{
  "title": "Artwork Title",
  "artist": "Student Name",
  "description": "Artist statement or project description.",
  "media": "https://example.com/media.mp4",
  "mediaType": "video",
  "room": "animation",
  "wall": "back",
  "x": 0,
  "y": 3.1,
  "width": 3,
  "height": 1.7,
  "statementDisplay": "both",
  "statementSide": "right",
  "statementWidth": 2.2,
  "statementHeight": 1.1
}
```

Supported `statementDisplay` values:

```text
popup
wall
both
none
```

## Media Support

The gallery supports:

- Images via direct image URLs.
- Direct video files such as `.mp4`, `.webm`, and `.ogg` with browser controls/playhead.
- YouTube embeds.
- Echo360/EchoVideo embeds, provided the institution allows public or authenticated sharing links.
- External links for media that cannot be embedded.

## Saving and Publishing

GitHub Pages is static hosting, so the editor cannot write to your repo unless you use the optional GitHub API save tool.

The layout editor supports:

- Local autosave in the browser.
- Restore local draft.
- Export `gallery-layout.json`.
- Copy JSON to clipboard.
- Optional Save to GitHub using a token with repository contents write access.

If using export manually, replace the repo’s `gallery-layout.json` with the downloaded file and wait for GitHub Pages to refresh.

## Troubleshooting

### I cannot walk through a hallway opening

Use this version or later. Earlier v4 hallway fixes could visually align the doorway but leave a small gap in the walkable bounds. v4.5 fixes the walkable bounds so room and hallway spaces meet at the doorway.

### Wall colour did not change

Check whether a per-wall override is set. The priority order is:

1. Per-wall colour override.
2. Room default wall colour.
3. Global default wall colour.

### The editor reset wiped my work

Use **Restore** to recover the browser-local draft if autosave had captured it. Export major layout changes regularly.

### JSON changed but GitHub Pages still shows the old layout

Open `gallery-layout.json` directly in the browser and hard refresh. GitHub Pages can take a short time to update after commits.

## Changelog

### v5.2 - Layout Editor Context Menu
- Added right-click context menus in `layout-editor.html`.
- Right-click rooms, hallways, lights, teleports, or audio nodes to edit, duplicate, copy JSON, or delete.
- Right-click empty layout space to add a room, light, teleport, or audio source at that exact map location.
- This improves visual editing and reduces reliance on the top toolbar.


### v5.1 — Teleport Pairing UX + Favicon Fix
- Fixed teleport pairing mode so clicking the first teleport no longer cancels pairing mode.
- Added clearer pairing instructions: click the start teleport, then click the destination teleport.
- Added a highlighted visual state for the first selected teleport token.
- Added a small `favicon.svg` and linked it from the main HTML pages to remove the browser `/favicon.ico` 404 warning.


### v4.5

- Fixed hallway walk-through collision after doorway alignment changes.
- Added teleport token editor and 3D teleport behaviour.
- Added hover labels for teleport destinations.
- Added selected-state highlighting for palette swatches.
- Updated README documentation.

### v4.4

- Fixed layout editor reset issue.
- Reorganised layout editor toolbar.
- Improved safe fallback behaviour when repo JSON fails to load.

### v4.3

- Added wall colour palette tools.
- Added global default wall colour.
- Added per-wall colour overrides.

### v4.2

- Fixed hallway doorway alignment.
- Improved 2D/3D hallway geometry consistency.

### v4.1

- Added draggable light nodes.
- Added artwork duplication and sizing.
- Added artist statement wall/popup options.
- Improved video display handling.

## Browser Compatibility

- Chrome / Chromium recommended.
- Firefox supported.
- Edge supported.
- Safari supported where WebGL and pointer lock are available.


---

## Changelog: v5 UX, Teleport Pairing, and Spatial Audio

### Layout Editor UX cleanup

The colour and customisation controls have been reorganised into a clearer hierarchy:

1. **Gallery Theme Defaults**
   - Global default wall colour
   - Global floor and ceiling colours
   - Default hallway colour
   - Ambient and directional light levels
   - Editable colour palette swatches

2. **Selected Room Overrides**
   - Room-specific wall colour
   - Room-specific wall texture URL
   - Room label settings

3. **Per-Wall Overrides**
   - Front, back, left, and right wall colour overrides
   - Per-wall texture URL fields

The renderer applies these in this order:

```text
Per-wall override → Selected room override → Gallery theme default
```

### Colour palette indicators

Palette swatches now visibly highlight the selected colour, making it clearer which palette colour is currently applied to a field.

### Teleport pairing

Teleports are now intended to work visually rather than by manually entering destination coordinates.

Workflow:

1. Open `layout-editor.html`.
2. Click **Teleport** to create teleport tokens.
3. Drag each token onto the gallery floorplan.
4. Click **Pair Teleports**.
5. Click the first teleport token.
6. Click the second teleport token.

The editor displays a styled double-headed arrow between paired teleport tokens. In the 3D gallery, hovering over a teleport displays its destination label, and clicking it moves the viewer to the paired teleport.

Manual destination coordinates are still available as a fallback.

### Teleport visual cleanup

The previous floating blue destination label above teleport tokens has been removed from the 3D gallery. Teleport information now appears as a hover label so it is less visually distracting.

### Spatial audio sources

The layout editor now supports draggable audio source nodes.

Supported source types:

- Direct MP3 / OGG / WAV / M4A file URL
- YouTube link
- SoundCloud link
- Echo360 link

Important limitation: browser security means that only direct audio files can reliably support distance-based fading inside the 3D space. YouTube, SoundCloud, and Echo360 links are documented as external/embed-style media sources rather than true spatial audio sources.

Direct audio source settings include:

- label
- kind: ambient or narration
- source URL
- X/Z position
- height
- fade radius
- volume
- loop on/off

### Viewer audio controls

The 3D gallery now includes viewer-facing sound controls:

- Enable sound
- Mute
- Master volume
- Audio status indicator

Audio does not autoplay. The viewer must click **Enable sound**, which is required by modern browser autoplay policies.

### Files updated

- `layout-editor.html`
- `gallery-3d.html`
- `gallery-layout.json`
- `README.md`

### v5.3 Audio UI Fix
- Fixed the 3D gallery audio toggle so **Enable sound** becomes **Disable sound** and actually pauses/resets direct audio sources.
- The mute checkbox and master volume slider now update the active audio state reliably.
- Removed visible audio floor icons from the 3D walkthrough; audio source markers remain an editor-only layout tool.

## Changelog

### v5.4 – Palette selection fix
- Fixed colour palette swatches in the Layout Editor so selecting a swatch updates the active colour field without immediately rebuilding the form.
- Added clear selected-state highlighting for the currently selected swatch.
- Added status feedback reminding users to click Apply to save colour changes into `gallery-layout.json`.


## v5.5 Teleport Activation Update

- Teleports now use a clearer default interaction: look at or stand near a teleport pad, then press **E** to travel.
- Teleports can optionally use automatic walk-over activation by setting `interaction` to `auto` or `walkover` in `gallery-layout.json`.
- Each teleport supports a configurable trigger radius using `radius`, for example `"radius": 2.2`.
- The 3D gallery now displays a clear prompt such as `Press E to travel` when a teleport is available.
- Click-to-teleport was removed from the main interaction path to avoid accidental teleporting while inspecting artworks.

### Teleport JSON Example

```json
{
  "id": "teleport-animation-to-games",
  "label": "Games Room",
  "x": 0,
  "z": 3,
  "linkedTo": "teleport-games-to-animation",
  "interaction": "press",
  "radius": 2.2
}
```

Use `interaction: "press"` for deliberate **E key** activation. Use `interaction: "auto"` only where walk-over teleporting is preferred.
