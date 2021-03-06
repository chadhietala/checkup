import { Hook } from '@oclif/config';
import { RegisterActionsArgs } from '@checkup/core';

import { evaluateActions as evaluateESLintDisables } from '../actions/eslint-disable-actions';
import { evaluateActions as evaluateESLintSummary } from '../actions/eslint-summary-actions';
import { evaluateActions as evaluateOutdatedDependencies } from '../actions/outdated-dependency-actions';

const hook: Hook<RegisterActionsArgs> = async function ({ registerActions }: RegisterActionsArgs) {
  registerActions('eslint-disables', evaluateESLintDisables);
  registerActions('eslint-summary', evaluateESLintSummary);
  registerActions('outdated-dependencies', evaluateOutdatedDependencies);
};

export default hook;
