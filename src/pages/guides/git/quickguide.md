---
title: A Quick Guide to Git
layout: Doc
---

# A Quick Guide to Git

You were asking about the best steps to follow so as to use Git properly and that is a good question, for which I have some good answers.

## Which branch am I in?

Normally when using git bash or any other terminal application, you should see yor current branch shown in brackets next to the command prompt. If using VSC, you will also see this piece of info displayed in the bottom left-hand corner of the application. There is also the branch command:

``` bash
$ git branch
```

This displays the branch you are in, that is marked by an asterix and it will show othere branches you have available to you.

``` bash
$ git branch --all
```

Does the same thing but also shows you the remote branches that are available.

## What is my status?

Git status provides you with information on the current status of your git repository and is a command you should use often. I often use it as a sanity check after committing changes and so on.

## Typical steps to follow frequently

``` bash
$ git status
```

If you have no changes pending, you should see something like this:

``` bash
On branch master
Your branch is up-to-date with origin/master
nothing to commit, working tree clean
```

That is perfect because, you can see that you have nothing to pull from the origin server (aka the remote Git repository). 

What if you see something different here? You might be informed that your branch is either ahead or behind by so many commits.

If you are behind and to be honest, I do this anyway even if my status seems to be clean and up-to-date.

``` bash
$ git pull
```

This will always retrieve any changes that may or may not exist from origin/master, tyoically things I have been working on. I will do the same my end too if I know you've made changes.

## When is it right to branch?

Whilst yoy can of course just dive in and make changes to the master branch, it is generally not the best thing to do. What I recommend we do, is to make use of branches when starting on a new piece of work. It helps isolate what I am doing from your work in progress and vice versa. It also means we have an opportunity to review eachothers work before we merge it into master.

You can branch from any branch but it is always best to do so from the master, if that makes sense.

``` bash
$ git checkout -b "mynewbranch" 
```

Will create a new branch on your computer, not on the remote machine (origin) to start with. There are various ways you can do this from within VSC too. We will cover that at some point.

## Committing and pushing your changes

Once you have made changes, you can commit them to your branch.

``` bash
$ git add --all
$ git commit -m "whatever message you like but make it descriptive"
$ git push
```

The above commands add all changes to what is known as the "staging area" of the repository. They will remain there until you commit them. Every commit is given a unique reference ID that can be used later for more complex git tasks if needs be, such as cancelling an older change any time in the future, something we call "reverting".

The push will transfer your changes to the origin server.

## Pull requests, code reviews and merges

You should then let me know that you have pushed some changes to origin and this is where I can review them. It goes both ways, you can code review mine too. I will then be able to generate a pull-request, check the code, maybe make suggestions for alterations and when we are both happy...

We merge.

The merge combines it all into the origin master branch

## Switching branches

You can then switch back to master, to pull down all of the new merged changes

``` bash
$ git checkout master
$ git pull
```

We both do that and we are then both in sync with eachother ready to tackle the next piece of work.



