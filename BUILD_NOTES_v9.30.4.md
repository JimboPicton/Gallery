# Build Notes v9.30.4 - Shared Version Display Hotfix

## Changes

- Added `version-display.js` as the shared browser-side version renderer.
- The homepage version badge and footer now read the authoritative `version.json`.
- Gallery Manager, Admin, Layout Editor, and 3D Gallery use the same shared source.
- Version requests bypass browser caching while retaining a correct static fallback.
