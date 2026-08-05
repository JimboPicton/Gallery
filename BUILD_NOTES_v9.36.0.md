# Build Notes - v9.36.0

## Draft Media Preview Fallbacks

- Kept gallery-hosted media paths portable by continuing to save relative paths such as `media/example.jpg`.
- Added small local image draft previews when media is added from the Media Dashboard before the file is uploaded or committed.
- Added resilient Artwork Placement preview fallbacks for `media/`, `media/images/`, thumbnails and local draft previews.
- Replaced broken preview icons with a clear missing-file message that explains the file must exist at the saved relative path.
- Bumped admin, artwork placement, 3D preview, README and version metadata to v9.36.0.

## Notes

Existing records that point to a missing file, such as `SS_Splash.png`, still need the actual file uploaded or committed with the exact same filename and case. The new fallback prevents a silent broken image and supports local-image previews for new draft records.
