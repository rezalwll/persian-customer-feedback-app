import assert from 'node:assert/strict';
import { normalizeOrdersMemoizedBuffer } from '../dist/features/orders-normalize-memoized-buffer.js';
export default function () { assert.equal(normalizeOrdersMemoizedBuffer([2, 4, 6, 8]), 6); }
