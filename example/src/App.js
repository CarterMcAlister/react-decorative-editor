import React, { Component } from 'react'

import ExampleComponent from 'react-decorative-editor'

const text = `
  const ReactDecorativeEditor = () => {

    const framework = 'React'

    const frameworkVersion = '^16.8.1'
    
    const creator = 'Carter McAlister'

  }
`

export default class App extends Component {
  render () {
    return (
      <div style={{background:'#413C58', height:'80vh', paddingTop:'20vh'}}>
        <ExampleComponent text={text} cursor={true} />
      </div>
    )
  }
}
