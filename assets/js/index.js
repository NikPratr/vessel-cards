// --------------------------------
// Variables
// --------------------------------

const inputs = document.getElementsByTagName('input');

// div to simulate blur on click elsewhere in the document
const clickaway = document.getElementById('clickaway');

const safe = [
    'Tab',
    'Backspace',
    'Shift',
    'ArrowLeft',
    'ArrowRight',
    'ArrowUp',
    'ArrowDown'
];

const zero = /[0-9]|Backspace/;
const one = /[1-9]|Backspace/;

// let importantValues = [0, 0, 0, 0, 0, 0, 0];

// --------------------------------
// Event Listeners
// --------------------------------

document.addEventListener('keyup', (event) => {
    if ((event.key === 'Enter') && document.activeElement.nodeName === 'INPUT') {
        nextFocus();
        removeList();
    };

    // jank?
    if (event.key === 'Tab') {
        removeList();
    };
});

// --------------------------------
// Functions
// --------------------------------

function nextFocus() {
    for (let i=0; i<inputs.length; i++) {
        if (inputs[i] === document.activeElement) {
            if (i + 1 < inputs.length) {
                inputs[i + 1].focus();
            }
            break;
        }
    }
};

function validateStats1(event) {
    if (this.value.length === 0) {
        if (!one.test(event.key) && safe.indexOf(event.key) === -1) {
            event.preventDefault();
        } 
    } else if (this.value.length < 2) {
        if (!zero.test(event.key) && safe.indexOf(event.key) === -1) {
            event.preventDefault();
        }
    } else if (this.value.length >= 2) {
        if (window.getSelection().toString() !== this.value && safe.indexOf(event.key) === -1) {
            event.preventDefault();
        } else if (window.getSelection().toString() === this.value && !one.test(event.key) && safe.indexOf(event.key) === -1) {
            event.preventDefault();
        }
    }
};

function validateStats2(event) {
    if (this.value.length >= 2 && safe.indexOf(event.key) === -1 && zero.test(event.key)) {
        nextFocus();
    }
};

function updateColor(div, color) {
    div.style.color = color;
}