---
title: How
date: "2017-09-02"
layout: post
author: nickeblewis
tags:
    - One
    - Two
thumbnail: 'https://s3-eu-west-1.amazonaws.com/assets.site.headforcode.com/icons/js.png'
draft: false
---

How I built this application

fg-gatsby
headforcode-gatsby

- cd proj
- gatsby new headforcode-gatsby
- cd headforcode-gatsby
- npm install
- gatsby develop

So we now have a gatsby default site running at localhost:8000

- I then modified package.json with a script for "start" I prefer running npm start!!

Next I setup my git repo

- git init
- git add .
- git commit -m "first commit"
- git status

Reveals I have a clean repo

We then went through the simple steps of creating a github repo and hooking that up with Netlify. Minutes later we both have our simple sites online. We could map domains to these but not yet! 

# Next

- Become collaborators on eachother's projects, Dan on headforcode, me on FG
- That way we will have to both raise PRs in order to publish changes on either site
- I will then clone Dan's
- Dan should then clone mine
- I shall commit a change to Dan's which will be a copy of this page to help Dan learn how to write some of our pages in MD format
- Next we will structure the pages folder into - Home, About Us and Contact (mimicking the current Umbraco sites for FG and H4C)
- Setup Slack to show notifications under the Deploy channel for when any of our sites are deployed. You will need the following URL for this https://hooks.slack.com/services/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
- Create the contact form for the contact page which won't be styled the official way yet (that comes later)

# Probably should 

- npm install --save tachyons-sass
- install into the two projects css folder

# Other things I have created with Gatsby

https://nickogram.netlify.com/

# resources

- https://github.com/tachyons-css/tachyons-sass/tree/master/scss
- https://github.com/michaeljdeeb/michaeljdeeb-gatsby-blog/tree/master/css