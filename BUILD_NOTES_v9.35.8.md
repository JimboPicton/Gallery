# Build v9.35.8 - Submission Placement Surface Fix

## What changed
- Added active-layout half-wall faces to the Media Dashboard Submission Checklist target-wall picker.
- Fixed bulk assignment and auto-placement so half-wall targets save the same partition-side/world-placement data used by Artwork Placement and the 3D gallery.
- Clarified the Add Media and Submission Checklist workflow order so media intake has a more obvious sequence.

## Notes
- Gallery-hosted files continue to save as portable relative paths, such as `media/images/work.png`, so the gallery can move from GitHub Pages to another web host later.
- External media, including CQU-hosted, Echo360, YouTube and Google Drive direct URLs, remain absolute.
