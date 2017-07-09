---
title: Cycle.js - Create a simple Login UI
subtitle: The aim is to add two inputs for user name and password together with a login button
user: nickeblewis
hash: qNjVBQ
tab: js,result
theme: 0
height: 500
width: 100%
layout: Doc
---

Pens....

## cycle-login-rx-ui

http://codepen.io/nickeblewis/pen/qNjVBQ

This is the first version (also the same CodePen as seen at the head of this page) it is built around the RxJs library and uses 
hyperscript for definitition of the DOM (later this is swapped for JSX) 

## cycle-login-xstream-ui-2

http://codepen.io/nickeblewis/pen/AXrZmj

Andrea's experiment with xstream and JSX with some actions

## cycle-login-xstream-ui

http://codepen.io/nickeblewis/pen/WxOyqx

Same as above but using xstream rather than Rx

## cycle-login-xstream-ui-with-JSX

http://codepen.io/nickeblewis/pen/LkLgRO

Combination of xstream and JSX

## cycle-login-rx-ui-with-JSX

http://codepen.io/nickeblewis/pen/LkjPXA

Moving on from xstream and back to trying out RSX with the login UI experiment....

# Stuff to research / todo list

* Proper declaration of JSX, surely JSX(undefined) isn't right?
* States
* Actions

## Resources

https://github.com/cyclejs-community/awesome-cyclejs

## Finally...

Have stopped development on the Pens for now and moved to:

* https://cycle-research-nickeblewis.c9users.io:8080/
* https://ide.c9.io/nickeblewis/cycle-research

{
  "name": "cycle-webpack-boilerplate",
  "version": "0.2.0",
  "description": "Cycle webpack babel boilerplate",
  "main": "index.js",
  "scripts": {
    "start": "npm run server:dev",
    "server:dev": "./node_modules/.bin/webpack-dev-server --hot --config webpack.config.js --inline --progress --profile --colors --watch --display-error-details --display-cached --content-base src/",
    "test-server": "./node_modules/.bin/webpack --config webpack.test.config.js --watch",
    "build": "webpack --progress --colors --config webpack.production.config.js",
    "clean": "rm -rf build/",
    "test": "testem"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/Cmdv/cycle-webpack-boilerplate.git"
  },
  "keywords": [
    "cycle",
    "webpack",
    "tape",
    "testem",
    "testing",
    "bdd",
    "babel",
    "tdd",
    "boilerplate",
    "cyclejs"
  ],
  "author": "Vincent Orr",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/Cmdv/cycle-webpack-boilerplate/issues"
  },
  "homepage": "https://github.com/Cmdv/cycle-webpack-boilerplate#readme",
  "dependencies": {
    "@cycle/core": "^7.0.0",
    "@cycle/dom": "^10.0.5",
    "@cycle/history": "^2.0.2",
    "@cycle/isolate": "^1.4.0",
    "@cycle/rx-adapter": "^3.0.0",
    "@cycle/rx-run": "^7.0.0",
    "@cycle/xstream-run": "^3.0.3",
    "css-loader": "^0.23.1",
    "history": "^2.0.1",
    "ramda": "^0.21.0",
    "rx": "^4.1.0",
    "xstream": "^5.1.3",
    "rx-combine-latest-obj": "^1.0.2",
    "sass-loader": "^4.0.0",
    "style-loader": "^0.13.1",
    "switch-path": "^1.1.7"
  },
  "devDependencies": {
    "babel-core": "^6.7.7",
    "babel-loader": "^6.2.4",
    "babel-plugin-transform-object-rest-spread": "^6.6.5",
    "babel-preset-es2015": "^6.6.0",
    "cycle-restart": "0.0.14",
    "glob": "^7.0.3",
    "html-webpack-plugin": "^2.16.0",
    "install": "^0.6.1",
    "node-libs-browser": "^1.0.0",
    "path": "^0.12.7",
    "tape": "^4.5.1",
    "testem": "^1.6.0",
    "webpack": "^1.13.0",
    "webpack-dev-server": "^1.14.1",
    "snabbdom-jsx": "^0.3.0"
  }
}



