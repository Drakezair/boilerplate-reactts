# Bank app

This project was bootstrapped with [Vite](https://vitejs.dev/).
is a simple boilerplate of react with typescript and basic Restfull api integrations

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn format`

Format the style of coding as textplain for keep it clear and standarts with prettier

### `yarn lint`

Check the rules of code quality

### `yarn ready`

Check all step required to can make a commit

### `yarn cypress:open`

Up the cypress server on GUI to see the test

### `yarn cypress:run`

Up the cypress server on CLI to see the execute the test check

## Libraries and technologies on project

### CYPRESS

Cypress is a next generation front end testing tool built for the modern web. We address the key pain points developers and QA engineers face when testing modern applications.

https://docs.cypress.io/guides/overview/why-cypress#What-you-ll-learn

### Husky

Husky improves your commits and more 🐶 woof!

https://github.com/typicode/husky

### Eslint

ESLint statically analyzes your code to quickly find problems. It is built into most text editors and you can run ESLint as part of your continuous integration pipeline.

https://eslint.org/

### CommitLint

Helps your team adhere to a commit convention. By supporting npm-installed configurations it makes sharing of commit conventions easy.

https://commitlint.js.org/#/

### React query

Powerful asynchronous state management for TS/JS, React, Solid, Vue and Svelte

https://tanstack.com/query/v4/?from=reactQueryV3&original=https://react-query-v3.tanstack.com/

### Tailwind

Rapidly build modern websites without ever leaving your HTML.

A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.

https://tailwindcss.com/

### FlowBite

Build websites even faster with components on top of Tailwind CSS

https://flowbite.com/

## Valtio

Proxy state made simple as stage management instead redux

## Vite

Next Generation Frontend Tooling

## Steps to run the proyect

### requirements

- yarn

1. run `yarn`
2. run `yarn dev`

#### Optional

3.  run `yarn cypress:open` (just to see the tests) 4. run `yarn ready` (to check if the code is ready to be commited)

## Notes

- Is require have the react server up to run the test(Cypress required for test)
- Is require have the react server up to make a commit(Cypress required for test)
- The data is persisted on localstorage with React query
