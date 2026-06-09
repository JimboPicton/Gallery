# Build Notes - v9.24.2 Artwork Frame Fit Hotfix

## Focus

- Remove unused black frame/backing space around portrait or mismatched-aspect image artwork.
- Prevent the artist statement icon from overlapping the artist name below the artwork.

## Changes

- Loaded image artwork now fits the visible 3D plane to the image aspect ratio within the curator's saved maximum width/height.
- Image textures now fill the fitted plane instead of drawing letterboxed/pillarboxed padding.
- Artist labels follow the fitted image bottom edge.
- Statement icons are repositioned from fitted image bounds, with extra clearance for below-frame placement.
