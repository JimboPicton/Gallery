# Build Notes v9.30.3 - Pointer Lock Return Hotfix

## Changes

- Pointer-lock requests now use the browser promise directly so rejections are handled.
- A 650 ms cooldown prevents immediate reacquisition after pointer lock is released.
- Closing artwork media in Visitor mode returns to the entry overlay for an explicit click to resume movement.
- Curator panels continue to close without forcing pointer lock.
- SecurityError rejections no longer surface as unhandled promise errors.
