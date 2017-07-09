---
title: Documenting your components
layout: Doc
---

# Automating documentation for your React components
### Sharing with documentation

Building and sharing __components__ is one of the biggest featured behind React. However without some form of documentation, they may be hard for other developers to adopt quite so easily.

## react-docgen

[react-docgen](https://github.com/reactjs/react-docgen) is a CLI and toolbox to help extract information from __React__ components, and generate documentation from it.

The idea is easy to use. We pass our __component__ into __react_docgen__ and it will return an object.

Let's consider the following example:

``` javascript
var React = require('react');

/**
 * General component description.
 */
var Component = React.createClass({
  propTypes: {
    /**
     * Description of prop "foo".
     */
    foo: React.PropTypes.number,
    /**
     * Description of prop "bar" (a custom validation function).
     */
    bar: function(props, propName, componentName) {
      // ...
    },
    baz: React.PropTypes.oneOfType([
      React.PropTypes.number,
      React.PropTypes.string
    ]),
  },

  getDefaultProps: function() {
    return {
      foo: 42,
      bar: 21
    };
  },

  render: function() {
    // ...
  }
});

module.exports = Component;
```

You will get the json output

``` json
{
  "props": {
    "foo": {
      "type": {
        "name": "number"
      },
      "required": false,
      "description": "Description of prop \"foo\".",
      "defaultValue": {
        "value": "42",
        "computed": false
      }
    },
    "bar": {
      "type": {
        "name": "custom"
      },
      "required": false,
      "description": "Description of prop \"bar\" (a custom validation function).",
      "defaultValue": {
        "value": "21",
        "computed": false
      }
    },
    "baz": {
      "type": {
        "name": "union",
        "value": [
          {
            "name": "number"
          },
          {
            "name": "string"
          }
        ]
      },
      "required": false,
      "description": ""
    }
  },
  "description": "General component description."
}
```

## Using react-docgen inside our React application

First things first we should install __react-docgen__

```
npm install --save react-docgen
```

Next __import__ it into the __React__ application

``` javascript
import {parse} from 'react-docgen';
```

Now we can __parse__ any component and get its documentation back. But to usee the __parse__ function we need to __import__ our components as __Strings__.

So lets import a component as a __string__ uing the [raw-loader](https://github.com/webpack/raw-loader).

## Exploring the toolbox

``` bash
git clone https://github.com/reactjs/react-docgen.git
```

I then changed directory into the project and into the examples folder

``` bash
cd react-docgen/example
```











[Thanks to David Boyne for the article that inspired this step-by-step](http://www.davidboyne.co.uk/2016/05/26/automating-react-documentation.html)