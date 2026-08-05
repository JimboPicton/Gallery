# Build Notes - v9.35.9 Submission Surface Discovery Fix

## Fixes

- Expanded the Media Dashboard Submission Checklist target-wall dropdown to discover half walls from top-level layout fields, nested room fields, legacy wall arrays, and object arrays.
- Added a fallback so half-wall faces remain selectable when an older layout does not explicitly identify which room owns the wall.
- Retained relative media path handling for gallery-hosted files so the project remains portable for later web-host migration.

## Notes

- The recommended Media Dashboard flow is still: Add Media -> Submission Checklist -> Auto-place or Assign Room/Wall -> Artwork Placement fine tuning -> 3D Preview.
- External media URLs remain absolute by design; files that live in the gallery package should remain relative paths such as `media/images/student-work.png`.
