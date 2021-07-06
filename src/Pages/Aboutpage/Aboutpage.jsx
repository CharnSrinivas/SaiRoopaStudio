import React, { Component } from 'react'
import LazyImage from '../../Components/LazyImage'
import './Aboutpage.css'
export default class Aboutpage extends Component {
    render() {
        return (
            <div className='about-page'>
                <div className='line top'></div>
                <div className='about-heading'>About me</div>
                <div className='about-content'>
                    <div className='about-text'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus assumenda consequuntur incidunt natus ea porro voluptate sapiente aliquam iste, quis maiores quaerat consequatur, placeat quo unde, excepturi dignissimos soluta quibusdam?
                    </div>
                    <div className='middle '></div>
                    <div className='profile-img-div'>
                    <LazyImage src={require('../../assets/images/profile.jpg').default} 
                    placeHolder={require('../../assets/images/profile_small.jpg').default} />        
                        
                    </div>
                </div>
                <div className='line bottom'></div>

            </div>
        )
    }
}
