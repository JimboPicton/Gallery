# Build v9.36.2 - Echo360 External Link Handling

## Fixes
- Echo360 URLs are now treated as protected external launch links, even if the media type is still set to Link.
- Artwork Placement no longer reports Echo360 launch pages as missing repository media files.
- Link/Echo360 poster thumbnails are allowed as wall and placement previews.
- The 3D media viewer now opens Echo360 media in a new browser tab instead of attempting an iframe embed that Echo360 may block.
- Media Dashboard infers Echo360 type from echo360.net.au URLs.

## Notes
- Echo360 access still depends on the sharing and authentication settings in Echo360/CQU.
- Repository-relative media paths are still preferred for uploaded gallery assets so the site can move cleanly to another webhost later.
