---
title: ReactJS - Create React App
layout: Doc
---

## Creating a simple single page application

As they say on the official [React](https://facebook.github.io/react/docs/installation.html) Site, using the [Create React App](https://github.com/facebookincubator/create-react-app) is the best way to starting a new React single page application. It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production.

So here it goes, 4 lines in your terminal to get going!

## Yarn or NPM?

If you have node installed, then you should already have NPM but in the example below we are using [Yarn and you will need to install it first](https://yarnpkg.com/en/docs/install) via their website.

``` bash
npm install -g create-react-app
create-react-app hello-world
cd hello-world
yarnpkg start or npm start
```

It is as simple as that!

_Note: It can sometimes take a little while when running the create-react-app command first time round_

Hopefully that will all be up and running and you should see something that looks like this when you browse to [localhost:3000](http://localhost:3000):

![alt text](/assets/welcome-to-react.png "Welcome to React")

### Commands available

__yarnpkg start__

This is the command you used a moment ago to launch the development server and will by default run the application under port 3000 

__yarnpkg run build__

This command will build the application ready for deployment to production. All files are compiled into the _public_ folder.

__yarnpkg test__

This command runs all unit tests and will display a report to notify you of successes/failures. React uses the Jest framework for testing.

__yarnpkg run eject__

Removes this tool and copies build dependencies, configuration files and scripts into the app directory. If you do this, there is no going back!

### Welcome to the front end

It is worth noting that [Create React App](https://github.com/facebookincubator/create-react-app) doesn't setup any form of back-end logic or databases for you; it just creates a frontend build pipeline, so you can use it with any backend you want. It uses [webpack](https://webpack.js.org/), [Babel](http://babeljs.io/) and [ESLint](http://eslint.org/) under the hood, but configures them for you.

### Editing and Hot Reloading

The sample app suggests that we make an edit to the __App.js__ file and then to save those changes, so let's do just that and see what we get.

Open up the file/project using your preferred code editor and open up the __src/App.js__ file to make some changes, you should see a file that looks like this:

``` JavaScript
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Dan's React App</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
```

You may have noticed that I changed the H2 element's text to something other than what was created by default. 

Now save the file once you have made a similiar edit and you will notice that, your Git Bash console displays some messages to inform you that it is compiling the project. The browser should update automatically, it will refresh itself. This is what we call __Hot Reloading__ and it is a very useful thing, as when we make a code change the compiler automatically triggers another build. During this build process, it will check that your code is valid and will report errors or warnings accordingly. The build process constantly _watches_ for changes as they occcur.

We will explore this more in future pages here on HeadForCode.

### Now let's get to know React better

This exercise should have given you a quick insight into how you can create a React app from scratch and we shall look next at expanding it by adding further components to the project and structuring the app properly.

The next steps will be to move on to the following topics and exercises:

* [How does the basic app work?](how)
* Connecting to a GraphQL data service