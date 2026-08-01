# Build v9.32.0 - Public Private Publishing Model

Date: 2026-08-01

## Included

- Added a read-only public export path in Publish Tools.
- Added a curator backup bundle separate from the visitor-facing public JSON package.
- Hardened `gallery-3d.html` so public mode removes curator links and blocks private galleries.
- Updated public gallery links so visitors use plain URLs rather than `draft=1` preview links.

## Notes

- Password-protected galleries remain lightweight client-side protection because GitHub Pages is static.
- `Private / Draft Only` galleries are intended for curator testing and are blocked from public export/viewing.
