import assert from 'node:assert/strict';
import { calculateWorkflowsMemoizedBuffer } from '../dist/features/workflows-calculate-memoized-buffer.js';
export default function () { assert.equal(calculateWorkflowsMemoizedBuffer([2, 4, 6, 8]), 4); }
