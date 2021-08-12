import React, { Component } from 'react'

import { addTriggerEventToOnWindowChange } from '../../Main';
import Msgbox from '../../Components/Models/Msgbox/Msgbox';
import styles from './Contactpage.module.css';
import { validEmail, validName } from '../../utils/utils';
import {phNo,address,email} from '../../Constants/consts'
export default class Contactpage extends Component {

    constructor(props) {
        super(props)

        this.nameInputRef = React.createRef();
        this.mailInputRef = React.createRef();
        this.messageInputRef = React.createRef();
        this.imageInputRef = React.createRef();
        this.phoneInputRef = React.createRef();
        this.submitBtnSpinnerRef = React.createRef();

        this.msgBoxCloseTimeout = 1000 * 5;  //* close message box after 5 secs
        this.maxMobileWidth = 901;
        this.state =
        {
            isMobile: window.innerWidth < this.maxMobileWidth,
            showMsgBox: false,
            msgBoxText: '',
            msgBoxType: '',
            userEmail: '', name: '', message: '', isValidEmail: false, isValidName: false,
        };
    }

    showMsgBox = (boxType, msg) => {
        if (!msg) {
            if (boxType === 'success') {
                this.setState({ msgBoxText: 'Successfully message sent. We will get back to you soon. ' })
            } else if (boxType === 'danger') {
                this.setState({ msgBoxText: 'Oops something went wrong, Unable to send message !' });
            }
        } else {
            this.setState({ msgBoxText: msg });
        }
        this.setState({

            msgBoxType: boxType,
            showMsgBox: true
        })
    }
    validateEmail = (event) => {
        let value = event.target.value;
        this.setState({ 'isValidEmail': validEmail(value), 'userEmail': value })

    }
    validName = (event) => {
        let value = event.target.value;
        this.setState({})
        this.setState({ 'isValidName': validName(value), 'name': value })
    }

    Submit = () => {

        try {

            if (!this.state.isValidEmail)
                this.showMsgBox('warning', "Invalid email address, Please check again!")
            else if (!this.state.isValidName) {
                this.showMsgBox('warning', "No of characters in name should be greater than 5")
            }
            else {
                this.submitBtnSpinnerRef.current.style.display = 'block'

                let userName = this.state.name === '' ? null : this.state.name;
                let userMail = this.state.userEmail === '' ? null : this.state.userEmail;
                let message = this.state.message === '' ? null : this.state.message;
                let fromMail = process.env['REACT_APP_EMAIL'];
                let appPassword = process.env['REACT_APP_EMAIL_APP_PASSWORD'];
                let mailApiUrl = process.env['REACT_APP_API_ROOT_MAIL_SEND_URL'];
                // let mailApiUrl = ' http://127.0.0.1:8000/srstudio/mail/send'
                let imgFile = this.imageInputRef.current.files[0];
                let img_name = null;
                let img_type = null;
                let base64Img = null;
                const reader = new FileReader();

                let data = {
                    email: fromMail,
                    appPwd: appPassword,
                    name: userName,
                    user_mail: userMail,
                    subject: "Message From " + userName,
                    message: message,
                    base64_img: base64Img,
                    img_type: img_type,
                    img_name: img_name,
                }

                // ? -------- If image is selected  ---------

                if (imgFile != null && imgFile !== undefined) {
                    data.img_name = imgFile.name

                    reader.readAsDataURL(imgFile)
                    reader.onload = () => {
                        try {
                            data.base64_img = reader.result.split(',')[1];
                            data.img_type = ((reader.result).split(';')[0]).split('/')[1];
                            fetch(mailApiUrl, { method: 'POST', body: JSON.stringify(data) })
                                .then((res) => {
                                    if (res.status === 200) { this.showMsgBox('success'); }
                                    else if(res.status===500){this.showMsgBox('warning',"Invalid email address,try again!")}
                                     else { this.showMsgBox('danger'); }
                                    
                                    this.submitBtnSpinnerRef.current.style.display = 'none'
                                })
                                .catch(err => {
                                    this.showMsgBox('danger');
                                    this.submitBtnSpinnerRef.current.style.display = 'none';
                                })

                        } catch (error) {
                            this.showMsgBox('danger');
                            this.submitBtnSpinnerRef.current.style.display = 'none'
                        }

                    }
                }
                // ? ------------- No Image ------------
                else {
                    imgFile = null;
                    fetch(mailApiUrl, {
                        method: 'POST',
                        body: JSON.stringify(data)
                    })
                        
                        .then((res) => {

                            if (res.status === 200) { this.showMsgBox('success'); }
                            else if(res.status===500){this.showMsgBox('warning',"Invalid email address,try again!")}
                             else { this.showMsgBox('danger'); }
                            this.submitBtnSpinnerRef.current.style.display = 'none'
                        })
                        .catch((err) => {
                            this.showMsgBox('danger');
                            this.submitBtnSpinnerRef.current.style.display = 'none'
                        })
                }
            }
        } catch (error) {
            this.submitBtnSpinnerRef.current.style.display = 'none'
        }

    }

