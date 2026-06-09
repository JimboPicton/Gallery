# Build v9.26.1 - Lighting Visibility Hotfix

## Included

- Added defensive minimum values for ambient light, hemisphere fill, directional light, and tone-mapping exposure in the 3D gallery runtime.
- Added a subtle runtime-only surface visibility lift for dark architectural materials so walls, floors, ceilings, hallways, and half walls remain readable.
- Preserved saved room and gallery colour data; the lift is applied only to rendered material colour, not to exported JSON values.

## Reason

After the v9.25.0 lighting polish, some local drafts could render the gallery shell almost black while artwork, labels, and fixtures stayed visible. Those elements use self-visible materials, while the room shell depends on lighting and very dark surface colours. This hotfix keeps the softer lighting model but prevents the walkable gallery from visually disappearing.
