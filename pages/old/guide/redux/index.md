---
title: Redux boilerplate
layout: Default
---

## Essential steps
First of all clone the repo:

https://github.com/davezuko/react-redux-starter-kit

Then follow the steps tom install the chrome extension

## The following is probably optional
Then install 

npm i redux-cli -g

Then:

$ redux g form ContactForm

See what happens!!

Note that the .reduxrc file looks like this and need not be changed.

{
  "sourceBase":"src",
  "testBase":"tests",
  "smartPath":"containers",
  "dumbPath":"components",
  "fileCasing":"pascal"
}

I also ran 

$ redux g form LoginForm

## Adding something new

I have added login which is actually just another counter with it's own independent 
state to the original

src/components/Header/Header.js

* Added a new link to the nav which points to the /login route

src/components/Login/index.js

* Module connection

src/components/Login/Login.js

* React component for login

src/components/Login/Login.scss

* Modular CSS for the login component

src/routes/index.js

* Added login to the React router

src/routes/Login/index.js

* added to reducers

src/routes/Login/containers/LoginContainer.js

* ?????

src/routes/Login/modules/login.js

* Actions LOGIN_INCREMENT which takes a value of +1 or -1
