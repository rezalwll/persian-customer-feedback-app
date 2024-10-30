import assert from 'node:assert/strict';
import { measureWorkflowsOptimisticBuffer } from '../dist/features/workflows-measure-optimistic-buffer.js';
export default function () { assert.equal(measureWorkflowsOptimisticBuffer([2, 4, 6, 8]), 2); }
