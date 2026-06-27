# Build Notes v9.30.1 - 3D Interaction and Interface Hotfix

## Changes

- Gallery mode shortcuts now ignore focused inputs, text areas, selects, and editable content.
- The viewer eye line is 1.9 metres above the floor to better suit the existing 6 metre gallery rooms.
- The separate white artist-statement icon is no longer rendered; artwork remains the interaction target for its statement and media.
- The Edit Artwork panel Close button now uses the established red danger-action treatment with clear contrast.
- The presence prototype is labelled Local preview and counts tabs from the same browser profile only.

## Publishing and presence

- Draft/editor URLs include `draft=1`, `preview`, or `edit=1` and expose curator tools.
- Published visitor URLs omit those flags and remove the Curator control.
- GitHub Pages is static hosting. Cross-device visitor counts require a realtime backend such as Supabase, Firebase, or a WebSocket service.
