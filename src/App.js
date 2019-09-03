import React, { Component } from 'react'
import Navbar from './components/Navbar/Navbar'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <div id='main'>
          Main
          <button id='tell'><a>TELL ME MORE</a></button>
        </div>

        <div id='services'>
          Services
        </div>

        <div id='about'>
          About
        </div>

        <div id='team'>
          Team
        </div>

        <div id='contact'>
          Contact
        </div>
      </div>
    )
  }
}

