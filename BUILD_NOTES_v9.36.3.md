# Build Notes - v9.36.3 Echo360 Public Embed Support

## Summary
- Added support for pasting a full public Echo360 iframe snippet into media URL fields.
- Normalises iframe snippets to the clean `src` URL before saving JSON.
- Embeds public Echo360 `/media/.../public` URLs inline in the 3D media viewer.
- Keeps protected Echo360 collection links as external launch links because they are not reliable iframe sources.

## Curator Workflow
Paste either the full iframe code or just the `src` value:

```html
<iframe height="420" width="640" allowfullscreen frameborder=0 src="https://echo360.net.au/media/1111e8a5-f10f-4c7d-b530-1132b006d2f5/public?autoplay=false&automute=false"></iframe>
```

The gallery stores:

```text
https://echo360.net.au/media/1111e8a5-f10f-4c7d-b530-1132b006d2f5/public?autoplay=false&automute=false
```

## Notes
- Echo360 public access must remain enabled for public playback.
- Older collection/media page URLs still open externally.
