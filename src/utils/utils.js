export function shuffelArray(arr)
{   
    for(let i=0 ; i<arr.length;i++)
    {
        let randIndex = Math.floor(Math.random()*(i))
        let temp = arr[i]
        arr[i] =  arr[randIndex]
        arr[randIndex] =temp
    }
    
}

export function getBackgroundImageSrc(imageName,extension,original)
{   let src=null;
    original ? src = require(`../../src/assets/images/backgrounds/${imageName}.${extension}`).default :  src = require(`../../src/assets/images/backgrounds/${imageName}_small.${extension}`).default;
    return src;
}
