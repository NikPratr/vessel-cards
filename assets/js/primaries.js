// --------------------------------
// Variables
// --------------------------------

// TODO: Change primary chart maximum when switching between charts

const primariesRow = document.getElementById('primaries-row');
const barHolder = document.getElementById('bar-holder');
const bar = document.getElementById('bar');
const primariesInputs = document.getElementById('bar-inputs');

const vitCap = document.getElementById('vit-cap');
const vitReg = document.getElementById('vit-reg');
const vitPtc = document.getElementById('vit-ptc');
const bStr = document.getElementById('bStr');
const vitLegBox = document.getElementById('vit-checkbox');
const vitLegMark = document.getElementById('vit-checkmark');
const vitLegText = document.getElementById('vit-leg-container');

const natCap = document.getElementById('nat-cap');
const natReg = document.getElementById('nat-reg');
const natPtc = document.getElementById('nat-ptc');
const natLnk = document.getElementById('nat-lnk');
const natLegBox = document.getElementById('nat-checkbox');
const natLegMark = document.getElementById('nat-checkmark');
const natLegText = document.getElementById('nat-leg-container');

const astCap = document.getElementById('ast-cap');
const astReg = document.getElementById('ast-reg');
const astPtc = document.getElementById('ast-ptc');
const astLnk = document.getElementById('ast-lnk');
const astLegBox = document.getElementById('ast-checkbox');
const astLegMark = document.getElementById('ast-checkmark');
const astLegText = document.getElementById('ast-leg-container');

const voidCap = document.getElementById('void-cap');
const voidReg = document.getElementById('void-reg');
const voidPtc = document.getElementById('void-ptc');
const voidLnk = document.getElementById('void-lnk');
const voidLegBox = document.getElementById('void-checkbox');
const voidLegMark = document.getElementById('void-checkmark');
const voidLegText = document.getElementById('void-leg-container');

const vitDisplay = document.getElementById('vital');
const natDisplay = document.getElementById('nature');
const astDisplay = document.getElementById('astral');
const voidDisplay = document.getElementById('void');

const legendary = document.getElementsByClassName('legendary-container');

const pb1 = document.getElementById('primaries-block-1');
const pb2 = document.getElementById('primaries-block-2');
const pb3 = document.getElementById('primaries-block-3');

let barMin = 0;
let barMax = 33;
let barStep = 11;

const primaries = [
    vitCap,
    vitReg,
    vitPtc,
    bStr, 
    natCap,
    natReg,
    natPtc,
    natLnk,
    astCap,
    astReg,
    astPtc,
    astLnk,
    voidCap,
    voidReg,
    voidPtc,
    voidLnk
];

const displays = [vitDisplay, natDisplay, astDisplay, voidDisplay];
let currentDisplay = 'vital';
let currentPrimaries = [vitCap, vitReg, vitPtc, bStr];
let primeOnes = [vitCap, natCap, astCap, voidCap];
let primeTwos = [vitReg, natReg, astReg, voidReg];

// Declaratives
vitDisplay.style.display = 'flex';

// --------------------------------
// Event Listeners
// --------------------------------

barHolder.addEventListener('click', () => {
    barHolder.style.display = 'none';
    primariesInputs.style.display = 'flex';
});

primariesInputs.addEventListener('click', event => {
    if (event.target === primariesInputs) {
        barHolder.style.display = 'block';
        primariesInputs.style.display = 'none';

        if (currentDisplay === 'vital') {
            for (let i = 0; i < 4; i++) {
                barGraph.data.datasets[0].data[i] = vitDisplay.children[i].lastElementChild.value;
            }
        } else if (currentDisplay === 'nature') {
            for (let i = 0; i < 4; i++) {
                barGraph.data.datasets[0].data[i] = natDisplay.children[i].lastElementChild.value;
            }
        } else if (currentDisplay === 'astral') {
            for (let i = 0; i < 4; i++) {
                barGraph.data.datasets[0].data[i] = astDisplay.children[i].lastElementChild.value;
            }
        }  else if (currentDisplay === 'void') {
            for (let i = 0; i < 4; i++) {
                barGraph.data.datasets[0].data[i] = voidDisplay.children[i].lastElementChild.value;
            }
        }
        barGraph.update();

        updateBarMax();
    } else { return }
});

