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

## Init NodeJS

```bash
npm init -y
```

## Install and Configure Webpack

```bash
npm install webpack webpack-cli webpack-dev-server --save-dev
npm install style-loader css-loader sass-loader --save-dev
npm install html-webpack-plugin --save-dev
npm install css-minimizer-webpack-plugin --save-dev
```