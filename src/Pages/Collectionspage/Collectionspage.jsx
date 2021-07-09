import React, { Component } from 'react'
import Tabview from '../../Components/Tabview/Tabview'
import { primary } from '../../Constants/colors'
import styles from './Collectionspage.module.css'

export default class Collections extends Component {
    render() {
        return (
            <div className={styles['collections-page']}>
                <div className={styles['collections-heading']}>Collections</div>
                <div className={styles['tab-view']}>
                    <Tabview
                        tabHeadNamesArray={['Wedding', 'Editing', 'Event', 'Fashion', 'Candid']}
                        activeTabHeadTextColor={primary}
                        sliderColor={primary}
                        initialActiveTabIndex={2}

                    />
                </div>

            </div>
        )
    }
}
