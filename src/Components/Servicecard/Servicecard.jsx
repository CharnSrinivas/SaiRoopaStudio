import React from 'react'
import './Servicecard.css'
export default function Servicecard({iconName,heading,description}) {
    return (
        <div className='service-card'>
            <img className='icon' alt='ring-icon' src={require(`../../assets/svgs/icons/${iconName}.svg`).default} ></img>
            <div className='heading'>{heading}</div>
            <div className='divider'></div>
            <p className='discription'>{description}</p>
        </div>
    )
}
