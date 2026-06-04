# ✨ Digital Media Student Gallery

An elegant, zero-maintenance online gallery platform for showcasing student artwork, videos, and 3D models. Features both a **grid view** and an **immersive 3D gallery space** inspired by Spatial galleries. Built with pure HTML/CSS/JavaScript, hosted on GitHub Pages.

## Features

- 🎨 **Beautiful, Modern Design** - Gradient backgrounds, smooth animations, responsive layout
- 🎮 **Immersive 3D Gallery Space** - Walk through a simulated building with frames on walls (using Three.js)
- 📸 **Multi-Media Support** - Images, videos, and 3D models
- 🔍 **Smart Filtering** - Filter by media type instantly
- 📱 **Fully Responsive** - Perfect on desktop, tablet, and mobile
- 🚀 **No Maintenance** - Static site, zero backend required
- 📝 **Simple Admin Panel** - Easy submission management
- 🎯 **Free Hosting** - Deploy on GitHub Pages at no cost

## Quick Start

### 1. Enable GitHub Pages

1. Go to your repository settings
2. Scroll to "GitHub Pages"
3. Select `main` branch as source
4. Your gallery will be live at: `https://yourusername.github.io/Gallery/`

### 2. Choose Your Gallery View

**Grid View** (index.html)
- Traditional gallery layout
- Filter by media type
- Click items for details

**3D Gallery Space** (gallery-3d.html)
- First-person immersive experience
- Walk through a virtual building
- Artworks displayed in frames on walls
- Click frames to see details

### 3. Add Artworks

**Using the Admin Panel (Easiest)**
1. Open `admin.html` locally in your browser
2. Click "Add New Work"
3. Fill in the form with student info and media URL
4. Click "Add to Gallery"
5. Download the updated `gallery-data.json`
6. Upload the JSON file to your repo

## 3D Gallery Controls

When viewing the 3D gallery space:

- **🖱️ Mouse** - Click and drag to look around
- **W/A/S/D** - Move forward/left/backward/right
- **Space** - Move up
- **Shift** - Move down
- **Click on frames** - View artwork details

## Adding Media

### Images
- Upload to: Imgur, Cloudinary, Google Photos (shared link)
- Paste the direct image URL

### Videos
- Upload to: YouTube, Vimeo
- Paste the video URL (not embed code)

### 3D Models
- Upload to: Sketchfab, Thingiverse
- Get the embed URL and paste it

## File Structure

```
Gallery/
├── index.html              # Main gallery page (grid view)
├── gallery-3d.html         # 3D immersive gallery space
├── admin.html              # Admin panel for managing submissions
├── gallery-data.json       # Artwork data (edit this to add submissions)
└── README.md              # This file
```

## Gallery Data Format

Each artwork entry in `gallery-data.json`:

```json
{
  "title": "Artwork Title",
  "artist": "Student Name",
  "description": "Description of the work and techniques used",
  "media": "https://url-to-image-video-or-3d-model",
  "type": "image|video|model",
  "tags": ["tag1", "tag2", "tag3"]
}
```

## Styling

The gallery features:
- Dark theme with purple/pink gradients
- Smooth hover animations
- Glass-morphism effects with backdrop blur
- Mobile-responsive grid layout
- Professional 3D rendering with lighting and shadows

Customize colors by editing the CSS gradient values in `index.html` and `gallery-3d.html`:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

## 3D Gallery Technical Details

The 3D gallery uses:
- **Three.js** - 3D rendering library
- **First-person controls** - Smooth camera movement
- **Raycasting** - Click detection for frame interaction
- **Dynamic lighting** - Realistic scene illumination
- **Responsive rendering** - Adapts to window size

Frames are automatically positioned on the left and right walls based on the number of submissions. The scene is optimized for smooth performance even with many artworks.

## Tips for Best Results

✅ **Do**
- Use high-quality images (compress before uploading to save space)
- Write detailed descriptions of the work
- Use descriptive tags for filtering
- Test both grid and 3D views on various devices
- Upload images with good aspect ratios for the 3D frames

❌ **Don't**
- Upload large files directly to GitHub (use external services)
- Leave required fields blank
- Use overly long titles
- Use images that are too small (min 400x400px recommended)

