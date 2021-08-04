import React from 'react'
import './Pagespinner.css'
export default function Spinner() {
    return (
        <div className='wrapper'>
            <div className='container'>
                <img className='spinner-logo' src={require('../../assets/images/Logo.png').default} />
                {/* <div className='spinner-text'>Loading</div> */}
                {/* <div className='first spinner'></div> */}
                {/* <div className='second spinner'></div> */}
                <div className='one-div'><div className='circle one'></div></div>
                <div className='two-div'><div className='circle two'></div></div>
                <div className='three-div'><div className='circle three'></div></div>
            </div>
        </div>
    )
}
