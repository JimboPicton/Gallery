# Build v9.26.0 - Visitor Presence Prototype

## Included

- Added a compact 3D visitor HUD with an active local-session count.
- Added anonymous mini-map presence markers for other active local sessions in the same browser profile.
- Added per-gallery localStorage keys and stale-session expiry so old visitor records do not linger.
- Added a marker toggle that persists the curator/viewer preference in the browser.

## Notes

This is deliberately GitHub Pages-safe. It does not provide true cross-device live visitor tracking because there is no backend service in the static site. It gives us the UI and data-shape checkpoint for a later server-backed presence layer if needed.
