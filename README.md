# web-app-template

A framework-agnostic web app template. It's a stripped down version of [create-react-app](https://github.com/facebookincubator/create-react-app) in which dependencies like React are removed.

[Demo](https://remarkablemark.github.io/web-app-template/)

## Installation

Clone repository:

```sh
git clone https://github.com/remarkablemark/web-app-template.git myapp
cd myapp
rm -rf .git
git init
```

Install dependencies:

```sh
# with npm
npm install

# with yarn
yarn
```

Make initial commit (but make sure to modify files like `package.json` beforehand):

```sh
git add .
git commit -m "chore: first commit"
```

Notice that the commit message follows the [Conventional Commits](https://conventionalcommits.org) format. This will help with releasing.

[Push to GitHub](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/) or another remote:

```sh
git remote add origin <remote-repository-url>
git push origin -u origin master
```

## Scripts

Start development server:

```sh
# with npm
npm start

# with yarn
yarn start
```

Create production build:

```sh
# with npm
npm run build

# with yarn
yarn build
```

Release:

```sh
# with npm
npm run build

# with yarn
yarn build
```

Deploy:

Before deploying, make sure the `deploy` script and the `homepage` field in `package.json` are correct. The current setup deploys to [GitHub Pages](https://pages.github.com) by pushing the `build/` directory to the remote's `gh-pages` branch.

```sh
# with npm
npm run deploy

# with yarn
yarn deploy
```

## Environment Variables

Environment variables work the same as [create-react-app](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-custom-environment-variables) except custom environment variables begin with `APP_` instead of `REACT_APP_`.

## Test

There are no tests in the template, just linting:

```sh
# with npm
npm run lint
npm run lint:fix

# with yarn
yarn lint
yarn lint:fix
```

Feel free to add a [testing framework](https://github.com/sorrycc/awesome-javascript#testing-frameworks).

## Layout

Directory structure (with files like `README.md` and `package.json` omitted):

```
.
├── config
│   ├── env.js
│   ├── paths.js
│   ├── webpack.config.dev.js
│   ├── webpack.config.prod.js
│   └── webpackDevServer.config.js
├── public
│   ├── index.html # html template
│   └── manifest.json
├── scripts
│   ├── build.js
│   └── start.js
└── src
    ├── index.css
    ├── index.js  # entry js file
    └── registerServiceWorker.js
```

## License

[MIT](LICENSE)
