---
title: Quick Reference
layout: Default
path: "undefined"
---

## Spread operator

```javascript
// Turn arrays into comma separated 
// values and more
> function logger (...args) {
 console.log(‘%s arguments’,
    args.length)
 args.forEach(console.log) 
 // arg[0], arg[1], arg[2]
}
```