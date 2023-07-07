# Lunar Bug Reporting
This is a package created to practice building a TypeScript package with Vite.

# Usage

```js
import 'lunar-bug-tool';
```

# Build and testing process

In this repo, build changes to update the `/dist` folder.

```
npm run build 

// or

yarn build
```

# Import this package into a local project

## Install Yalc

Yalc appears to be the most efficient way to publish packages changes locally and to pull them into another project.

```
npm i -g yalc

// or

yarn global add yalc
```

## Publish changes from the package

This is a local publish only, it does not make it to NPM's registry.

```
yalc publish --push
```

## Add the published package to a project

For example in the Sage folder or in a folder with package.json.

```
yalc add lunar-bug-tool
```
