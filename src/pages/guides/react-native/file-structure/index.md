---
title: React Native file structure
date: "2017-09-20"
path: "/guides/react-native/file-structure/"
draft: true
---

The file structure for a React Native application is as follows:

* __tests__
* assets
* components
* constants
* navigation
* node_modules
* screens
* .babelrc
* .gitignore
* .watchmanconfig
* App.js
* app.json
* package-lock.json
* package.json
* yarn.lock

Let's go into more detail for each of the above

## __tests__

Writing "unit tests" are part of writing good code and an important part of OOP practices. Though in the case of this app we haven't written any, this is something tat we will cover in the future. However when creating a new app, this folder is automatically generated for us with some basic sample tests to get us started.

## assets

This folder contains fonts, icons and images that are used to build the application's user interface (UI).

## components

This application (like many others) is constructed out of a combination of ready made components and those that we write ourselves. The key behind this practice is re-usability on one hand and by breaking our code down into folders and modular files helps us keep the code readable. Other benefits include improving the team experience, as multiple developers can work on a project and parts of it without conflicting with other people.

Currently there is just one component in this folder called "StyledText" which applies a specific font to a piece of text. It can be used throughout the codebase multiple times, another key advantage of OOP.

## Constants

In OOP we have "variables" and "constants" amongst many other things. A variable is a value that can change over time, whereas a constant is the opposite. You declare it and define it, so for example:

``` javascript
const tintColor = '#EFCFB6';
```

Declares tintColor and this constant can be used throughout the application, however you can't change the value of tintColor once the application is running. You can of course change the code in this one place of you later decided that this color needed to change.

The "constants" folder contains two files, one which sets the colors for the application, the other sets dimensions for the application dependent on which device you are running it on.

## navigation

The app features a tab bar at the bottom of all screens which enables the user to "navigate" around the app. The two files in this folder are kept separate for ease of code maintenance and control how the navigation works.

## node_modules

The application is dependent on some ready made components as well as one or two of our own. The node_modules folder contains "React Native" itself and other key component modules for various features such as scroll view, image display, maps, video, phone camera and many more features. We as developers can tap into this massive resource to build our app. Presenting the end user with something they find useful!

## screens

The all imporant screen templates, this folder is broken down into a number of files. CoffeeGuide, HomeScreen, LinksScreen, SettingsScreen and TeaGuide. These are all JavaScript modules and can also be thought of as being objects in their own right.

## The rest

We have covered all of the directories and are left with a few key files to talk about.

App.js is where the application starts, this file "imports" the modules it needs to function, then in turn each of those modules import what they need. This is why we break the project down into a series of folders as we do to help the developer remember where all of their code is and if they were to hand the project to someone else to work on, they would be able to make sense of it given having at least some experience of working on similar projects in the past.

Package.json defines the modules and other external components that we need for the project and essentially defines what is pulled into the node_modules directory.
