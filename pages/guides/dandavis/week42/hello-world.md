---
title: Hello World
layout: Doc
---

# Say Hello World!

It is a custom when learning a new programming language and as a means of 
testing that all is up and running, to write a ["Hello World"](https://en.wikipedia.org/wiki/%22Hello,_World!%22_program) program.

So let us build one in Node!

NOTE: You will have already by this point installed Node, NPM, Git Bash and Visual Studio Code. If not please do so now!

First of all you need to open up Git Bash because we shall be using it for a 
lot of the work that we shall be doing when working with Node based projects. It 
enables us to use Linux commands.

```bash
$ cd proj
```

Change directory so that you are in your regular 'proj' folder where you keep 
all of your projects.

Next we shall create a new folder beneath this for our new 'Hello World' project

```bash
$ mkdir hello-world
```

Next we want to change directory using the "cd" command, so in order to do this 

```bash
$ cd hello-world
```

Linux has a great command for simply creating files called, curiously "touch", so let's use that to create our new JS file.

```bash
$ touch hello.js
```

Now we shall open the file and add some code to it

```bash
$ code hello.js
```

This is a shortcut to opening files in Visual Studio Code, we could also have typed 'code .' which would have launched VSC at the current directory.

Now we can add the simplest of pieces of code :-)

Type in the following and then save it:

```bash
console.log('Hello World');
```

Once saved, go back to the Git Bash terminal window and type:

```bash
$ node hello.js
```

NOTE: You can drop the '.js' if you wish, as Node will be able to work things out for itself, the clever chap

You shall now see the message "Hello World" appear on the console just beneath your comannd. That's it, you have just run 
JavaScript from your console and outside of the web browser. Soon we shall move on to looking at how we can build our very 
own web servers complete with database connections and many other things. In fact Node can be used for so much more. I have 
heard people even use it for programming hardware, such as Robots, Quad-copters and all sorts!!!

Back to: [Course Index](/courses/series/javascript)

