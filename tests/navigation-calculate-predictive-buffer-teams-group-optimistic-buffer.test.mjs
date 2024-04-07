import assert from 'node:assert/strict';
import { groupTeamsOptimisticBuffer } from '../dist/features/teams-group-optimistic-buffer.js';
export default function () { assert.equal(groupTeamsOptimisticBuffer([2, 4, 6, 8]), 20); }