primariesRow.addEventListener('click', event => {
    let vaporOrder = ['Vital Vapor', 'Nature Vapor', 'Astral Vapor', 'Void Vapor'];
    let index = vaporOrder.indexOf(event.target.textContent);

    let clicked = event.target.textContent.toLowerCase().split(' ', 1).toString();

    vaporOrder.splice(index, 1);

    barGraph.data.datasets[0].label = event.target.textContent + ' Primaries';
    pb1.textContent = vaporOrder[0];
    pb2.textContent = vaporOrder[1];
    pb3.textContent = vaporOrder[2];


    for (let i = 0; i < displays.length; i++) {
        displays[i].style.display = 'none';
    }

    if (clicked === 'vital') {
        vitDisplay.style.display = 'flex';
        setDisplay('vital');

        barGraph.data.datasets[0].borderColor = 'rgba(40, 40, 160, 1)';
        barGraph.data.datasets[0].backgroundColor = 'rgba(40, 40, 160, 0.4)';
        for (let i = 0; i < 4; i++) {
            barGraph.data.datasets[0].data[i] = currentPrimaries[i].value;
        }
    } else if (clicked === 'nature') {
        natDisplay.style.display = 'flex';
        setDisplay('nature');

        barGraph.data.datasets[0].borderColor = 'rgba(40, 160, 40, 1)';
        barGraph.data.datasets[0].backgroundColor = 'rgba(40, 160, 40, 0.4)';
        for (let i = 0; i < 4; i++) {
            barGraph.data.datasets[0].data[i] = currentPrimaries[i].value;
        }
    } else if (clicked === 'astral') {
        astDisplay.style.display = 'flex';
        setDisplay('astral');

        barGraph.data.datasets[0].borderColor = 'rgba(150, 150, 150, 1)';
        barGraph.data.datasets[0].backgroundColor = 'rgba(150, 150, 150, 0.4)';
        for (let i = 0; i < 4; i++) {
            barGraph.data.datasets[0].data[i] = currentPrimaries[i].value;
        }
    } else if (clicked === 'void') {
        voidDisplay.style.display = 'flex';
        setDisplay('void');

        barGraph.data.datasets[0].borderColor = 'rgba(25, 25, 25, 1)';
        barGraph.data.datasets[0].backgroundColor = 'rgba(25, 25, 25, 0.4)';
        for (let i = 0; i < 4; i++) {
            barGraph.data.datasets[0].data[i] = currentPrimaries[i].value;
        }
    }

    barGraph.update();
});

for (let i = 0; i < primaries.length; i++) {
    primaries[i].addEventListener('keydown', validateStats1);
    primaries[i].addEventListener('keyup', validateStats2);
};

for (let i = 0; i < 4; i++) {
    primeOnes[i].addEventListener('input', () => {
        importantValues[5] = primeOnes[i].value;
        checkLegendaryEligability();
    });
    primeTwos[i].addEventListener('input', () => {
        importantValues[6] = primeTwos[i].value;
        checkLegendaryEligability();
    });
};

// --------------------------------
// Functions
// --------------------------------

document.addEventListener('click', checkLegendaryEligability);

function setDisplay(display) {
    if(display === 'vital') {
        currentDisplay = 'vital';

        currentPrimaries = [vitCap, vitReg, vitPtc, bStr];
    } else if(display === 'nature') {
        currentDisplay = 'nature';

        currentPrimaries = [natCap, natReg, natPtc, natLnk];
        importantValues[5] = currentPrimaries[0].value;
        importantValues[6] = currentPrimaries[1].value;
    } else if(display === 'astral') {
        currentDisplay = 'astral';

        currentPrimaries = [astCap, astReg, astPtc, astLnk];
        importantValues[5] = currentPrimaries[0].value;
        importantValues[6] = currentPrimaries[1].value;
    } else {
        currentDisplay = 'void';

        currentPrimaries = [voidCap, voidReg, voidPtc, voidLnk];
        importantValues[5] = currentPrimaries[0].value;
        importantValues[6] = currentPrimaries[1].value;
    }

    currentPrimaries[0].value === '' ? importantValues[5] = 0 : importantValues[5] = currentPrimaries[0].value;
    currentPrimaries[1].value === '' ? importantValues[6] = 0 : importantValues[6] = currentPrimaries[1].value;
};

function preventCheck(event) {
    event.preventDefault();
    event.stopPropagation();
};

