---
title: Unit 212 - Lesson 1
path: "/nvq/unit212/lesson1"
date: "2017-08-24T00:00:00Z"
---

In the email I sent earlier I explained how to start a new React Native application using Expo as our tool for doing so. We now switch to the H4C website to talk about the rest....

Next we shall take a look at what this demo app does and the code behind it. You need not understand the whole lot at this stage because I will ease you into it. You can learn over the course of time. 

The main page is the default, the user always sees this first and it contains a mixture of content and components. React as you already know is composed of numerous components and React Native is no exception.

Without further ado, let’s open up VSC and this project within it. I am sure that you can work out where the project is on your hard drive and therefore where to open from…

Once open, have a look in the project’s main folder for “App.js” and open it.

The file is split into the following parts

- imports
- The main class

Classes are a key part of any OO language of which JavaScript is one. A class is in itself an Object, objects are like the atoms of an OO application, their sum total making the whole. Classes always extend some existing functionality, so the line below

``` javascript
export default class App extends React.Component {
```

React.Component refers to the underlying code library that we are using which is React itself, so we inherit it's functionality. Think of this as being a bit like a keyboard based synth which will have a piece of built-in circuitry that makes sounds and another piece of circuitry that mimics a string instrument. The string sound is dependent on the main Digital Signal Processor chip that has the wizardry built in to make sounds.

So in the case of an app, as developers, we don't want to build it all from scratch, it will take us forever, so we make use of the React library to do the legwork for us.

I keep mentioning "Library", what is that precisely? It is a set of functions that allow us to achieve tonnes of different things. React Native is a library and it makes it possible for us to build up complex apps that are constructed out of many components (or classes). Kind of like lego but you have less risk of hurting your feet when you tread on it!

So when writing React code we always start off by defining our class, other components can then make use of this class and gradually all of the pieces come together and they can be used multiple times which is another feature of OO programming. 

It is worth having a read of some online resources for a more general overview of OO. [https://www.codecademy.com/courses/intro-to-object-oriented-programming/0/1](https://www.codecademy.com/courses/intro-to-object-oriented-programming/0/1)

Let's move on...

After the opening of the class which defines our component modulewe have the "componentWillMount@ method which is part of React, this methid is fired after the entire component is loaded/rendered to the screen. In this instance the method loads all assets asycnchronously which is to say tey get loaded pretty much in parallel rather than one at a time which is faster andmore efficient. What assets are these? Just check out the folder of the same name which contains fonts, icons and images.

Then we render:

If the assets haven't yet been loaded into memory and the skip loading screen flag is not set, this means we display the Loading Screen that we see at the start when launching the application. Otherwise...

Show the main "View" which is one of React Natives main components and can be thought of as being similar to a Div in HTML. We apply some styles to this view (which you can find at the bottom of the file). We at this point display some other elements based on the type of device the user is using.

Next we have the function (note not a method) which is prefixed with an underscore. This can be thought of as being what we call a "private function". There are two kinds and the opposite is a public function which in many cases is typically a "method". So what is a method? It is a function that can be called by external pieces of code, perhaps other React components. Let this bit sink in, it is a key concept in OO programming and may not make sense at the start, which can onlybe made clearer through simply doing, writing code.

This function takes care of loading some PNG files and fonts.

Finally there is the "Stylesheet"

We shall continue this series tomorrow!!!