## Hosting Media

To keep your GitHub repo lightweight, use free hosting services:

| Platform | Best For | Free Tier |
|----------|----------|-----------|
| Imgur | Images | Yes, unlimited |
| Cloudinary | Images/Video | Yes, 25GB/month |
| YouTube | Videos | Yes |
| Sketchfab | 3D Models | Yes, 100MB each |

## Troubleshooting

**Gallery not showing up?**
- Ensure GitHub Pages is enabled
- Wait 2-3 minutes for deployment
- Check your Settings → Pages configuration

**Images not loading?**
- Verify the URL is correct and publicly accessible
- Try a different image hosting service
- Check your browser's console for errors

**3D gallery not rendering?**
- Ensure your browser supports WebGL
- Try a different browser (Chrome, Firefox, Safari, Edge)
- Check that gallery-data.json exists in the repo

**Admin panel not working?**
- Open admin.html in a modern browser (Chrome, Firefox, Safari)
- Check that gallery-data.json exists in the repo
- Download the JSON file after making changes and upload it

## Customization

### Change the Title
Edit line 27 in `index.html`:
```html
<h1>✨ Student Gallery</h1>
```

### Change Colors
Search for `#667eea` (purple) and `#764ba2` (pink) and replace with your colors in both index.html and gallery-3d.html.

### Adjust 3D Gallery Space Size
In `gallery-3d.html`, modify these constants (line ~93):
```javascript
const ROOM_WIDTH = 80;
const ROOM_DEPTH = 100;
const ROOM_HEIGHT = 15;
```

### Change Frame Size
Modify the frame dimensions in `loadAndCreateGallery()` (line ~334):
```javascript
const frameWidth = 8;
const frameHeight = 6;
```

## Browser Compatibility

- ✅ Chrome/Chromium (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ⚠️ 3D gallery requires WebGL support

## Need Help?

1. Check the admin panel's "Help" tab for detailed instructions
2. Review the sample entries in `gallery-data.json`
3. Refer to the documentation for your media hosting service
4. Check the browser console for error messages

## Performance Tips

- Optimize images before uploading (use TinyPNG or similar)
- Use JPG for photographs, PNG for graphics
- For 3D models, use Sketchfab's embed feature (optimized)
- Test gallery load times with browser DevTools

## License

This gallery is free to use and modify for educational purposes.

---

**Created for showcasing student creativity** 🎨✨

**Two ways to explore:**
1. 📊 Grid View - Traditional gallery browsing
2. 🎮 3D Gallery - Immersive spatial experience

## Layout editor update: numbered hallway nodes

The layout editor now shows numbered hallway connection nodes on every room. Use **Add Hallway by Selecting Nodes**, click the starting node, then click the destination node. The first selected node turns yellow. Hovering over a node shows the room and wall location.

You can still select an existing hallway and manually adjust its start/end rooms, numbered connection nodes, width, height, and colour from the Hallway tab.

## v4 editor upgrades

This version adds safer editing and richer gallery controls:

- `layout-editor.html`
  - Autosaves drafts to browser localStorage.
  - Restores local drafts when available.
  - Can export, copy, or save `gallery-layout.json` directly to GitHub using a token.
  - Adds draggable light nodes for manual light placement in rooms and hallways.
  - Each light supports X/Z position, Y height, colour, intensity, and distance.

- `artwork-editor.html`
  - Autosaves drafts to browser localStorage.
  - Can export, copy, or save `gallery-data.json` directly to GitHub using a token.
  - Allows manual artwork width/height adjustment.
  - Allows duplicate artwork placement.
  - Adds artist statement display options: popup only, wall only, both, or none.
  - Allows statement position and dimensions to be adjusted.

- `gallery-3d.html`
  - Reads the new light settings and statement display options.
  - Shows wall-mounted artist statements when enabled.
  - Supports popup statements when artworks are clicked.
  - Direct video files such as `.mp4`, `.webm`, and `.ogg` open with browser video controls and a playhead in the popup.
  - YouTube and Echo360 links open in embedded iframes where allowed by the source platform.

### Direct GitHub save

The direct save buttons require a GitHub token with repository contents read/write access. This is intended for admin use only. The token is entered in the browser and is not stored by the editor.

