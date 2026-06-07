# Gallery v9.5.6 — artwork/hallway hotfix

Fixes a JavaScript startup error introduced in v9.5.5:

- Removed duplicate `rangesOverlap()` declaration in `gallery-3d.html`.
- Renamed the artwork doorway overlap helper to `rangesOverlapInclusive()`.
- Keeps the v9.5.5 artwork/hallway intersection protection intact.

No JSON update is required for this hotfix unless gallery content is changed.
