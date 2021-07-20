import React from 'react';
import styles from './Msgbox.module.css';

export default class Msgbox extends React.Component {
    constructor(props) {
        super(props);

        this.modelRef = React.createRef();
        this.cancelBtnRef = React.createRef();

    }
    closeModel = () => {
        this.modelRef.current.removeAttribute('data-open')
        this.modelRef.current.setAttribute('data-close', '')
    }
    openModel = () => {
        this.modelRef.current.removeAttribute('data-close')
        this.modelRef.current.setAttribute('data-open', '')
    }

    componentDidMount() {
        // document.getElementById().removeAttribute
        if (this.props.msgType === 'success') {
            this.modelRef.current.removeAttribute('data-danger')
            this.modelRef.current.setAttribute('data-success', '')
        }
        else if (this.props.msgType === 'danger') {
            this.modelRef.current.removeAttribute('data-success')
            this.modelRef.current.setAttribute('data-danger', '')
        }
        this.openModel();
        this.cancelBtnRef.current.onclick = () => {
            this.closeModel();
            if (this.props.onClose)
                setTimeout(() => this.props.onClose(), 1000)

        }
        if (this.props.timeOutToClose) {
            setTimeout(() => {
                this.closeModel()
                if (this.props.onClose)
                    setTimeout(() => this.props.onClose(), 1000)

            }, this.props.timeOutToClose)
        }
    }

    render() {
        return (
            <div ref={this.modelRef} className={styles['model']} >
                <p className={styles['text']}>{this.props.msgText}</p>
                <span ref={this.cancelBtnRef} className={styles['cancel-btn']}></span>
            </div >
        )

    }
}