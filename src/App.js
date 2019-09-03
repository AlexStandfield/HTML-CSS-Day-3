import React, { Component } from 'react'
import Navbar from './components/Navbar/Navbar'

import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar />

        <div id='main'>
          <h1 className='welcome'>Welcome to our Studio</h1>
          <h1 className='meet'>It's nice to meet you</h1>
          <button id='tell'><a href='#services'>TELL ME MORE</a></button>
        </div>

        <div id='services'>
          Services
        </div>

        <div id='portfolio'>
          Portfolio
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

