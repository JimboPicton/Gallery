# Build Notes v9.22.0

## Audio Playback Foundations

- Added visible 3D audio markers for `settings.audio.sources` created in the Layout Editor.
- Made audio markers interactive through look-at + `E` in the 3D gallery.
- Added external audio playback panels for:
  - YouTube links
  - SoundCloud links
  - Echo-style embeds
- Kept external hosted audio opt-in, so links do not autoplay just because a visitor walks nearby.
- Kept direct MP3/OGG/WAV/M4A sources distance-faded through the existing master audio controls.
- Limited direct spatial playback to the nearest direct sources so gallery audio does not become overpowering.
- Closed external audio embeds when other media panels take focus or when gallery audio is turned off.
- Bumped active build labels and `version.json` to `v9.22.0`.

## Notes

- YouTube audio cannot be played as a hidden audio-only stream in the browser. It must be played through an embedded YouTube player or opened on YouTube.
- Direct audio files remain the best option for true spatial ambient beds or narration zones.
- A future Presentation Mode build can attach narration URLs to tour stops and reuse this audio foundation.
