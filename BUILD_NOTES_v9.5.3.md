# Gallery v9.5.3 – Managed Media + Live Preview Draft Fix

## Fixed
- Artwork Placement Editor now includes a **Use uploaded / managed media** selector.
- The selector is populated from the existing `gallery-data.json` / local gallery-data draft, so media added through Media Management can be reused without pasting the URL again.
- Selecting managed media copies title, artist, description, media type, media URL and tags into the selected artwork placement.
- Artwork editor now reads the local layout draft automatically, so rooms/walls match the current Layout Editor session.
- Layout Editor **Enter Gallery** now saves the current local draft and opens `gallery-3d.html?draft=1&preview=<timestamp>` to force the 3D gallery to use the latest local colour/layout changes.
- Media Management now writes changes to `localStorage` as `gallery-data-draft` as well as downloading `gallery-data.json`.

## Publishing note
- For testing in the same browser, JSON export is not required; local drafts are used.
- For GitHub Pages / incognito / other devices, export and commit the updated JSON files.
