import assert from 'node:assert/strict';
import { deriveSessionsOptimisticBuffer } from '../dist/features/sessions-derive-optimistic-buffer.js';
export default function () { assert.equal(deriveSessionsOptimisticBuffer([2, 4, 6, 8]), 6); }
