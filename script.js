generateGrid(16); // Starting grid

let rainbowMode = false;
let shadingMode = false;

// Functions
function generateGrid(size) {
    for (i = 1; i <= (size * size); i++) {
        newPixelDimension = 100 / size;
        newPixel = document.createElement('div');
        newPixel.setAttribute('id', ('div' + i));
        newPixel.setAttribute('style', `height: ${newPixelDimension}%; width: ${newPixelDimension}%; filter: brightness(1.0)`);
        container.appendChild(newPixel);
    }
}

function promptUser() {
    let userInput;
    while (userInput < 1 || userInput === undefined || userInput > 100 || isNaN(userInput)) {
        userInput = prompt("What size would you like your grid to be?")
        if (userInput == null) {
            break;
        }
        else if (userInput < 1 || userInput > 100 || isNaN(userInput)) {
            alert("Please enter a number between 1 and 100.");
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
    if (targetedPixel !== field) {
        if (rainbowMode) {
            let randomColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
            targetedPixel.style.backgroundColor = randomColor;
        } else if (shadingMode) {
            let currentBrightness = targetedPixel.style.filter;
            let newBrightness = (Number.parseFloat(currentBrightness.substring(11, 14))) - 0.1;
            console.log('brightness(' + newBrightness + ');')
            targetedPixel.style.filter = 'brightness(' + newBrightness + ')'
        } else {
            targetedPixel.style.backgroundColor = 'rgb(27, 27, 27)';
        }
    };
})

// Buttons
const rainbowButton = document.querySelector("#rainbowButton");
rainbowButton.addEventListener("click", () => {
    if (rainbowMode) {
        rainbowMode = false;
        rainbowButton.className = "";
    } else {
        rainbowMode = true;
        rainbowButton.className += "activatedButton";
        shadingMode = false;
        shadyButton.className = "";

    }
})

const shadyButton = document.querySelector("#shadyButton");
shadyButton.addEventListener("click", () => {
    if (shadingMode) {
        shadingMode = false;
        shadyButton.className = "";
    } else {
        rainbowMode = false;
        rainbowButton.className = "";
        shadingMode = true;
        shadyButton.className += "activatedButton";
    }
})

const newGridButton = document.querySelector("#newGridButton");
newGridButton.addEventListener("click", () => {
    promptUser();
})