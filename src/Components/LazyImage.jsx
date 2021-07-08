import React, { useState } from 'react';

const LazyImage = ({ className, src, placeHolder, alt }) => {
    const [currentImg, setCurrentImg] = useState(placeHolder);
    React.useEffect(() => {
        setOriginalImage()

    });

    const setOriginalImage = () => {
        let originalImg = new Image();
        originalImg.onload = () => setCurrentImg(src);
        originalImg.src = src;
    }


    return (
        <img className={className} src={currentImg} alt={alt} loading='lazy'></img>
    )

}

 export default LazyImage;

 // ? Clas Component functionaly as above function
/*export default class LazyImage extends React.Component {
    constructor(props) {
        super(props)
        this.className = props.className;
        this.src = props.src;
        this.placeHolder = props.placeHolder;
        this.alt = props.alt;
        this.state = {
            currentImg: this.props.placeHolder,
        }
    }
    componentDidMount() {
        this.setOriginalImage()
    }

    setOriginalImage = () => {
        let originalImg = new Image();
        originalImg.onload = () => this.setState({currentImg:this.src});
        originalImg.src = this.src;
    }
    render() {
        return (
            <img className={this.className} src={this.state.currentImg} alt={this.alt} loading='lazy'></img>
        )
    }
}
*/