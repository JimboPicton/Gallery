# Build Notes - v9.26.3 Lighting Editor Persistence Hotfix

## Fixed
- Preserved configured light `kind`, beam angle, softness, decay, and wash settings when `layout-editor.html` loads, normalises, saves, or autosaves a layout.
- Replaced raw radian/Three.js values in the selected-light panel with human-friendly controls:
  - Beam angle in degrees.
  - Softness, decay, and wash width as percentages.
- Added a small selected-light badge on the Layout Editor canvas showing the active light type and key values.
- Moved runtime light emission down to the visible lamp/fixture head so the glow no longer appears to originate from the ceiling surface.

## Notes
- Existing legacy fields are still saved alongside the new human-readable fields for backwards compatibility.
- The committed `gallery-data.json` still contains artwork records. If a browser appears to have lost artworks, check the active gallery/local draft state before assuming repository data loss.
- Pulling artwork management into the Layout Editor panel is parked as a larger feature build rather than being mixed into this hotfix.