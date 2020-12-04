# [React WebApp for Design Portfolio ](https://deadlyfingers.github.io/co.uk/) [![Build Status](https://travis-ci.org/deadlyfingers/co.uk.svg?branch=master)](https://travis-ci.org/deadlyfingers/co.uk)

This [React](https://reactjs.org/) project was created using [Create React App](https://github.com/facebook/create-react-app) optimised for [Typescript](https://www.typescriptlang.org/) development in [VSCode](https://code.visualstudio.com/).

This [design portfolio](https://deadlyfingers.co.uk/) WebApp uses [React Awesome Slider](https://github.com/rcaferati/react-awesome-slider) for the full page slideshow.

Function components use [React hooks](https://reactjs.org/docs/hooks-state.html) for component state.

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

First a [gulpfile](https://gulpjs.com/) script is ran to collate images contained within subfolders inside the `public/images` directory into JSON. The folder names will become the categories and images contained within will be sorted for slideshow. This generates the `imageCategories.json` file inside `src/generated` directory.

The build is minified and the filenames include the hashes.

`CNAME` file is copied into `build` directory for deployment to [GitHub Pages](https://pages.github.com/) with a [custom domain](https://help.github.com/en/github/working-with-github-pages/configuring-a-custom-domain-for-your-github-pages-site).

Your app is ready to be deployed!

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Additional scripts

### `yarn test:coverage`

Shows project source code test coverage.

### `yarn lint`

Lints project source code.

### `yarn deploy`

Triggers manual deployment to [GitHub Pages](https://pages.github.com/).

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
