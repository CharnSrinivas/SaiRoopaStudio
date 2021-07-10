import React from 'react'
import LazyImage from '../../LazyImage'
import styles from './ImageViewModel.module.css'

export default function ImageViewModel({ placeholder, src, key, onCancel }) {
    return (
        <div className={styles['model-bg']}>
            <div 
            className={styles['cancel-btn']}onClick={onCancel}>
            </div>
            <div className={styles['model']}>

                <LazyImage className={styles['model-image']} alt={src} placeHolder={placeholder} src={src} key={key} />
            </div>
        </div>
    )
}
