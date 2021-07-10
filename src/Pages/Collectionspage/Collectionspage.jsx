import React, { Component, useState } from 'react'

import Tabview from '../../Components/Tabview/Tabview'
import { primary, black } from '../../Constants/colors'
import { getImageSrc } from '../../utils/utils';
import LazyImage from '../../Components/LazyImage'
import ImageViewModel from '../../Components/Models/ImageViewModel/ImageViewModel';
import styles from './Collectionspage.module.css'

const TabContentPhoto = ({ originalImageSrc,mediumImagesSrc ,placeHolderImageSrc ,index}) => {

    const [openModel, setOpenModel] = useState(false)

    const toggleModel = () => {setOpenModel(true)    }
    return (
        <>
            <div className={styles['tab-view-item-image-wrapper']}>

                <LazyImage placeHolder={placeHolderImageSrc}
                    src={mediumImagesSrc}
                    alt={mediumImagesSrc}
                    className={styles['tab-view-item-image']}
                    key={index}
                    onClick={toggleModel}
                />
            </div>
            {openModel && <ImageViewModel placeholder={placeHolderImageSrc} src={originalImageSrc} onCancel={()=>setOpenModel(false)}/>}
        </>
    )
}


class TabContentPhotos extends Component {
    constructor(props) {
        super(props)
        this.className = props.className;
        this.id = props.id;
        this.imageFolderName = props.imageFolderName;
        this.noOfImages = props.noOfImages;
        this.placeHolderImagesSrc = [];
        this.mediumImagesSrc = [];
        this.originalImagesSrc=[]
        this.state = {
            openModel: false
        }

        for (let i = 0; i < this.noOfImages; i++) {
            let name = i.toString();
            this.placeHolderImagesSrc.push(getImageSrc(this.imageFolderName, name, 'jpg', 'small'));
            this.mediumImagesSrc.push(getImageSrc(this.imageFolderName, name, 'jpg', 'medium'));
            this.originalImagesSrc.push(getImageSrc(this.imageFolderName,name,'jpg'))
        }

    }


    render() {
        return (
            <div className={this.className} id={this.id} >
                {
                    this.mediumImagesSrc.map((mediumImagesSrc, index) => {
                        return (
                            <TabContentPhoto
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
                        activeTabHeadTextColor={primary}
                        inactiveTabHeadTextColo={black}
                        sliderColor={primary}
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

                    />
                </div>
            </div>
        )
    }
}
