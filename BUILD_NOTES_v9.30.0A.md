# Build Notes v9.30.0A - 3D Interface and Curator Stability Checkpoint

## Included
- Replaced separate top-left HUD and mode controls with a compact collapsible gallery control dock.
- Added clear active-mode feedback and direct Visitor, Curator and Presentation buttons.
- Retained F as the Curator mode keyboard toggle in editor/draft views.
- Curator mode remains unavailable to published visitors.
- Added a shared 1.8 metre eye-height constant for entry, walking, teleports, saved camera restoration and presentation stops.
- Fixed circular Three.js runtime references entering artwork JSON persistence.
- Scale Up and Scale Down now update the live artwork/model and save without reloading the page.
- Added guarded context-menu actions and visible success/error notices.
- Made long context menus viewport-aware and scrollable.
- Made artwork duplication serialize only durable artwork metadata.

## Root cause of curator action failures
Artwork records held temporary Three.js mesh, material and plane references used for labels and statement positioning. The save path attempted to JSON-clone those circular runtime objects. Persistence failed immediately before reload, so scale and several related actions appeared to do nothing.

## Next checkpoint
v9.30.0B adds visual model rotation, height, position, and floor/plinth/wall anchor controls.
