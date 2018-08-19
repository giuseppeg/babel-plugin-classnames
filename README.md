# babel-plugin-classnames for JSX

[![Build Status](https://travis-ci.org/giuseppeg/babel-plugin-classnames.svg?branch=master)](https://travis-ci.org/giuseppeg/babel-plugin-classnames)

Never import classnames again! Converts arrays of classnames to a call of a function of your choice.

```js
<div className={['btn', props.large && 'large']} />
```

💫

```js
import _classNames from 'classnames'

<div className={_classNames('btn', props.large && 'large')} />
```

By default imports from `classnames`. However the package name is configurable.

## Installation

```
npm i --save-dev babel-plugin-classnames
```

Then add the plugin to your `.babelrc` file:

```JSON
{
  "plugins": [
    "@babel/plugin-syntax-jsx",
    "babel-plugin-classnames"
  ]
}
```

## Configuring the package and import name

You can set the package name by defining the `packageName` option:

```JSON
{
  "plugins": [
    ["babel-plugin-classnames", { "packageName": "dss-classnames" }]
  ]
}
```

If the function you want to use is not the default package export you can use the `importName` option:

```JSON
{
  "plugins": [
    ["babel-plugin-classnames", {
      "packageName": "emotion",
      "importName": "cx"
    }]
  ]
}
```
