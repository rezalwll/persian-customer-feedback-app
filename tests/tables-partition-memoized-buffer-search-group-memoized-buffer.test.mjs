import assert from 'node:assert/strict';
import { groupSearchMemoizedBuffer } from '../dist/features/search-group-memoized-buffer.js';
export default function () { assert.equal(groupSearchMemoizedBuffer([2, 4, 6, 8]), 4); }
