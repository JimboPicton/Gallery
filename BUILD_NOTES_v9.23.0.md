# Build Notes v9.23.0

## Presentation Mode Upgrade

- Added a Play/Pause control to the 3D Presentation Mode tour panel.
- Added timed tour playback using each stop's duration value.
- Added smooth camera movement and rotation transitions between tour stops.
- Added optional narration/audio URL and audio type fields to each Tour Editor stop in Gallery Admin.
- Preserved narration/audio fields when tours are saved into `settings.tours`.
- Added direct-audio narration playback for tour stops.
- Reused the v9.22 external audio panel for YouTube, SoundCloud and Echo-style tour narration links.
- Stopped tour narration when exiting Presentation Mode or switching back to normal visitor movement.
- Bumped active build labels and `version.json` to `v9.23.0`.

## Notes

- Direct audio files remain the most reliable option for automated narration.
- External services such as YouTube and SoundCloud still depend on browser/embed autoplay rules, so they may require user interaction in some browsers.
- This build does not yet add full camera path editing; it smooths movement between generated or configured tour stop camera positions.
