import jestConfig from './jest.config.js';
// @ts-check
/** @type {import('@stryker-mutator/api/core').PartialStrykerOptions} */
const config = {
  _comment:
    "This config was generated using 'stryker init'. Please take a look at: https://stryker-mutator.io/docs/stryker-js/configuration/ for more information.",
  packageManager: 'npm',
  reporters: ['html', 'clear-text', 'progress'],
  // files: ['!./**', '!.stryker-tmp/**', '!node_modules/**', '!coverage/**'],s
  jest: {
    config: jestConfig,
  },
  mutate: ['src/**/*.js'],
  testRunner: 'jest',
  testRunner_comment:
    "Take a look at (missing 'homepage' URL in package.json) for information about the jest plugin.",
  coverageAnalysis: 'perTest',
  disableTypeChecks: 'false',
  tempDirName: 'strykerTmp',
};
export default config;