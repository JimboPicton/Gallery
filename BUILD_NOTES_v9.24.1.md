# Build Notes - v9.24.1 Reticle Interaction Hotfix

## Focus

- Restore mouse reticle clicking in the 3D gallery so artwork, artist statements, audio triggers and teleports respond consistently without needing the E key.

## Changes

- Routed primary mouse clicks through the same centre-ray interaction chain used by the E key.
- Added document-level pointer capture for the locked-pointer gallery view, while ignoring clicks on HUD, panels, overlays and other interface chrome.
- Made teleport activation return an explicit success value so artwork, audio and teleport actions can share one predictable click path.

## Notes

- The E key remains available as a fallback interaction.
- UI buttons and panels are protected from the reticle handler so ordinary interface clicks continue to behave normally.
