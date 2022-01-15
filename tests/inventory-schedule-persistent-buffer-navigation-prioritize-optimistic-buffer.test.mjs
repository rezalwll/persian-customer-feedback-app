import assert from 'node:assert/strict';
import { prioritizeNavigationOptimisticBuffer } from '../dist/features/navigation-prioritize-optimistic-buffer.js';
export default function () { assert.equal(prioritizeNavigationOptimisticBuffer([2, 4, 6, 8]), 6); }
