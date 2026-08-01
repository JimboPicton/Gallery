# Build Notes - v9.35.0

## Echo360 Thumbnail Workflow and Curator Frame IDs

- Added YouTube thumbnail extraction in the Add Media workflow.
- Added generated poster placeholders for Echo360/protected video workflows where browser frame capture is blocked.
- Added Echo360 thumbnail guidance directly in the media intake panel.
- Added curator-only 3D frame-code labels visible only in Curator mode.
- Added frame-code editing to `artwork-editor.html` so labels can be adjusted after auto-placement.

## Notes

Echo360 and protected CQU-hosted video pages often prevent client-side frame capture because of cross-origin browser security. The workflow now supports an explicit poster URL, a generated poster placeholder, or a manually uploaded thumbnail.
