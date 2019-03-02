# React Decorative Editor Component

> A React text component that prints text in a code editor style window. Requires a version of React that supports Hooks.

[![NPM](https://img.shields.io/npm/v/react-decorative-editor.svg)](https://www.npmjs.com/package/react-decorative-editor) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm i react-decorative-editor
```



## Usage

```jsx
import React, { Component } from 'react'

import DecorativeEditor from 'react-decorative-editor'

class Example extends Component {
  render () {
    return (
      <DecorativeEditor 
        text={text} 
        darkMode={false}
        speed={85}
        cursor={true} 
        style={{maxWidth: '540px'}}
        />
    )
  }
}
```

## Properties

Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
`text`|string|yes|| Text to be displayed in the component. It is recommended to define text in a tilde for formatting.
`darkMode`|boolean|no|false| Uses dark theme if true, light theme otherwise.
`speed`|number|no|100| Delay between each character being typed. 
`cursor`|boolean|no|false| Shows cursor as text is typed if true
`style`|object|no|{maxWidth: '540px'}| Style object that is applied to the component's outermost div.
-----

## License

MIT © [Carter McAlister](https://github.com/CarterMcAlister)
