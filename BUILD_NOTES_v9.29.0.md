# Build Notes v9.29.0 - 3D Model Artwork Foundations

## Included
- Native Three.js GLTFLoader support for direct .glb and .gltf artwork URLs.
- A separate distance-aware model loading queue so large models are not all requested at initial gallery entry.
- Loading, missing-URL and failed-load placeholders that remain selectable in Curator mode.
- Automatic model centring and normalization to a curator-defined display size.
- Shadow support and preserved GLTF materials.
- Model thumbnail/fallback and attribution metadata.
- Model fields in Admin, Artwork Editor, Layout Editor and the 3D Curator metadata panel.
- Existing Curator Scale Up / Scale Down actions now adjust model display size.

## Initial model record
```json
{
  "mediaType": "model",
  "media": "models/student-work.glb",
  "thumbnail": "models/student-work.jpg",
  "modelScale": 1.8,
  "modelAnchor": "floor",
  "modelAttribution": "Student name / source"
}
```

## Supported files
- Binary GLB is recommended for GitHub Pages because textures and geometry can travel in one file.
- GLTF is supported when all referenced .bin and texture files are published at the expected relative paths.
- Draco/Meshopt-specific publishing guidance and Open Brush material handling remain scheduled for later roadmap builds.

## Next build
v9.30.0 adds visual model placement controls: rotation, height, floor/plinth/wall anchoring, and curator positioning.
