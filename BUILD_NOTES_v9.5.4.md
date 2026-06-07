# Gallery v9.5.4 – Teleport Behaviour Hotfix

Fixes a regression where teleport prompts and proximity activation did not run during the render loop.

## Fixed
- Teleport update loop is now called every frame.
- Pressing `E` now checks the current teleport candidate immediately.
- Proximity and "both" activation modes now trigger movement correctly.
- Teleport prompts now appear when standing near or aiming at a teleport.
- One-way editor links are now treated as reciprocal pairs in the 3D gallery, so Teleport 1 linked to Teleport 2 also allows travel from 2 back to 1.

## Testing
No JSON update is needed unless teleport settings have been changed in the editor.
