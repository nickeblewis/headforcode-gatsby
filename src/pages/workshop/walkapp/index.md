---
title: Building the Walks App, Part 1
layout: Doc
description: 'Articles, resources, and posts etc'
thumbnail: 'https://s3-eu-west-1.amazonaws.com/assets.site.headforcode.com/icons/js.png'
script: <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
date: 22-01-2017
---

## Building the Walks App, Part 1

Yesterday we cloned the project:

[https://github.com/nickeblewis/walkapp](https://github.com/nickeblewis/walkapp)

You will have seen something like this...

![alt text](/assets/walks1.PNG "How our walks app looked in the beginning")

Let's move on....

### Review the database

We are as you know hosting the database with [Graph.cool](https://www.graph.cool/) and we have our own database called __Farnborough__ which is currently split into the following models:

* Category
* Listing
* Post
* SubCategory

The walks app as it stands currently is making use of the __Post__ model which you can go and see at:

[https://console.graph.cool/Farnborough/models/Post/databrowser](https://console.graph.cool/Farnborough/models/Post/databrowser)

#### Try out

So let's experiment - run the app in one browser tab and the database model (as above) in another tab. Add a new entry to the app and then refresh the data model tab. You will instantly see your new item added. Try this a few times over and you get the idea...

### Adding a new page

Ok for this section, I am going to walk you through how to create a new page that will allow us to see the categories, read through this carefully, as I will be getting you to add one of the other pages later.

#### Create a branch

I created a new branch for this piece of work, it is a good habit to get into plus it means we can review code changes before we merge them into what is known as the __Master__ branch. It also means work can be isolated without breaking anything else already in place.

``` bash
git checkout -b categorypage
```

This then informed me that a new branch has been switched to, so the above command actually does two things for us. It creates the branch named categorypage and then "checks it out" which means it switches to it. We will discuss this in more detail another time, as there are a number of things to be aware of too.

#### Lets create a new route





