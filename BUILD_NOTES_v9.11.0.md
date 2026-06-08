# Build Notes v9.11.0 - Guided Tour Foundations

## Focus

This build adds the first guided-tour layer without introducing automatic movement yet.

## Changes

- Added support for explicit tour records from `layout.settings.tours` or `layout.tours`.
- Added automatic `Gallery Highlights` tour generation from placed artwork records when no explicit tour is configured.
- Added artwork focus-point generation for:
  - ordinary room/wall artwork
  - world-positioned artwork
  - half-wall / partition artwork records
- Added a presentation tour panel with stop title, description, stop count, Previous, Next and Exit controls.
- Added `E` as a next-stop action while Presentation mode is active.

## Notes

- This is deliberately a click-next tour foundation.
- Automatic walking/camera transitions should wait until stop data and curator workflow are stable.
