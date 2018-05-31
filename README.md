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

By default imports from `classname`. However the package name is configurable.

## installation

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

## Configuring the package name

You can set the package name by defining the `packageName` options:

```JSON
{
  "plugins": [
    ["babel-plugin-classnames", { "packageName": "dss-classname" }]
  ]
}
```
