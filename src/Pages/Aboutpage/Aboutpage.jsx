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
        <div className='about-page' id='2'>
            <div className='line top'></div>
            <div className='about-heading'>About me</div>
            <div className='about-content'>
                <div className='about-text'>
                    {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus assumenda consequuntur incidunt natus ea porro voluptate sapiente aliquam iste, quis maiores quaerat consequatur, placeat quo unde, excepturi dignissimos soluta quibusdam? */}
                    I am <strong>Raja Sekhar</strong>, I started Sai Roopa studio in 2000 ,I actually have <strong>18+</strong> years expertise , one hundred of weddings and glad customers.You are always welcome to visit our studio at P.K.Layout,Tirupathi.We are all passionate about drawing all of the elements of the day together – from elegance and edginess to fun and quirky moments.If you are looking for Creativity and Candid Video&Photography your search ends here!Our style of photography is simple, friendly and natural.Contact us for more details.
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

