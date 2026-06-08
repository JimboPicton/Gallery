# Build Notes v9.18.0 - Tour Editor UI

## Purpose

This build adds a curator-facing Tour Editor so Presentation Mode tours can be created and maintained without hand-editing JSON.

## Changes

- Added a `Tour Editor` tab to `admin.html`.
- Added tour creation, deletion, selection, and title editing.
- Added artwork stop creation from the active gallery artwork list.
- Added stop ordering, removal, title override, duration, and narration fields.
- Saved tour data into the active layout as `settings.tours` and `tours` for compatibility with the existing 3D Presentation Mode loader.
- Updated build metadata to v9.18.0.

## Notes

- Publish already exports the normalized active layout, so saved tours are included in `gallery-layout.json`.
- Presentation Mode continues to resolve camera focus from the artwork placement linked by each stop's `artworkId`.

## Validation

- Static script parsing should pass for all non-module scripts.
- The 3D module script should parse after import stripping.
