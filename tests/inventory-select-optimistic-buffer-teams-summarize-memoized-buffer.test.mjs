import assert from 'node:assert/strict';
import { summarizeTeamsMemoizedBuffer } from '../dist/features/teams-summarize-memoized-buffer.js';
export default function () { assert.equal(summarizeTeamsMemoizedBuffer([2, 4, 6, 8]), 4); }
