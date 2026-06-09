# Build Notes v9.24.0 - Performance and Stability

## Improved

- Added shared material caching for repeated wall, floor, ceiling and hallway materials in the 3D gallery.
- Added shared plane geometry caching so repeated wall/floor/artwork surfaces do not create a new geometry every time.
- Capped renderer pixel ratio to reduce GPU pressure on high-DPI screens while keeping the gallery visually crisp.
- Deferred image and YouTube artwork thumbnail loading until the viewer is close enough, with a small per-frame load budget to avoid startup spikes.

## Stability

- Kept immediate placeholder artwork cards so frames remain visible before heavier thumbnail media loads.
- Kept video, Echo, SoundCloud and other embedded media as interaction-only previews rather than loading heavy playback content into the 3D scene.

## Notes

- This build focuses on runtime smoothness. It does not change gallery data structure or curator workflow.
