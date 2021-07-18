import React, { Component } from 'react'
import './Servicespage.css'

import Carousel, { consts } from 'react-elastic-carousel';
import Servicecard from '../../Components/Servicecard/Servicecard'

const utils = require('../../utils/utils')
const RightArrow = ({ onClick, disable }) => {
  
  return (
    <div className='right arrow' onClick={onClick} style={{
      visibility:disable ? 'hidden' : 'visible'

    }}>
      <div className='top-arrow-line arrow-line'></div>
      <div className='bottom-arrow-line arrow-line'></div>

    </div>
  )
}
const LeftArrow = ({ onClick, disable }) => {
  return (
    <div className='left arrow' onClick={onClick}  style={{
      visibility:disable ? 'hidden' : 'visible'

    }}>
      <div className='top-arrow-line arrow-line'></div>
      <div className='bottom-arrow-line arrow-line'></div>
    </div>
  )
}

export default class Servicespage extends Component {
  constructor(props) {

    super(props)
    this.breakPoints = [
      { width: 1, itemsToShow: 1, itemsToScroll: 1, },
      { width: 550, itemsToShow: 2, itemsToScroll: 1 },
      { width: 850, itemsToShow: 3, itemsToScroll: 1 },
      { width: 1150, itemsToShow: 4, itemsToScroll: 1 },
      { width: 1450, itemsToShow: 5, itemsToScroll: 1 },
      { width: 1750, itemsToShow: 6, itemsToScroll: 1 },
    ]
    this.services = [
      {
        iconName: 'cake',
        service: 'Event Photography',
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem laborum labore aliquid possimus'

      },
      {
        iconName: 'ring',
        service: 'Wedding Photography',
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem laborum labore aliquid possimus'

      },
      {
        iconName: 'camera',
        service: 'Fahion Photography',
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem laborum labore aliquid possimus'

      },
      {
        iconName: 'computer',
        service: 'Photo Editing',
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem laborum labore aliquid possimus'

      },
      {
        iconName: 'color_plate',
        service: 'B&W to Color Photo',
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem laborum labore aliquid possimus'

      },
    ]
    utils.shuffelArray(this.services)
  }
  getServiceCards = () => {
    return this.services.map((service, index) => {
      return (

        <Servicecard key={index} iconName={service.iconName} heading={service.service} discription={service.discription} />
      )
    })
  }

  renderArrow = ({ type, onClick, isEdge }) => {
    return (
      <div>
        {consts.PREV === type && <LeftArrow onClick={onClick} disable={isEdge} />}
        {consts.NEXT === type && <RightArrow onClick={onClick} disable={isEdge} />}
      </div>
    )
  }
  render() {
    return (

      <div className='services-page' >
        <h1>
          What do we offer
        </h1>
        <Carousel
        className='cards-layout'
          renderArrow={this.renderArrow}
          breakPoints={this.breakPoints}
          itemPadding={[10, 10]}
          disableArrowsOnEnd={true}
          pagination={false}

        >
          {this.getServiceCards()}

        </Carousel>
      </div>

    )
  }

}