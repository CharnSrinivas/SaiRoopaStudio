import React, {  useState } from 'react';

const LazyImage = ( { className, src,placeHolder ,alt }) => {
    const [currentImg ,setCurrentImg] = useState(placeHolder);
    React.useEffect(() => {
        setOriginalImage()
    });
    
    const setOriginalImage =  ()=>{
        let originalImg =  new Image();
            originalImg.onload=()=> setCurrentImg(src);
            originalImg.src = src;
    }
    const loadOriginalImage = ()=>{
        return new Promise((resolve,reject)=>{
            let originalImg =  new Image();
            originalImg.onload=()=> resolve(this);
            originalImg.src = src;
        })
    }

    return (
        <img className={className} src={currentImg} alt={alt} loading='lazy'></img>
    )

}


export default LazyImage;