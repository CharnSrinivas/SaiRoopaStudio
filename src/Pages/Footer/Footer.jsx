import React from 'react'
import styles from './Footer.module.css'
// ✍️  📄
export default function Footer() {
    return (
        <footer className={styles['footer']}>
            <div className={styles['container']}>
                <p>Copyright ©️ 2021 Sai Roopa Studio.</p>
                <p>✍️ Written and verified by Sai Roopa Studio.</p>
            </div>
        </footer>
    )
}
