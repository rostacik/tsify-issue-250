# Tsify issue 250
Demonstration repo for an issue where ambient module declaration cannot be found by Tsify/Browserify.
The project contains one module (`src/mymodule.ts`) with its ambient declaration (`src/node_modules/mymodule.d.ts`) and a script which attempts to import the module via the ambient declaration (`src/consumer.ts`). The project contains also `gulpfile.js` with definition of the task which handles the browserification.

## The issue: 
Standard transpilation of `src/consumer.ts` works and correctly resolves `mymodule`. However, when attempting to Browserify/Tsify via Gulp the task fails with `Cannot find 'mymodule' from ...`.

## Steps to reproduce the issue:
1. Clone the repository
2. Test plain TSC transpilation: `tsc ./src/consumer.ts` and see that it works.
3. Run Browserify/Tsify task: `gulp` and see that it fails.
