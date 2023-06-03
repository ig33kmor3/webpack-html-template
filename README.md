# Webpack HTML Template

This is a template for a webpack project with HTML, CSS, and JS.

## Create Folder Structure

```bash
git init
touch README.md
touch .gitignore
touch webpack.dev.js
touch webpack.prod.js
touch Dockerfile
mkdir src
```

## Initialize Node

```bash
npm init -y
```

## Install Webpack and Plugins

```bash
npm install webpack webpack-cli webpack-dev-server --save-dev
npm install style-loader css-loader sass-loader --save-dev
npm install html-webpack-plugin --save-dev
npm install mini-css-extract-plugin css-minimizer-webpack-plugin --save-dev
npm install @babel/core babel-loader @babel/preset-env --save-dev
```

<img src="assets/icon-square-big.svg" alt="Webpack" width="30%">
 