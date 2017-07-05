---
title: Excercise 1 - Let's do something...
layout: Doc
gitLink: /content/courses/dandavis/week43/excercise1.md
---

# Excercise 1 - Let's do something...

## Pre-flight checks!

First of all let us check that we are in the right folder and in the right branch

```bash
$ cd /c/proj/headforcode
$ git status
```

We should be in the Master branch, the ``git status`` command will inform us of this and you can also tell form the Terminal window too. If we are not and you only need to do this, if you are in an alternative branch:

```bash
$ git checkout Master
```

Will make sure we are back in the right place.

## We are about to pick up on a piece of work

Let's imagine I've given you a piece of work to do, it could be an enhancement, a bug fix or something new. Perhaps you have spotted something that isn't right and you want to change it. In either case, it is a great idea to create a new branch, so lets do that. I am going to give you a little fix to make to this site.

```bash
$ git branch "removecocacola"
```

You may have spotted earlier, that on the home page there is a section of text about Coca Cola, now we want to get rid of that, it has nothing to do with H4C!!

## Launch VSC

Launch Visual Studio Code and open up the headforcode project folder under ``/c/proj/headforcode`` and using the search tool, look for "coca cola". The search tool is in the left-hand vertical menu bar along with Explorer, Git, Debug and Extensions. You can also get to it by pressing the following combination of keys CTRL+SHIFT+F.

It will find two files where "coca cola" is mentioned:

* excercise1.md
* index.js (in src/pages/Homepage)

It is the second file we are looking for and underneath it you will see "img src...." listed, double-click on this.

We want to delete between lines 97 - 106 where you will see an opening and closing **DIV** tag and some blurb about the Coca-Cola company.

Once deleted, we can then go through the next steps in order to commit your changes to the local repo within your branch, push that to origin, do a pull request, I then review your changes and if approved, they get merged to master and job done!

NOTE: The second step below may initially fail but Git will help you overcome this, as seen in an earlier lesson

```bash
$ git commit -am "I have removed coca-cola"
$ git push 
```

Having done the above, go on over to https://github.com/nickeblewis/headforcode and raise a pull-request

I think you should be able to follow through with this perfectly fine but as ever, please pop a message in the Disqus area below for help!
