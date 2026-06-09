# Build Notes - v9.27.0 Layout Editor Artwork Foundations

## Added
- Added a new Artwork tab in `layout-editor.html`.
- The Artwork tab lists artworks for the selected room using explicit room IDs and world-position bounds.
- Added basic metadata editing for title, artist, statement/description, media URL, media type, dimensions, and wall/local placement fields.
- Added artwork source status so curators can tell whether they are editing active project data, browser draft data, or published repository JSON.
- Added a direct link back to `artwork-editor.html` for full placement-editor workflows.

## Lighting cleanup
- Point Fill keeps the visible downlight/spot-style model.
- Soft Area Wash keeps the existing soft area lighting but no longer renders the dangling fixture model.
- Ceiling Spot has been reframed as a Ceiling Cove style: a bright ceiling-edge fixture with broader illumination.

## Notes
- Artwork edits made in Layout Editor save to the active gallery project or browser artwork draft. Use the existing Publish workflow to export/persist JSON when ready.
- This is the foundation build for integrating artwork workflows into Layout Editor; the full artwork placement/editor page remains available.