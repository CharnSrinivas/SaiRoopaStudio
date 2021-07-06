import React, { Component } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import LazyImage from '../../Components/LazyImage'

import '../../fonts/Overpass-Regular.ttf'
import '../../fonts/Pacifico-Regular.ttf'
import './Homepage.css'

import { getBackgroundImageSrc, shuffelArray } from '../../utils/utils'
import TypewriterComponent from 'typewriter-effect'

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
        this.typeText = ['Wedding Photography', 'Event Photography', 'Photo Editing']
        shuffelArray(this.typeText)

    }

    render() {
        return (
            <div className='home-page'>
                <div className='home-bg-div'>
                    <LazyImage className='home-bg-img' src={getBackgroundImageSrc(this.backgroundImage,'jpg',true)}
                        placeHolder={getBackgroundImageSrc(this.backgroundImage,'jpg',false)} />
                </div>
                <Navbar />
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
