# CHANGELOG

## Version 2.4.5

- Upgrade to from Rollup 2 to 3.

## Version 2.4.4

- Improve the argument types for the Storybook stories, so that they have default values and the correct controls.
- Update dependencies.

## Version 2.4.3

- Include the changelog and the readme in the package.
- Fixed [this bug](https://github.com/prc5/react-zoom-pan-pinch/pull/247) in the logic that determines if an object has been moved.
- Update dependencies.

## Version 2.4.2

- Handle TouchEvent not being defined in Safari.

## Version 2.4.1

- Include the dist folder in the npm package.

## Version 2.4.0

THIS VERSION IS BROKEN because the dist folder was not included in the npm package. Please use 2.4.1 instead.

- Use the CSS matrix() function instead of translate3d() because this fixes a scaling issue in Safari. More information in the original [pull request #287 for prc5/react-zoom-pan-pinch](https://github.com/prc5/react-zoom-pan-pinch/pull/287).
- Add a handful of ESLint rules.
- Update dependencies.

## Version 2.3.0

- Add support for React 18.
- Rename the default branch to `main`.
- Update the readme.

## Version 2.2.2

- Publish the Storybook documentation. It's available at [pronestoraps.github.io/react-zoom-pan-pinch](https://pronestoraps.github.io/react-zoom-pan-pinch/).
- Update some dependencies.
- Remove the unused tests.
- Always use LF as end of line characters, even on Windows.
- Intellisense in the Rollup configuration.

## Version: 2.2.0

- Fix build errors caused by missing source files. ([prc5/react-zoom-pan-pinch/issues/265](https://github.com/prc5/react-zoom-pan-pinch/issues/265)
- Merge Dependabot's pull requests fixing security issues.
