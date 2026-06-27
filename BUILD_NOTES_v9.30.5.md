# Build Notes v9.30.5 - Media Viewer Focus and Movement Hotfix

## Changes

- Focus leaves the media Close button before its viewer is hidden.
- The closed media viewer uses `inert` as well as `aria-hidden`.
- The Close action attempts pointer-lock restoration from the same valid user gesture.
- If pointer lock is still cooling down or declined, the click-to-resume overlay remains available.
- Internal viewer resets no longer trigger an unintended pointer-lock request.
