import React, { Component } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import LazyImage from '../../Components/LazyImage'

import './Homepage.css'
import TypewriterComponent from 'typewriter-effect'

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

        this.backgroundImage = this.props.backgroundImageName
        this.typeText = ['Wedding Photography', 'Candid Photography','Event Photography', 'Photo Editing']
        utils.shuffelArray(this.typeText)

    }

    render() {
        return (
            <div className='home-page'>
                <div className='home-bg-div'>
                    <LazyImage className='home-bg-img' src={utils.getImageSrc('backgrounds','0','jpg')}
                        placeHolder={utils.getImageSrc('backgrounds','0','jpg','small')} />
                </div>
                <Navbar key={0}/>
                <div className='home-content'>
                    <div className='heading' >Welcome to Sai Roopa Studios.</div>
                    <div className='type-text-div'>
                        <div className='type-text-heading'>We Offer :</div>
                        <div className='type-text'>
                            <TypeWriter textArray={this.typeText} charDelay={150} />
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}
