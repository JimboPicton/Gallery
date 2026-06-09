# Build Notes v9.21.0

## Adaptive Media Viewer

- Added a centred media viewer to `gallery-3d.html` for previewable media:
  - Images
  - Direct video files
  - YouTube embeds
  - Echo-style embeds
  - SoundCloud links
- Kept the existing side panel for link-only or text-led artwork records.
- Added an adaptive detail rail for longer artist statements so media remains large and readable.
- Added compact captions for shorter statements.
- Added modal close behaviour through:
  - Close button
  - Clicking outside the media shell
  - Escape key
- Added responsive Layout Editor toolbar behaviour so the navigation/create/draft/publish panels wrap based on available browser width instead of forcing the title panel into a narrow column.
- Recoloured Layout Editor create actions to a blue family so they no longer share the amber save/export colour.
- Bumped active build labels and `version.json` to `v9.21.0`.

## Notes

- This build changes presentation only. It does not change artwork records, media URLs, placement data, tour data, hallway geometry, or publishing workflow.
