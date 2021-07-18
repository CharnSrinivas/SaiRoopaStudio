import React, { Component, useState } from 'react'

import Tabview from '../../Components/Tabview/Tabview'

import LazyImage from '../../Components/LazyImage'
import ImageViewModel from '../../Components/Models/ImageViewModel/ImageViewModel';
import styles from './Collectionspage.module.css'
import { addTriggerEventToOnWindowChange } from '../../Main';

const colors = require('../../Constants/colors')
const utils = require('../../utils/utils')

export const TabContentPhoto = ({ originalImageSrc, mediumImagesSrc, placeHolderImageSrc, index,
    data_aos,
    data_aos_duration,
    data_aos_delay,
    data_aos_once,
    showAos }) => {

    const [canShowModel, setcanShowModel] = useState(false)

    const toggleModel = () => {
        const root = document.querySelector('body')
        if (canShowModel) {
            setcanShowModel(false)
            root.style.overflow = 'auto'
        } else {
            setcanShowModel(true)
            root.style.overflow = 'hidden'
        }
    }
    // const [aosAttr ,setAosAttr] = useState()
    const aosAttr = {
        'data-aos':showAos ? data_aos : '',
        'data-aos-duration':showAos ? data_aos_duration : '',
        'data-aos-delay':showAos ? data_aos_delay : '',
        'data-aos-once':showAos ? data_aos_once : '',
    }
    return (
        <>
            <div className={styles['tab-view-item-image-wrapper']}
                {...aosAttr}
            >

                <LazyImage placeHolder={placeHolderImageSrc}
                    src={mediumImagesSrc}
                    alt={mediumImagesSrc}
                    className={styles['tab-view-item-image']}
                    key={index}
                    onClick={toggleModel}
                />

            </div>
            
            {canShowModel && <ImageViewModel placeholder={mediumImagesSrc} src={originalImageSrc} onCancel={toggleModel} />}
        </>
    )
}


export class TabContentPhotos extends Component {
    constructor(props) {
        super(props)
        this.className = props.className;
        this.id = props.id;
        this.imageFolderName = props.imageFolderName;
        this.noOfImages = props.noOfImages;
        this.placeHolderImagesSrc = [];
        this.mediumImagesSrc = [];
        this.originalImagesSrc = []
        this.maxAosShowWidth = 801;

        this.state = {
            openModel: false,
            canShowAos: window.innerWidth < this.maxAosShowWidth
        }

        for (let i = 0; i < this.noOfImages; i++) {
            let name = i.toString();
            this.placeHolderImagesSrc.push(utils.getImageSrc(this.imageFolderName, name, 'jpg', 'small'));
            this.mediumImagesSrc.push(utils.getImageSrc(this.imageFolderName, name, 'jpg', 'medium'));
            this.originalImagesSrc.push(utils.getImageSrc(this.imageFolderName, name, 'jpg'))
        }

    }
    componentDidMount() {
       addTriggerEventToOnWindowChange(() => {
            this.setState({ canShowAos: window.innerWidth < this.maxAosShowWidth })
        })
    }
    render() {
        return (
            <div className={this.className} id={this.id}

            >
                {
                    this.mediumImagesSrc.map((mediumImagesSrc, index) => {
                        return (

                            <TabContentPhoto
                                data_aos={index % 2 === 0 ? 'fade-up-right' : 'fade-up-left'}
                                data_aos_once='false'
                                showAos={this.state.canShowAos}
                                key={index}
                                originalImageSrc={this.originalImagesSrc[index]}
                                mediumImagesSrc={mediumImagesSrc}
                                placeHolderImageSrc={this.placeHolderImagesSrc[index]}

                                index={index}
                            />
                        )
                    })
                }
            </div>
        )
    }
}


export default class Collections extends Component {

    renderPhotos = (className, id, imageFolderName, noOfImages, onClick) => {

        return (

            <TabContentPhotos key={id}
                className={className}
                id={id}
                imageFolderName={imageFolderName}
                noOfImages={noOfImages}

            />
        )
    }

    render() {
        return (
            <div className={styles['collections-page']}>
                <div className={styles['collections-heading']}>Collections</div>
                <div className={styles['tab-view']}>
                    <Tabview
                        tabHeadNamesArray={['Wedding', 'Candid', 'Editing', 'Event', 'Fashion']}
                        activeTabHeadTextColor={colors.primary}
                        inactiveTabHeadTextColo={colors.black}
                        sliderColor={colors.primary}
                        initialActiveTabIndex={0}
                        overFlowTabBar={true}
                        tabBarWidth={'100%'}
                        tabBarMobileViewWidth={'150%'}
                        renderTabContentArray={[
                            this.renderPhotos(styles['tab-view-item'], 'wedding-images', 'wedding', 5), // 'wedding-images' = id
                            this.renderPhotos(styles['tab-view-item'], 'candid-images', 'candid', 6), // 'candid-images' =id
                            this.renderPhotos(styles['tab-view-item'], 'editing', 'wedding', 5),
                            this.renderPhotos(styles['tab-view-item'], 'event-images', 'candid', 6),
                            this.renderPhotos(styles['tab-view-item'], 'fashion-images', 'wedding', 5)

                        ]}
                        key={2}


                    />
                </div>
            </div>
        )
    }
}
