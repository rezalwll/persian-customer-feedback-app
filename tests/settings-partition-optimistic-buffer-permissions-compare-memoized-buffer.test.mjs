import assert from 'node:assert/strict';
import { comparePermissionsMemoizedBuffer } from '../dist/features/permissions-compare-memoized-buffer.js';
export default function () { assert.equal(comparePermissionsMemoizedBuffer([2, 4, 6, 8]), 8); }
