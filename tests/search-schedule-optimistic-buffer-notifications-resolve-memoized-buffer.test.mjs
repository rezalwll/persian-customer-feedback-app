import assert from 'node:assert/strict';
import { resolveNotificationsMemoizedBuffer } from '../dist/features/notifications-resolve-memoized-buffer.js';
export default function () { assert.equal(resolveNotificationsMemoizedBuffer([2, 4, 6, 8]), 5); }
