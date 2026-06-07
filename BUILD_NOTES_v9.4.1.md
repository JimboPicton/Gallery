# Gallery v9.4.1 Hotfix

Fixes a runtime error introduced in v9.4 where helper functions used by audio/media setup were accidentally omitted from `gallery-3d.html`.

## Fixed
- Restored `youtubeId()` so YouTube/audio detection works.
- Restored `isSoundCloudUrl()` and `soundCloudEmbed()`.
- Restored `mediaEmbed()` for artwork/media popup playback.
- Restored `escHTML()` and `wrapText()` helper functions.

## Result
The gallery should no longer fail during `setupAudio()`, and rooms/hallways should render again.

No JSON update is required if you are only testing this code fix.
