---
title: Farnborough Guide
layout: Doc
path: "undefined"
---

# Farnborough Guide

I have started work on building the next generation of Farnborough Guide, so that we can focus our efforts on launching the self-guided walks around the town and it's immediate area. I shall kick off by going straight into some notes on how we should present this to Vinay next week, as that is our immediate goal to meet.

## Demo of database and how it works

We will not tell Vinay much about the website part of the project just yet, though we could show him something if you wish. Our main aim is to talk about the database, how does it work and to demonstrate an understanding of this area to Vinay on the day of his visit.

### 0: Introduction to the project

Farnborough Guide is a new project we are embarking on this year that will help provide people with information on what is going on in their town and things they can do. The project is likely to become quite big over time, we have a lot of ideas for it.

One aspect of the site will be a walks page/section that will feature a number of self-guided tours around the town. Many of them will have a theme, such as aviation being a good example. Some will just be good ideas for fitness and could be adapted as running or cycling routes.

We could tell you more but for now, we want to talk about databases and how such a site is designed from the ground up.

I have been helping Nick design and develop the database recently and here is how it all comes together.

### 1: Start by showing Vinay a diagram

__TODO: We shall sketch out a database diagram on the whiteboard when we are together on Thursday and leave it there as a reference point for Vinay__

The diagram will illustrate how the models all fit together and their relationships. 

Nick and I spent a lot of time just sketching out our ideas to start with, I could show you some screen designs I have created, simply by sketching out with pen and paper, nothing more than that. 

We also talked about kind of data we need to capture and use to present the pages of the site, as represented by the diagram.

### 2: Introduce Vinay to GraphCool

We are using an online based database system for the project that is packed with innovative concepts but many are based on old fashioned database practices. We have created a number of models for our database which is called Farnborough. 

We can start off by talking about the models relevant to the Walks page we mentioned just now.

__Models__

* Walk
* Step
* Photo

Just show Vinay the list of models on the left-hand side of the screen

### 3: Talk about their schemas

We can pick out any of these models by selecting one, in this case we shall go with __Walk__ and open up it's Schema. The schema is essentially the definition of what makes up this Model, it's fields, types, relationships, constraints, defaults, primary keys and foreign keys. 

We can edit these fields, delete them and add new ones as we wish. 

### 4: Talk about their relationships and what they mean

TODO

### 5: Talk about the Playground

TODO - essentially show him what we can do to query data

### 6: Query datausing GraphQL

GraphCool takes it's name from GraphQL, a technology created by Facebook that allows us to ..... TODO

``` json
query {
    allPhotos {
        name
    }
} 
```

TODO add more....
