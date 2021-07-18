import React, { Component } from 'react'
import './Navbar.css'

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.bodyElement = null;
        this.burgerNavRef = React.createRef();
        this.navItemsRef = []
        this.activeNavItemClasName = "active-nav-item";
    }

    componentDidMount() {

        this.bodyElement = document.querySelector('body')

        if (this.navItemsRef.length > 0) {
            for (let i = 0; i < this.navItemsRef.length; i++) {
                // document.getElementById().addEventListener('click')
                this.navItemsRef[i].addEventListener('click', () => {
                    document.getElementsByClassName(this.activeNavItemClasName)[0].classList.remove(this.activeNavItemClasName);
                    this.navItemsRef[i].classList.add(this.activeNavItemClasName)
                    document.getElementById('0' + i.toString()).scrollIntoView({ behavior: 'smooth' ,block:'start',inline:'center'})
                    if (this.bodyElement) {
                        this.burgerNavRef.current.checked = false;
                        this.bodyElement.style.overflowY = 'auto'
                    }
                })
            }
        }
        this.burgerNavRef.current.onchange = (event) => {
            if (this.bodyElement) {
                event.target.checked ?
                this.bodyElement.style.overflow = 'hidden'
                : this.bodyElement.style.overflow = 'auto'
            }
        }
    }

    

    addToNavItemsRefs = (ref) => {
        this.navItemsRef.push(ref)
    }
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
                <input ref={this.burgerNavRef} type='checkbox' id='check'  ></input>

                <ul className='nav-items'>
                    <li className={`nav-item ${this.activeNavItemClasName}`} ref={this.addToNavItemsRefs}  >Home</li>
                    <li className='nav-item ' ref={this.addToNavItemsRefs}  >Services</li>
                    <li className='nav-item ' ref={this.addToNavItemsRefs}  >About</li>
                    <li className='nav-item ' ref={this.addToNavItemsRefs}  >Collections</li>
                    <li className='nav-item ' ref={this.addToNavItemsRefs}  >Contact</li>

                </ul>

                <label htmlFor='check' className='burger' id='burger' >
                    <div className='line1'></div>
                    <div className='line2'></div>
                    <div className='line3'></div>
                </label>
                <div className='overlay'></div>
            </nav>

        )
    }
}
