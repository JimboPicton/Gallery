# Gallery v9.7.1 — Hallway Circulation Network Union

## Purpose

This build changes hallway rendering from individual conduit/prism rendering to a single global hallway circulation network.

## Main change

The 3D renderer now:

1. collects every hallway route,
2. converts each route segment into an axis-aligned rectangular walkable footprint,
3. unions all hallway footprints into one shared corridor network,
4. renders shared floor and ceiling cells once,
5. renders only the external corridor perimeter walls, and
6. removes portal-facing edges at room doorway openings.

This is intended to eliminate the internal walls, black vertical slivers, floor seams and clipping planes that appeared when multiple hallway segments were rendered separately.

## Files updated

- `gallery-3d.html`
- `gallery.mjs`
- `index.html`
- `README.md`
- `version.json`

## Notes

The hallway model remains portal-based, but the visible hallway mesh is now treated as one connected circulation system. This better matches the intended function of a hallway as a transition zone for walking from one area to another.
