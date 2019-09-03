import React, { Component } from 'react'

import 'reset-css'
import './Navbar.css'

export default class Navbar extends Component {
    constructor(){
        super()

        this.state = {
            menu: false
        }
    }

    openMenu = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    render() {
        return (
            <div>
                <nav className='navbar'>
                    <h1 className='navbar-title'><a href='main'>Start Bootstrap</a></h1>
                    <div className='navbar-icon' onClick={this.openMenu}>
                        &#9776;
                    </div>
                    <ul className='navbar-menu'>
                        <li><a href='#services'>SERVICES</a></li>
                        <li><a href='#portfolio'>PORTFOLIO</a></li>
                        <li><a href='#about'>ABOUT</a></li>
                        <li><a href='#team'>TEAM</a></li>
                        <li><a href='#contact'>CONTACT</a></li>
                    </ul>
                </nav>

                <ul className={this.state.menu ? 'menu slide' : 'menu'}>
                    <li><a href='#services'>SERVICES</a></li>
                    <li><a href='#portfolio'>PORTFOLIO</a></li>
                    <li><a href='#about'>ABOUT</a></li>
                    <li><a href='#team'>TEAM</a></li>
                    <li><a href='#contact'>CONTACT</a></li>
                </ul>

            </div>
        )
    }
}
