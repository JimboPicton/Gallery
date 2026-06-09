# Build Notes - v9.25.0 Lighting Polish

## Focus

- Improve the default gallery lighting so spaces feel softer and more exhibition-like.
- Add more useful light controls without requiring curators to edit JSON by hand.

## Changes

- Added gallery lighting presets: Soft Gallery, Bright Studio, Moody Exhibition, and Neutral White.
- Added hemisphere fill and exposure settings for softer global lighting control.
- Added support for point, ceiling spot, and soft area wash layout lights.
- Added beam angle, softness/penumbra, decay, and wash-width controls to Layout Editor light nodes.
- Enabled ACES tone mapping, sRGB output, soft shadows, and rougher wall/floor materials in the 3D runtime.
- Tuned artwork accent lights so picture lights and ceiling spots feel less harsh.

## Notes

- Existing light records continue to load as point fill lights.
- Bloom/emissive signage remains a future optional layer because it needs a larger post-processing path and careful performance testing.
