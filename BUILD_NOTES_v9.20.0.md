# Build Notes v9.20.0

## Unified Panel System

- Added `gallery-ui.css` as the shared UI layer for the active GitHub Pages tools.
- Updated the shared colour tokens to the supplied CQU palette:
  - Conifer `#C7DC5D`
  - Te Papa Green `#1E4041`
  - White `#FFFFFF`
- Standardised Noto Sans as the default interface typeface.
- Rebuilt `gallery-manager.html` with the same appbar, panel, card and action-button patterns used across Admin, Layout, Publish and Artwork Placement.
- Standardised functional button colours:
  - Neutral blue-grey for navigation and secondary actions.
  - Te Papa Green variants for create/edit/tool actions.
  - Amber for save/export actions.
  - Green for publish/enter-gallery actions.
  - Red for delete/reset/destructive actions.
- Bumped active build labels and `version.json` to `v9.20.0`.

## Notes

- This build focuses on visual and functional consistency only. It avoids changing gallery data structures, placement logic, hallway geometry, or publishing workflows.
