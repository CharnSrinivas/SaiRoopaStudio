
export function shuffelArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        let randIndex = Math.floor(Math.random() * (i))
        let temp = arr[i]
        arr[i] = arr[randIndex]
        arr[randIndex] = temp
    }

}

export function getImageSrc(fromFolder, imageName, extension, type) {
    
    if (!type) {
        
        return require(`../../src/assets/images/${fromFolder}/${imageName}.${extension}`).default;
    }
    return require(`../../src/assets/images/${fromFolder}/${imageName}_${type}.${extension}`).default


}