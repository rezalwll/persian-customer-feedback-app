import assert from 'node:assert/strict';
import { estimateAccessibilityOptimisticBuffer } from '../dist/features/accessibility-estimate-optimistic-buffer.js';
export default function () { assert.equal(estimateAccessibilityOptimisticBuffer([2, 4, 6, 8]), 60); }
