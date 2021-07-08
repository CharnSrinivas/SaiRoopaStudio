import React, { Component } from 'react'
import Tabview from '../../Components/Tabview/Tabview'
import {primary} from '../../Constants/colors'
import './Collectionspage.css'

export default class Collections extends Component {
    render() {
        return (
            <div className='collections-page'>
                <div className='collections-heading'>Collections</div>
                <div className='tab-view'>
                <Tabview
                 tabHeadNamesArray={['Wedding','Editing','Event','Fashion','Candid']}
                 activeTabHeadTextColor={primary}
                 sliderColor={primary}
                 
                />
                </div>
                
            </div>
        )
    }
}
