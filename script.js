generateGrid(16); // Starting grid

let rainbowMode = false;
let shadingMode = false;

// Functions
function generateGrid(size) {
    for (i = 1; i <= (size * size); i++) {
        newPixelDimension = 100 / size;
        newPixel = document.createElement('div');
        newPixel.setAttribute('id', ('div' + i));
        newPixel.setAttribute('style', `height: ${newPixelDimension}%; width: ${newPixelDimension}%`);
        container.appendChild(newPixel);
    }
}

function promptUser() {
    let userInput;
    while (userInput < 1 || userInput === undefined || userInput > 100) {
        userInput = prompt("What size would you like your grid to be?")
        if (userInput < 1 || userInput > 100) {
            alert("Please enter a number between 1 and 100.")
        }
        else {
            container.innerHTML = "";
            generateGrid(userInput);
            break;
        }
    }
}

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

// Sketching
let field = document.querySelector('#container');
field.addEventListener('mouseover', (event) => {
    targetedPixel = event.target;
    if (rainbowMode) {
        let randomColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
        targetedPixel.style.backgroundColor = randomColor;
    } else if (shadingMode) {
        targetedPixel.style.backgroundColor = 'rgb(100, 100, 100)';
    } else {
        targetedPixel.style.backgroundColor = 'rgb(27, 27, 27)';
    }
})

// Buttons
const rainbowButton = document.querySelector("#rainbowButton");
rainbowButton.addEventListener("click", () => {
    if (rainbowMode) {
        rainbowMode = false;
    } else {
        rainbowMode = true;
        shadingMode = false;
    }
})

const shadyButton = document.querySelector("#shadyButton");
shadyButton.addEventListener("click", () => {
    if (shadingMode) {
        shadingMode = false;
    } else {
        rainbowMode = false;
        shadingMode = true;
    }
})

const newGridButton = document.querySelector("#newGridButton");
newGridButton.addEventListener("click", () => {
    promptUser();
})