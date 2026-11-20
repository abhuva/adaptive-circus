// A single decision after a missed pass. Each model starts paused.
// A partner detects the player's cue and follows the stipulated rule.
import assert from 'node:assert/strict';

const rules = [
  {
    name: 'Partner waits for the player',
    nextState: choice => choice === 'cue' ? 'playing' : 'paused',
    expectedFailures: 0,
  },
  {
    name: 'Partner restarts on a fixed count regardless of the player',
    nextState: () => 'playing',
    expectedFailures: 1,
  },
  {
    name: 'Partner never restarts',
    nextState: () => 'paused',
    expectedFailures: 1,
  },
];

const requirements = [
  { choice: 'wait', requiredState: 'paused' },
  { choice: 'cue', requiredState: 'playing' },
];

for (const rule of rules) {
  let failures = 0;
  console.log(rule.name);
  for (const { choice, requiredState } of requirements) {
    const actualState = rule.nextState(choice);
    if (actualState !== requiredState) {
      failures += 1;
      console.log(`  Counterexample: player chooses ${choice}, exchange is ${actualState}; required ${requiredState}.`);
    }
  }
  if (failures === 0) console.log('  Both player choices produce the required result.');
  assert.equal(failures, rule.expectedFailures);
}
