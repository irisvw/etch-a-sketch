
function generateGrid(size) {
    for (i = 1; i <= (size*size); i++) {
        newPixelDimension = 100/size;
        newPixel = document.createElement('div');
        newPixel.setAttribute('id', ('div' + i));
        newPixel.setAttribute('style', ('div' + i));
        newPixel.setAttribute('style', `height: ${newPixelDimension}%; width: ${newPixelDimension}%`);
        container.appendChild(newPixel);
    }
}

generateGrid(32);