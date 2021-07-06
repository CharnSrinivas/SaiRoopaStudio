import React, { Component } from 'react'
import './Navbar.css'

export default class Navbar extends Component {
    render() {
        return (
        
                <nav>
                    <div className='logo'>
                        <div className='logo-image'></div>
                        <div className='logo-name-div'>
                            <div className='logo-name'>Studios</div>
                            <div className='logo-dot'></div>
                        </div>
                    </div>
                    <input type='checkbox' id='check'></input>
                    <ul className='nav-items'>
                        <li><a href='some'>Home</a></li>
                        <li><a href='#some'>Services</a></li>
                        <li><a href='#some'>About</a></li>
                        <li><a href='#some'>Collections</a></li>
                        <li><a href='#some'>Contact</a></li>

                    </ul>

                    <label htmlFor='check'  className='burger' id='burger' >
                        <div className='line1'></div>
                        <div className='line2'></div>
                        <div className='line3'></div>
                    </label>

                </nav>
            
        )
    }
}
