import React from 'react'
import LazyImage from '../../Components/LazyImage'
import './Aboutpage.css'
import "animate.css/animate.min.css";

export default function Aboutpage() {
    const aosAttr = {
        'data-aos': 'zoom-in-up',
        'data-offset': '300',
         'data-aos-once': 'true'
    }
    return (
        <div className='about-page'>
            <div className='line top'></div>
            <div className='about-heading'>About me</div>
            <div className='about-content'>
                <div className='about-text'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus assumenda consequuntur incidunt natus ea porro voluptate sapiente aliquam iste, quis maiores quaerat consequatur, placeat quo unde, excepturi dignissimos soluta quibusdam?
                </div>
                <div className='middle '></div>
                <div {...aosAttr} className='profile-img-div'>
                    <LazyImage src={require('../../assets/images/profile.jpg').default}
                        placeHolder={require('../../assets/images/profile_small.jpg').default} />

                </div>

            </div>
            <div className='line bottom'></div>

        </div>
    )
}