function checkLegendaryEligability() {
    if(currentDisplay === 'vital') {
        if(Math.min(...importantValues) < 50) {
            vitLegText.style.color = 'gray';
            vitLegText.style.textDecoration = 'line-through';
            vitLegMark.style.pointerEvents = 'none';
            vitLegBox.addEventListener('click', preventCheck);
    
            if (vitLegBox.checked === true) {
                vitLegMark.style.backgroundColor = 'gray';
                vitLegMark.style.opacity = '0.4';
            }
        } else {
            vitLegText.style.color = 'black';
            vitLegText.style.textDecoration = 'none';
            vitLegMark.style.pointerEvents = 'auto';
            vitLegBox.removeEventListener('click', preventCheck);
    
            if (vitLegBox.checked === true) {
                vitLegMark.style.backgroundColor = 'rgba(40, 40, 160, 1)';
                vitLegMark.style.opacity = '1';
            } else { vitLegMark.style.backgroundColor = 'transparent'; }
        }
    } else if(currentDisplay === 'nature') {
        if(Math.min(...importantValues) < 50) {
            natLegText.style.color = 'gray';
            natLegText.style.textDecoration = 'line-through';
            natLegMark.style.pointerEvents = 'none';
            natLegBox.addEventListener('click', preventCheck);
    
            if (natLegBox.checked === true) {
                natLegMark.style.backgroundColor = 'gray';
                natLegMark.style.opacity = '0.4';
            }
        } else {
            natLegText.style.color = 'black';
            natLegText.style.textDecoration = 'none';
            natLegMark.style.pointerEvents = 'auto';
            natLegBox.removeEventListener('click', preventCheck);
    
            if (natLegBox.checked === true) {
                natLegMark.style.backgroundColor = 'rgba(40, 160, 40, 1)';
                natLegMark.style.opacity = '1';
            } else { natLegMark.style.backgroundColor = 'transparent'; }
        }
    } else if(currentDisplay === 'astral') {
        if(Math.min(...importantValues) < 50) {
            astLegText.style.color = 'gray';
            astLegText.style.textDecoration = 'line-through';
            astLegMark.style.pointerEvents = 'none';
            astLegBox.addEventListener('click', preventCheck);
    
            if (astLegBox.checked === true) {
                astLegMark.style.backgroundColor = 'gray';
                astLegMark.style.opacity = '0.4';
            }
        } else {
            astLegText.style.color = 'black';
            astLegText.style.textDecoration = 'none';
            astLegMark.style.pointerEvents = 'auto';
            astLegBox.removeEventListener('click', preventCheck);
    
            if (astLegBox.checked === true) {
                astLegMark.style.backgroundColor = 'rgba(150, 150, 150, 1)';
                astLegMark.style.opacity = '1';
            } else { astLegMark.style.backgroundColor = 'transparent'; }
        }
    } else if(currentDisplay === 'void') {
        if(Math.min(...importantValues) < 50) {
            voidLegText.style.color = 'gray';
            voidLegText.style.textDecoration = 'line-through';
            voidLegMark.style.pointerEvents = 'none';
            voidLegBox.addEventListener('click', preventCheck);
    
            if (voidLegBox.checked === true) {
                voidLegMark.style.backgroundColor = 'gray';
                voidLegMark.style.opacity = '0.4';
            }
        } else {
            voidLegText.style.color = 'black';
            voidLegText.style.textDecoration = 'none';
            voidLegMark.style.pointerEvents = 'auto';
            voidLegBox.removeEventListener('click', preventCheck);
    
            if (voidLegBox.checked === true) {
                voidLegMark.style.backgroundColor = 'rgba(25, 25, 25, 1)';
                voidLegMark.style.opacity = '1';
            }  else { voidLegMark.style.backgroundColor = 'transparent'; }
        }
    }
};

function updateBarMax() {
    let barData = barGraph.data.datasets[0].data;
    
    if(Math.max(barData[0], barData[1], barData[2], barData[3]) > 33) {
        barMax = 99;
        barGraph.options.scales.y.max = barMax;

        barStep = 33;
        barGraph.options.scales.y.ticks.stepSize = barStep;
    } else {
        barMax = 33;
        barGraph.options.scales.y.max = barMax;

        barStep = 11;
        barGraph.options.scales.y.ticks.stepSize = barStep;
    }

    barGraph.update();
};