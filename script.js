
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

let userInput;
while (userInput < 1 || userInput === undefined || userInput > 100)
{
    userInput = prompt("What size would you like your grid to be?")
    if (userInput < 1 || userInput > 100) {
        alert("Please enter a number between 1 and 100.")
    }
    else {
        generateGrid(userInput);
        break;
    }
}