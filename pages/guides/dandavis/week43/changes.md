---
title: Making changes
layout: Default
gitLink: /content/courses/dandavis/week44/index.md
---

Hi Dan,

Since we are having problems with CodeAcademy, lets park those until Friday when I will have some more time to take a proper look at them. So in the meantime, lets spend a little time looking at headforcode and our methods we shall be using for building sites using React, the great javascript framework.

(Next week or soon afterwards would be a great time to pick up on CodeAcademy and their React course)

So before going much further, you will need to update your local headforcode.

$ cd /c/proj/headforcode
$ git pull
$ npm install

You need to run the ``git pull`` in order to pull down changes I've made, the ``npm install`` to install new Node packages that have been added, I may have introduced a couple of new ones. In the future, [I will tell you more about these and where they fit in](todo.md)...

### Let's take a tour

Open up the headforcode project in VSC and then take a look at VSC's explorer panel on the left-hand side. Incidentally you can show/hide this by pressing CTRL+B together. You can also jump between the main 5 side-panels using:

* ``CTRL+SHIFT+E`` to switch to the explorer
* ``CTRL+SHIFT+F`` to switch to the search tool
* ``CTRL+SHIFT+G`` to switch to the Git panel
* ``CTRL+SHIFT+D`` to go to the debugger
* ``CTRL+SHIFT+X`` to go to the extensions

So for now, let's make sure that we are viewing the Explorer (``CTRL+SHIFT+E``)

You will see 6 folders, some files starting with a full-stop, package.json, README.md and 3 webpack related files. So lets take a look at the folders first.

**admin**

This is new new new new new, very new, lol!!! It is however a little experimental at the moment but you can try it out if you wish. I shall put up a separate article about it later and link to it from here. It is essentially a dashboard that allows you to write new blog posts and edit old ones via a web based UI. It is based on Netlify's CMS project that they are building and I am helping them test it out. Over the past couple of days, I helped them iron out some issues with their documentation.

**content**

This is where we shall spend our time today, getting to know how this works...

If you open this folder up, you will see more folders (which in the case of this site double up as being called _collections_). The first folder called assets, is where you should store image files and other such things. Confusingly we currently have two folders called _blog_ and _posts_ which will change I think in the future, as we only actually need the latter.

Let's pick out one of the folders and I'd suggest, _courses_ because that is where this page lives and it's under the folders _dandavis_ and _week43_, you shouldd find the file called _changes.md_.

Open it and have a look.

# (TODO this is a comment by the way, it wont get rendered to the page)

The file is written in something called _markdown_ which is essentially a text file with special powers as it were. I highly recommend taking a look at [TODO: insert link here when I get wifi again!!] as they explain how Markdown works and it is very much an important aspect of this site.

We are not using an databases for our content, we are instead using static files and when running either ``npm start`` or ``npm run build`` the website is then converted into a standard HTML site. So we are able to deploy the site via Github and automate a lot of the process. This will become clearer as we work through examples in future sessions.

That is not to say we can't use databases for some aspects of the site and I shall introduce some examples as we move along.

I have created a new folder called _danslab_ under the _content_ folder with a single file in it, you can find that either via the VSC Explorer ``CTRL+SHIFT+E`` or another cool way...

...Press ``CTRL+P`` together and a dropdown will appear from the top center of this application. 

Then type _danslab_ and the list of items changes to show about 3 possible files, the bottom one is the one we need, just use the cursor keys or your mouse to select it.

Voila! This opens up your file in the editor panel and you can have a go at editing it. However before you do, let's create a branch for you to do this in and here is a new way of doing that, an alternatve to the method we used last time.

You can create branches from VSC, follow the steps below:

* Press ``CTRL+P`` and a dropdown appears that you can use to search for files or run commands
* Start typing ``git`` followed by tapping the ``[spacebar]`` and typing ``branch`` notice how the dropdown auto-completes when you type?
* You can type the rest in manually or use the keyboard to select the suggestions given
* Let's type it in by hand this time, so once you've typed ``git branch`` and added a ``space`` type in your branch name which can be any string of text without spaces and lower-case
* Then hit ``enter`` anf notice how right down in the bottom left of VSC the branch indicator changes to show your new branch? It also does a "checkout".
* You can now make changes to the file ``content/danslab/index.md'' and read up on [TODO: add link] markdown and what you can do with it. Once you've played around, you can send me a pull-request ;-)

So this demonstrates how we can use VSC to do a lot of the things we would otherwise do via the Terminal, personally I prefer doing it this way, it lends itself nicely to getting things done more expressively.

So to wrap up this excercise, let's commit our changes:

* Press ``CTRL+SHIFT+G`` to switcch to the Git section in the sidebar which you can also click on with your mouse. It will not change the main display in any way.
* Notice that the icon has a counter on it, this is the "number of changes" indicator and at the moment, there will probably only be one.
* Type in a message in the box and once done, as they suggest, press ``CTRL+ENTER`` to commit the changes
* Next click on the elipses next to the tick, the refresh icon and a drop-down menu appears
* Choose push (or it might be publish in this instance)
* It will then prompt you whether you wish to publish or not. We do, so say yes. This then creates your branch for you on origin.

That's it from the VSC side of things, next you will want to raise a "pull request" (or PR for short)

* Using your browser, go to https://github.com/nickeblewis/headforcode
* Raise a pull request
* I normally get a message but just to be certain, email/slack/nudge me to take a look

Once the pull-request has been checked over and merged back to the master by myself:

* You can switch back to the master branch in VSC
* Click on the branch indicator at the bottom right of VSC and then in the dropdown that appears from the top, select master
* Then swicth to the Git section ``CTRL+SHIFT+G``
* Click on the elipses again
* This time select pull

DONE! The circle is complete as it were and you can then pick up your next coding task :-)

In the next article, I will show you some more things, more features of the headforcode project and this will keep us busy for awhile. Though I shall be doing some stuff on it myself most of the time. I will always let you know when is a good time to do a ``git pull`` to make sure that you've got the latest code available.

THANKS FOR READING :-)

## Further READING

Summary of other things to read up on

TODO