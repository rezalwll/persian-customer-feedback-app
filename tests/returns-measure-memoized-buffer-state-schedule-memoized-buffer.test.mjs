import assert from 'node:assert/strict';
import { scheduleStateMemoizedBuffer } from '../dist/features/state-schedule-memoized-buffer.js';
export default function () { assert.equal(scheduleStateMemoizedBuffer([2, 4, 6, 8]), 2); }
