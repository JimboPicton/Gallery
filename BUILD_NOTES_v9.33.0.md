# Build Notes - v9.33.0 Media Library Browser and Hosted URL Handling

Date: 2026-08-01

## Added
- Added a Media Library Browser to the Add Media tab in `admin.html`.
- Added local file selection with preview, inferred media type and generated repository file paths.
- Added hosted media URL construction for external hosting, CQU links, Google Drive direct links or personal web hosting.
- Added optional browser-to-GitHub media upload using the existing personal access token workflow.
- Added existing managed media reuse buttons so new records can borrow media or thumbnail URLs from records already in the active gallery.
- Added direct audio file media support in the 3D viewer and metadata editors.

## Notes
- Static GitHub Pages cannot silently upload local files by itself. The upload button uses the GitHub Contents API and requires a token with repository contents write access.
- The uploaded file is not a separate data store. It is still attached to the existing artwork/media record so the Artwork Placement editor and 3D Curator mode stay aligned.

## Verification
- Run HTML/script syntax checks and `git diff --check` before publishing.
