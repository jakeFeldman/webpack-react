# Webpack-React

React boilerplate, setup for testing and sass

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* Node `https://nodejs.org/en/download/`
* Yarn `https://yarnpkg.com/lang/en/docs/install/`

### Installing

Clone the repository

```bash
git clone git@github.com:jakeFeldman/webpack-react.git && cd webpack-react
```

Install the dependencies

```bash
yarn install
```

Start the dev server

```bash
yarn start
```

Open the project in your text editor. Happy hacking

## Running the tests

Test files live next to their components. The expected structure is as follows:

```bash
|- MyComponent.js
|- MyComponent.test.js
```

Run the following command to run tests. Test coverage is set to 95%.

```bash
yarn test
```

### And coding style tests

To manage code style a set of eslint rules have been established. To lint the project use the
following command. We can use the `--fix` flag to let eslint fix errors.

```bash
yarn lint
```

## Deployment

Up to you

## Built With

* [React](https://reactjs.org/)
* [Babel](https://babeljs.io/) - JavaScript transpilation
* [Webpack](https://webpack.js.org/) - Module bundling
* [Jest](https://jestjs.io/) - Testing suite
* [Enzyme](https://airbnb.io/enzyme/) - React component testing library

## Contributing

PR's are welcomed.

## Versioning

N/A

## Authors

* **Jake Feldman** - *Initial work* - [jakeFeldman](https://github.com/jakeFeldman)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

N/A
