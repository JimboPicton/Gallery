# Build v9.35.6 - Artwork Media Preview and Upload URL Guard

## What changed
- Added a media preview panel to artwork-editor.html so selected images, video posters, audio, and model thumbnails can be checked while editing placement and scale.
- Updated the artwork placement wall canvas to show available media thumbnails/images inside the frame instead of only text placeholders.
- Added a URL checker in Artwork Placement for catching missing GitHub Pages files and filename/path issues.
- Clarified the Media Dashboard upload workflow so generated repository paths are clearly marked as unpublished until uploaded to GitHub or committed into the repo.

## Notes
- A URL such as https://jimbopicton.github.io/Gallery/media/ss_splash.png will return 404 until that exact file exists in the repository and GitHub Pages has published it.
- Local file previews in the Media Dashboard are browser previews only; they do not upload the file unless Upload File to GitHub is used or the file is committed manually.
