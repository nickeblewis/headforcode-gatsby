---
title: Lesson 4 - Merging Pull Requests
layout: Doc
---

# Lesson 4 - Merging Pull Requests

The video in the last lesson did cover merging but we shall re-iterate on it quickly here. 

The purpose of merging is simple, you have finished work on "mynewbranch" or whatever you may have called it and you wish to apply the changes you have made to the "master" branch. In doing so a merge commit is created automatically by Git but there are a few things to be aware of because sometimes....

Conflicts can occur!!!

The pesky Conflict may occur if Git is unable to safely merge your changes with the other branch and this can happen for a multitude of reasons, too many to mention here other than to say.... let's talk more about this when one happens and thankfully Git provides great tools to help us overcome these messier situations.

In most cases a merge to master will succeed. It is then important for the team (you and I) to be made aware of this in some way because if you merge your branch into master, I will at some point need to make sure my local master branch is updated using **git pull** of course. Same goes for you if it were the other way round.

## Do we keep branches that are finished with?

You can if you wish, yes. However it is way better to delete them once they are finished with. You can do this via Github and in fact when merging Pull Requests via Github it offers the option to delete branches once they've been merged. However that will only delete the remote branches and not you local ones. Ask me about this at some point and I can go into more detail.

There are other git commands I've not mentioned yet, such as **git fetch** but I will introduce you to those at the right time via our conversations at the office or over Slack.

## Netlify

Finally - I have configured the site on Netlify to automatically re-build and deploy the site when we push or merge to master. This is super awesome, I love automation and what we call continuous deployment. Workflows are something we shall talk about a lot because the smarter they are, the smarter we can be and it is all very awesome, cool, rad etc etc!! LOL!!