# Build v9.35.7 - Portable Relative Media Paths

## What changed
- Media uploaded through the Media Dashboard now stores the repository-relative path, such as media/images/work.jpg, instead of a GitHub Pages URL.
- Artwork Placement normalises pasted GitHub Pages URLs back to portable relative gallery paths when saving.
- Managed media selection also normalises local gallery URLs so records remain portable when the site moves to another web host.
- The upload panel still shows the GitHub Pages preview URL as a helper, but the gallery data remains host-independent.

## Why
- The gallery is expected to move from GitHub Pages to a separate web host, so local gallery media should resolve relative to wherever the HTML files are hosted.
- External media, such as YouTube, Echo360, Google Drive direct links, or CQU-hosted URLs, remain absolute because they live outside the gallery package.
