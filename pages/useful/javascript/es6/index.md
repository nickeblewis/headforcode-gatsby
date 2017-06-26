---
title: ES6 Features
---

ES6 is the latest version of Javascript as we commonly know it or ECMAscript as it is officially known. I have collated a list of the very best features of ES6 in order to help us gain a better grasp of what it enables us to do.

## Constants

Support for constants (also known as "immutable variables"), i.e., variables which cannot be re-assigned new content. Notice: this only makes the variable itself immutable, not its assigned content (for instance, in case the content is an object, this means the object itself can still be altered).

``` js
const PI = 3.141593
```

## Scoping

### Block scoped variables

Block-scoped variables (and constants) without hoisting

``` js
for (let i = 0; i < a.length; i++) {
    let x = a[i]
    …
}
for (let i = 0; i < b.length; i++) {
    let y = b[i]
    …
}

let callbacks = []
for (let i = 0; i <= 2; i++) {
    callbacks[i] = function () { return i * 2 }
}
callbacks[0]() === 0
callbacks[1]() === 2
callbacks[2]() === 4
```

### Block scoped functions

Block scoped function definitions.

``` js
{
    function foo () { return 1 }
    foo() === 1
    {
        function foo () { return 2 }
        foo() === 2
    }
    foo() === 1
}
```

## Arrow functions
## Extended parameter handling
## Template Literals
## Extended Literals
## Enhanced Regular Expression
## Enhanced Object properties
## Destructuring assignment
## Modules
## Classes
## Symbol Type
## Iterators
## Generators
## Map/Set & WeakMap/WeakSet
## Typed Arrays
## New built-in methods
## Promises
## Meta-programming
## Internationalisation & Localisation

