# Build Notes v9.17.0 - Hallway Walkability and Movement Smoothing

## Purpose

This build fixes intermittent invisible movement catches when walking through segmented hallway floor areas.

## Changes

- Changed hallway floor-cell walkable bounds to use the full cell area instead of shrinking each segment inward.
- Removed the tiny non-walkable seams that could appear where hallway floor cells meet.
- Split movement resolution into forward/back and sideways steps so diagonal movement near hallway edges is less likely to be fully cancelled.
- Updated build metadata to v9.17.0.

## Notes

- This change affects movement bounds only. It does not alter the visible hallway floor, wall, or ceiling geometry.
- The fix targets the segmented hallway routes created when rooms are dragged apart or connected through elbow routes.

## Validation

- Static script parsing should pass for all non-module scripts.
- The 3D module script should parse after import stripping.
- Manual hallway walking should be tested in Chrome because the local in-app browser bridge may fail to start in this environment.
