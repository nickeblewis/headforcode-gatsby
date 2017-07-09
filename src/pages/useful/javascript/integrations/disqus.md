---
title: Integrating Disqus
date: 2017-06-28
author: Nick Lewis
featured: true
description: How to implement Disqus commenting in your own site
---

Integrating Disqus is really easy, we implemented it via the following steps:

``` bash
npm install react-disqus --save
```

Then add the following to a convenient place in your code. Since we are using Gatsby for this site, we added it to ```wrappers/md.js``` and it goes like this:

``` js
import ReactDisqus from 'react-disqus'

render() {
  return(
    <ReactDisqus shortname="your-short-name" />
  )
}
```

That is pretty much the gist of it.

We did have to add trusted domains via Disqus settings, as initially we did see error messages and it took a couple of hours before it worked properly. Hopefully you won't hit the same problems when you install it.