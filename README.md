
# ✨ Digital Media Student Gallery

An elegant, zero-maintenance online gallery platform for showcasing student artwork, videos, and 3D models. Built with pure HTML/CSS/JavaScript, hosted on GitHub Pages.

## Features

- 🎨 **Beautiful, Modern Design** - Gradient backgrounds, smooth animations, responsive layout
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

### 2. Add Artworks

**Option A: Using the Admin Panel (Easiest)**
1. Open `admin.html` locally in your browser
2. Click "Add New Work"
3. Fill in the form with student info and media URL
4. Click "Add to Gallery"
5. Download the updated `gallery-data.json`
6. Upload the JSON file to your repo

**Option B: Direct Editing**
1. Edit `gallery-data.json` in your repo
2. Add new artwork objects following the template

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
├── index.html              # Main gallery page
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

Customize colors by editing the CSS gradient values in `index.html`:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

## Tips for Best Results

✅ **Do**
- Use high-quality images (compress before uploading to save space)
- Write detailed descriptions of the work
- Use descriptive tags for filtering
- Test the gallery on mobile devices

❌ **Don't**
- Upload large files directly to GitHub (use external services)
- Leave required fields blank
- Use overly long titles

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
Search for `#667eea` (purple) and `#764ba2` (pink) and replace with your colors.

### Add a Logo
Add your school/institution logo by editing the header in `index.html`.

## Need Help?

1. Check the admin panel's "Help" tab for detailed instructions
2. Review the sample entries in `gallery-data.json`
3. Refer to the documentation for your media hosting service

## License

This gallery is free to use and modify for educational purposes.

---

**Created for showcasing student creativity** 🎨✨
