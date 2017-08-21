---
title: 2017 Building a real App
menuText: Building Apps
layout: Doc
gitLink: \docs\README.md
description: 'Articles, resources, and posts etc'
thumbnail: 'https://s3-eu-west-1.amazonaws.com/assets.site.headforcode.com/icons/js.png'
script: <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
date: 22-01-2017
path: "undefined"
---

**VIDEO WILL APPEAR HERE**

**You can also read the article below, the video was based on it**
# So what next?

We have been talking about building an app that provides people with some self-guided walks and at the same time will enable you to show off your new knowledge to Vinay. I thought it would be good to put together a series of articles on how to build up the basics and we can then build upon those and get as advanced as we wish... the app must be easy for people to use, funky and fun at the same time. We can later use these skills to convert more of the Farnborough Guide site to this way of working. 

Lets take it all a step at a time.

I am basing this series of exercises on [Learn Apollo](https://www.learnapollo.com) but adapting their code, their text into something way more relevant to what we are doing here. So by all means have flick through their pages but don't follow the tutorials there, we shall focus on them our own way. Yeah? Cool :-)

# Lets make a start

You can grab the latest version of the HeadForCode project from GitHub and to do so, please follow the instructions below:

* Open the Git Bash application from your start menu in Windows
* You may have in the past created a code folder on your PC's main hard-drive, so for example mine is C:\code

``` bash
$ cd ~/code
```

NOTE: It can get confusing as Windows uses backslashes in it's paths whereas Linux is the opposite!

* Clone the Git repository to this folder

``` bash
$ git clone https://github.com/nickeblewis/headforcode.git
```
* You will see it download the files and set things up for you and after a few minutes, you will be returned to the command prompt

# What is in the repository

The HeadForCode repository contains both the website and some example projects. I could of given them Git repositories of their own but in this case I have decided to add them under a sub-folder. This will keep it simple as we start out. The other thing is that the examples tie in with this article and others that will follow. So it kind of makes sense, anyway, moving on...

* Assuming that you are currently in the ~/code directory, you will need to...

``` bash
$ cd headforcode
$ code .
```

* This will now launch Visual Studio Code and open up the root folder of this project
* You will see a set of directories shown in the Explorer (left-hand panel)
* admin, content, dist and src plus some others which we won't worry about for now
* Open up the "src" folder by double clicking on it
* Quite a few folders and files exist in here but today, we are only interested in one and that is "examples"
* Open that folder up and you will see that there are further sub-folders named "walks-react-master" and beneath that folder, a whole load more starting with the name "exercise"
* Lets take a peek in the one called "exercise-01-solution", click on it to expand it
* What you see here is a small application that we will need to build and run to see what it does
* In Visual Studio Code you can open a Terminal console by pressing the CTRL+' keys simultaneously
* You should now see a terminal window open, it's root directory being set to the main folder in which this project resides, yours will differ slightly from what I see but that's fine
* We need to go down a few folders, so type in the following

``` bash
$ cd src/examples/walks-react-master/exercise-01
$ npm install
$ npm start

NOTE






