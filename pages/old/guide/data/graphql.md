---
title: GraphQL
layout: Doc
---

GraphQL was created by a team of Engineers at Facebook to tackle some of the shortcomings that some have experienced with traditonal RESTful APIs. In short GraphQL works just like any other API but with just one endpoint and a genius query language that many front end engineers will find easy to pick up from the beginning...


[Open the GraphQL Playground](https://api.graph.cool/simple/v1/cixraxev60e4c0121krsia44h?query=query%20%7B%0A%20%20allPosts(orderBy%3A%20createdAt_DESC)%20%7B%0A%20%20%20%20imageUrl%0A%20%20%7D%0A%7D)

You will see on the left hand side some code:

``` javascript
query {
  allPosts(orderBy: createdAt_DESC) {
    imageUrl
  }
}
```

This retrieves all Posts that exist on our database and you will see data on the right hand side that looks like:

``` json
"data": {
    "allPosts": [
      {
        "imageUrl": "https://res.cloudinary.com/dqpknoetx/image/upload/v1486074532/j3af81oytmfc0v3mwuie.jpg"
      },
      {
        "imageUrl": "http://imagecolony.com/wp-content/uploads/2016/08/Cool-Wallpaper-496.jpg"
      },
      {
        "imageUrl": "https://thumb7.shutterstock.com/display_pic_with_logo/2892448/342092249/stock-vector-cool-comic-book-bubble-text-pop-art-retro-style-342092249.jpg"
      },
      {
        "imageUrl": "https://s-media-cache-ak0.pinimg.com/originals/c9/7b/13/c97b13751ccb41870aa7b6420c8b7c3d.jpg"
      },
      {
        "imageUrl": "https://newevolutiondesigns.com/images/freebies/cool-wallpaper-1.jpg"
      }
    ]
  }
}
```
TODO - this is a work in progress, please come back soon or subscribe to our newsletter to be kept up-to-date.