    componentDidMount() {

        addTriggerEventToOnWindowChange(() => { this.setState({ isMobile: window.innerWidth < this.maxMobileWidth }) })
    }
    leftBlock = () => {

        return (
            <div className={styles['left-block']}>
                <div className={styles['left-block-text']}>
                    <h1>Fell free to contact</h1>
                    <p>Give us a call or send us an email with any questions.We will get back to you. </p>
                </div>
                <div className={styles['contacts']}>
                    <div className={`${styles['phone']} ${styles['contacts-item']}`}>
                        <img alt='phone' className={styles['contacts-item-image']} src={require('../../assets/svgs/icons/phone_outline.svg').default} />
                        <p className={styles['contacts-item-text']}>{phNo}</p>
                    </div>
                    <div className={`${styles['mail']} ${styles['contacts-item']}`}>
                        <img alt='mail' className={styles['contacts-item-image']} src={require('../../assets/svgs/icons/mail_outline.svg').default} />
                        <p className={styles['contacts-item-text']}>{email}</p>
                    </div>
                    <div className={`${styles['location']} ${styles['contacts-item']}`}>
                        <img alt='location' className={styles['contacts-item-image']} src={require('../../assets/svgs/icons/location_outline.svg').default} />
                        <p className={styles['contacts-item-text']}>{address}</p>
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

                    <p className={styles['card-heading']}>Message us!</p>
                    <form id='contact-card-form'  >

                        <div className={`${styles['name-section']} ${styles['card-section']}`}>
                            <p>Your name</p>
                            <div className={styles['card-input-item']}>
                                <input ref={this.nameInputRef} id='name-input' onKeyUp={this.validName} type={"name"} placeholder='Name' />
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles['person-outline-svg']} >
                                    <path d="M18 4.275C20.61 4.275 22.725 6.39 22.725 9C22.725 11.61 20.61 13.725 18 13.725C15.39 13.725 13.275 11.61 13.275 9C13.275 6.39 15.39 4.275 18 4.275ZM18 24.525C24.6825 24.525 31.725 27.81 31.725 29.25V31.725H4.275V29.25C4.275 27.81 11.3175 24.525 18 24.525ZM18 0C13.0275 0 9 4.0275 9 9C9 13.9725 13.0275 18 18 18C22.9725 18 27 13.9725 27 9C27 4.0275 22.9725 0 18 0ZM18 20.25C11.9925 20.25 0 23.265 0 29.25V36H36V29.25C36 23.265 24.0075 20.25 18 20.25Z" fill="#868686" />
                                </svg>
                                <span className={styles['name-underline-focus']} />
                                <span className={styles['name-underline']} />

                            </div>

                        </div>
 

                        <div className={`${styles['mail-section']} ${styles['card-section']}`}>
                            <p>E-Mail</p>
                            <div className={styles['card-input-item']}>
                                <input ref={this.mailInputRef} type='email' onKeyUp={this.validateEmail} id='email' placeholder='example@example.com' />
                                <svg width="36" height="29" viewBox="0 0 36 29" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles['mail-outline-svg']}>
                                    <path d="M32.4 0H3.6C1.62 0 0.018 1.62 0.018 3.6L0 25.2C0 27.18 1.62 28.8 3.6 28.8H32.4C34.38 28.8 36 27.18 36 25.2V3.6C36 1.62 34.38 0 32.4 0ZM32.4 25.2H3.6V7.2L18 16.2L32.4 7.2V25.2ZM18 12.6L3.6 3.6H32.4L18 12.6Z" fill="#868686" />
                                </svg>

                                <span className={styles['mail-underline-focus']} />
                                <span className={styles['mail-underline']} />

                            </div>

                        </div>



                        <div className={`${styles['message-section']} ${styles['card-section']}`}>
                            <p>Message</p>
                            <div>
                                <textarea ref={this.messageTextInputRef} onKeyUp={(event) => { this.setState({ 'message': event.target.value }) }} placeholder='Type your message to us' spellCheck='true' />
                            </div>

                        </div>

                        <>
                            <input ref={this.imageInputRef} type='file' accept='image/*' id='upload-img' style={{ display: 'none' }} />
                            <label htmlFor='upload-img' className={styles['upload-section']}>
                                <img alt='link' src={require('../../assets/svgs/icons/upload_outline.svg').default} />
                                <p>Upload image</p>
                            </label>
                        </>
                        <div onClick={this.Submit} className={styles['submit-btn']}>
                            <span className={styles['submit-btn-text']} >Submit</span>
                            <span ref={this.submitBtnSpinnerRef} className={styles['submit-btn-spinner']}></span>
                        </div>
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

    /*mobileView = () => {
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
    }*/

    render() {
        return (
            <div className={styles['contact-page']}>
                {
                    this.state.showMsgBox &&
                    <Msgbox msgText={this.state.msgBoxText}
                        msgType={this.state.msgBoxType}
                        onClose={() => { this.setState({ showMsgBox: false }) }}
                        timeOutToClose={this.msgBoxCloseTimeout}
                    />
                }
                <div className={styles['contact-page-container']}>
                    {this.desktoptView()}
                    {/* {this.state.isMobile && this.mobileView()} */}
                </div>
            </div>
        )
    }
}
