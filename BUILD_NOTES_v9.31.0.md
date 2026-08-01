# Build Notes - v9.31.0 Curator Management Workspace

## Purpose

This deployment starts the management simplification stream for open-day readiness while avoiding duplicate artwork-placement logic.

## Changes

- Added a Curator Dashboard to `admin.html` as the management launchpad.
- Reworked Manage Submissions into a checklist-style table with search, room/status filtering, placement status and media source summaries.
- Added direct Place/Edit links into the existing `artwork-editor.html` record workflow.
- Added `artwork-editor.html?gallery=...&artwork=...` deep-link support so a selected artwork opens immediately.
- Added shared dense management workspace/table/card styles to `gallery-ui.css`.
- Updated shared version labels to v9.31.0.

## Notes

- This build intentionally keeps the Artwork Placement Editor as the source of truth for placement to prevent duplicated controls and data drift.
- Batch room assignment and curator-only 3D frame codes are the logical next layer after this shell is validated.
