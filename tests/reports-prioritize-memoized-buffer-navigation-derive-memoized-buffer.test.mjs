import assert from 'node:assert/strict';
import { deriveNavigationMemoizedBuffer } from '../dist/features/navigation-derive-memoized-buffer.js';
export default function () { assert.equal(deriveNavigationMemoizedBuffer([2, 4, 6, 8]), 2); }
