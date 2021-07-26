import React, { Component } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import LazyImage from '../../Components/LazyImage'
import './Homepage.css'
import TypewriterComponent from 'typewriter-effect'

import { phNo } from '../../Constants/consts'
const utils = require('../../utils/utils')


function TypeWriter({ textArray, pauseTime, charDelay }) {
    return (
        <TypewriterComponent
            options={{
                strings: textArray,
                autoStart: true,
                loop: true,
                delay: charDelay,

            }}
        />
    )
}

export default class Homepage extends Component {

    constructor(props) {
        super(props)
        this.backgroundImage = this.props.backgroundImageName;
        this.typeText = ['Wedding Photography', 'Candid Photography', 'Event Photography', 'Photo Editing'];
        utils.shuffelArray(this.typeText);

    }
    isMobile=()=>
    {
        return window.innerWidth < 769;

    }
    scrollToContacts=()=>{
        document.getElementById('04').scrollIntoView({behavior:'smooth' , block:'start'});
    }
    render() {
        return (
            <div className='home-page'>
                <div className='home-bg-div'>
                    <LazyImage className='home-bg-img' src={utils.getImageSrc('backgrounds', this.backgroundImage   , 'jpg')}
                        placeHolder={utils.getImageSrc('backgrounds', '0', 'jpg', 'small')} />
                </div>
                <Navbar key={0} />
                <div className='home-content-wrapper'>
                <div className='home-content'>
                    <div className='heading' >Welcome to Sai Roopa Studios.</div>
                    <div className='type-text-div'>
                        <div className='type-text-heading'>We Offer :</div>
                        <div className='type-text'>
                            <TypeWriter textArray={this.typeText} charDelay={150} />
                        </div>
                    </div>
                    <div className='home-content-2'>
                        <p className='description'>Whether you’re having any occation, or you need a wedding photographer in Chittor, get in touch with us to start something beautiful!</p>
                       {this.isMobile() &&
                        <div className='phone-btn' html onClick={()=>{window.location.href=`tel:+91${phNo}`}}>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512"  xmlns="http://www.w3.org/2000/svg">
                                <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z">
                                </path>
                            </svg>
                            <p>Call Us</p>
                        </div>}
                            
                        {!this.isMobile() && <div className='contact-btn' onClick={this.scrollToContacts}><p>Get In Touch</p></div>}
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
