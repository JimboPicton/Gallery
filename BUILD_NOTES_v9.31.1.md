# Build Notes - v9.31.1 Unified Curator Console Shell

## Purpose

This build corrects the inconsistent one-page rollout by applying a shared left-hand curator console to the management pages.

## Changes

- Added the shared Curator Console sidebar to:
  - `index.html`
  - `gallery-manager.html`
  - `admin.html`
  - `layout-editor.html`
  - `artwork-editor.html`
  - `publish.html`
- Removed the Admin-only rail introduced in v9.31.0.
- Added direct Admin routing for `admin.html#manage` and `admin.html#tours`.
- Updated shared version labels to v9.31.1.

## Notes

- The 3D viewer keeps its specialised in-gallery docked controls.
- This is a shell/layout consistency build. The next build can add room-assignment checklists and curator-only frame codes on top of the shared shell.
