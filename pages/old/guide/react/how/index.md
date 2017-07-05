---
title: How does the basic app work?
menuTitle: How does it work?
layout: Doc
order: 1
---

## Lets get to know how it works better

![alt text](/assets/vsc-explorer.PNG "Visual Studio Code and the simple React app")

When you open Visual Studio Code and an associated project for the first time, you can do so a number of different ways but you should see the above in your application.

### Get to know your tools better and be more productive

We shall gradually get to explore how Visual Studio Code works over time and in fact if anyone is interested, we would be more than happy to write up some guides on VSC specifically, as there are various ways that you can use the application to get the best out of it and to be... Productive!!

### Some quick things to learn about

VSC is divided up into sections, on the far left we have the Sidebar and it is in this sidebar that we have access to:

* Explorer
* Search
* Git
* Debug
* Extensions

Click on any of the above and you will be taken to a different facet of the application. So for example we can get to the Explorer using __CTRL+SHIFT+E__ 

Furthermore we can show/hide the bar by using __CTRL+B__ at any time, useful for increasing your editing space on the screen or just to visually de-clutter.

## Exploring the application

Since we have been talking about the explorer and we are here mainly to talk about the app we created in the previous article, lets break down the folders and files that the __create_react_app__ generated for us...

Click on each of the items below to read about each and we shall "drill" down deeper each step of the way:

* node_modules
* public
* src
* .gitignore
* README.md
* yarn.lock
* package.json

We won't go into a huge amount of detail on the node_modules, .gitignore, README.md or yarn.lock other than to give you an overview for the time being.

When you run __npm install__ it looks at the _dependencies_ listed in your __package.json__ file and installs each of these packages. You can find out more about the package.json file here and it plays a huge role in many applications. The outcome of running __npm install__ is that it creates the __node_modules__ folder and this is why it is always important to run it the first time you set up a project, especially if you have cloned the project from another repsitory elsewhere. It enables developers to pass their code around and makes it easy for us all to get projects up and running with the minimum of fuss.

The __.gitignore__ file allows you to exclude certain files from a Git repsitory and a classic example is the __node_modules__ folder we mentioned just now. Why would you want to exlude it? Well, it is a large directory and it is far more efficient to let the user run __npm_install__ to grab all of the latest dependencies anyway! There are other files you may wish to exclude and we always suggest that people exclude config files, especially if they include private data such as access keys. Just think by uploading those to Github you are exposing your system to security breaches! The gitignore file is always referred to by __git commit__ and ensures any files that shouldn't be checked in aren't!

