import React, { Component } from 'react'

import styles from './Contactpage.module.css'
import { addTriggerEventToOnWindowChange } from '../../Main';

export default class Contactpage extends Component {
    constructor(props) {
        super(props)
        this.messageSectonRef = React.createRef();
        this.messageTextInputRef = React.createRef();
        this.state={
            isMobile : window.innerWidth < 601 
        }
        addTriggerEventToOnWindowChange(()=>{this.setState({isMobile:window.innerWidth < 601 })})
    }
    componentDidMount() {
        // document.getElementById().getBoundingClientRect
    }
    leftBlock = () => {

        return (
            <div className={styles['left-block']}>
                <div className={styles['left-block-text']}>
                    <h1>Fell free to contact</h1>
                    <p>Fill  the form and message us we will get back to you. </p>
                </div>
                <div className={styles['contacts']}>
                    <div className={`${styles['phone']} ${styles['contacts-item']}`}>
                        <img alt='phone' className={styles['contacts-item-image']} src={require('../../assets/svgs/icons/phone_outline.svg').default} />
                        <p className={styles['contacts-item-text']}>+91 123456789</p>
                    </div>
                    <div className={`${styles['mail']} ${styles['contacts-item']}`}>
                        <img alt='mail' className={styles['contacts-item-image']} src={require('../../assets/svgs/icons/mail_outline.svg').default} />
                        <p className={styles['contacts-item-text']}>exaple@example.com</p>
                    </div>
                    <div className={`${styles['location']} ${styles['contacts-item']}`}>
                        <img alt='location' className={styles['contacts-item-image']} src={require('../../assets/svgs/icons/location_outline.svg').default} />
                        <p className={styles['contacts-item-text']}>102 Streen ,Thirupathi</p>
                    </div>
                </div>
                <img className={styles['left-block-svg']} alt='contact_illustration' src={require('../../assets/svgs/contact_illustration.svg').default} ></img>
            </div>
        )
    }

    rightBlock = () => {

        return (
            <div className={styles['right-block']}>
                <div className={styles['contact-card']}>
                    <img alt='img_illustration' className={styles['rocket-img']} src={require('../../assets/svgs/paper_rocket_illustration.svg').default}></img>


                    <form>

                        <div className={`${styles['name-section']} ${styles['card-section']}`}>
                            <p>your name</p>
                            <div className={styles['card-input-item']}>
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles['person-outline-svg']}>
                                    <path d="M18 4.275C20.61 4.275 22.725 6.39 22.725 9C22.725 11.61 20.61 13.725 18 13.725C15.39 13.725 13.275 11.61 13.275 9C13.275 6.39 15.39 4.275 18 4.275ZM18 24.525C24.6825 24.525 31.725 27.81 31.725 29.25V31.725H4.275V29.25C4.275 27.81 11.3175 24.525 18 24.525ZM18 0C13.0275 0 9 4.0275 9 9C9 13.9725 13.0275 18 18 18C22.9725 18 27 13.9725 27 9C27 4.0275 22.9725 0 18 0ZM18 20.25C11.9925 20.25 0 23.265 0 29.25V36H36V29.25C36 23.265 24.0075 20.25 18 20.25Z" fill="#868686" />
                                </svg>
                                <label htmlFor='name-input' className={`${styles['name-label']} ${styles['input-label']}`} />
                                <input id='name-input' type='name' placeholder='Name' />
                            </div>

                        </div>

                        <div className={`${styles['mail-section']} ${styles['card-section']}`}>
                            <p>E-Mail</p>
                            <div className={styles['card-inout-item']}>
                                <svg width="36" height="29" viewBox="0 0 36 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M32.4 0H3.6C1.62 0 0.018 1.62 0.018 3.6L0 25.2C0 27.18 1.62 28.8 3.6 28.8H32.4C34.38 28.8 36 27.18 36 25.2V3.6C36 1.62 34.38 0 32.4 0ZM32.4 25.2H3.6V7.2L18 16.2L32.4 7.2V25.2ZM18 12.6L3.6 3.6H32.4L18 12.6Z" fill="#868686" />
                                </svg>

                                <label htmlFor={'email'} className={`${styles['email-label']} ${styles['input-label']}`} />
                                <input type='email' id='email' placeholder='example@example.com' />
                            </div>

                        </div>


                        <div ref={this.messageSectonRef} className={`${styles['message-section']} ${styles['card-section']}`}>
                            <p>Message</p>
                            <div>
                                <textarea placeholder='Type your message to us' />
                            </div>

                        </div>

                        <div ref={this.messageTextInputRef} className={styles['upload-section']}>
                            <img alt='link' src={require('../../assets/svgs/icons/upload_outline.svg').default} />
                            <p>Upload image</p>
                        </div>
                        <div className={styles['submit-btn']}>Submit</div>
                    </form>


                </div>
            </div>
        )
    }


    desktoptView = () => {
        return (
            <>
                {this.leftBlock()}
                {this.rightBlock()}
            </>
        )
    }

    mobileBlock = () => {
        return (
            <>
                <div className={styles['left-block']}>
                    <div className={styles['left-block-text']}>
                        <h1>Fell free to contact</h1>
                        <p>Fill  the form and message us we will get back to you. </p>
                    </div>
                </div>
                {this.rightBlock()}
                <div className={styles['contacts']}>
                    <div className={`${styles['phone']} ${styles['contacts-item']}`}>
                        <img alt='phone' className={styles['contacts-item-image']} src={require('../../assets/svgs/icons/phone_outline.svg').default} />
                        <p className={styles['contacts-item-text']}>+91 123456789</p>
                    </div>
                    <div className={`${styles['mail']} ${styles['contacts-item']}`}>
                        <img alt='mail' className={styles['contacts-item-image']} src={require('../../assets/svgs/icons/mail_outline.svg').default} />
                        <p className={styles['contacts-item-text']}>exaple@example.com</p>
                    </div>
                    <div className={`${styles['location']} ${styles['contacts-item']}`}>
                        <img alt='location' className={styles['contacts-item-image']} src={require('../../assets/svgs/icons/location_outline.svg').default} />
                        <p className={styles['contacts-item-text']}>102 Streen ,Thirupathi</p>
                    </div>
                </div>
            </>
        )
    }

    render() {
        return (
            <div className={styles['contact-page']}>
                <div className={styles['contact-page-container']}>
                    {!this.state.isMobile && this.desktoptView()}
                    {this.state.isMobile && this.mobileBlock()}
                </div>
            </div>
        )
    }
}
