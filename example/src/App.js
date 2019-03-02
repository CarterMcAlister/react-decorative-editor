import React, { Component } from 'react'

import DecorativeEditor from 'react-decorative-editor'

const text = `
  const ReactDecorativeEditor = () => {

    const version = '1.0.0'

    const framework = 'React'

    const frameworkVersion = '^16.8.1'
    
    const author = 'Carter McAlister'

  }
`

export default class App extends Component {
  render () {
    return (
      <div className='parent'> 
        <DecorativeEditor text={text} cursor={true} />

        <div className='link-box'>
          <a className= 'link' href='https://github.com/CarterMcAlister/react-decorative-editor'>View on GitHub</a>
          <a className= 'link' href='https://www.npmjs.com/package/react-decorative-editor'>View on NPM</a>
        </div>
      </div>
      
    )
  }
}
