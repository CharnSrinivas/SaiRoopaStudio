import React from 'react';
import styles from './Msgbox.module.css';

export default class Msgbox extends React.Component {
    constructor(props) {
        super(props);

        this.modelRef = React.createRef();
        this.cancelBtnRef = React.createRef();
        this.state={
            msgType :this.props.msgType,
            msgText:this.props.msgText,
        }

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
        if (this.state.msgType === 'success') {
            this.modelRef.current.removeAttribute('data-danger')
            this.modelRef.current.removeAttribute('data-warning')
            this.modelRef.current.setAttribute('data-success', '')
        }
        else if (this.state.msgType === 'warning') {
            this.modelRef.current.removeAttribute('data-success')
            this.modelRef.current.removeAttribute('data-danger')
            this.modelRef.current.setAttribute('data-warning', '')
        }
        else if (this.state.msgType === 'danger') {
            this.modelRef.current.removeAttribute('data-success')
            this.modelRef.current.removeAttribute('data-warning')
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
                <p className={styles['text']}>{this.state.msgText}</p>
                <span ref={this.cancelBtnRef} className={styles['cancel-btn']}></span>
            </div >
        )

    }
}