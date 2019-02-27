import React, { Component } from 'react'

import ExampleComponent from 'react-decorative-editor'

const text = `
  class Carter {

    constructor() {

      this.name = 'Carter McAlister';

      this.location = 'Arlington, Texas';

      this.email = 'carterm126@gmail.com';

    }

  }
  `

export default class App extends Component {
  render () {
    return (
      <div style={{background:'#413C58', height:'80vh', paddingTop:'20vh'}}>
        <ExampleComponent text={text} />
      </div>
    )
  }
}
