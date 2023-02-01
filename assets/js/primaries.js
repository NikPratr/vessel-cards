// --------------------------------
// Variables
// --------------------------------

const primariesRow = document.getElementById('primaries-row');
const barHolder = document.getElementById('bar-holder');
const Bar = document.getElementById('bar');
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
    } else if(display === 'astral') {
        currentDisplay = 'astral';

        currentPrimaries = [astCap, astReg, astPtc, astLnk];
    } else {
        currentDisplay = 'void';

        currentPrimaries = [voidCap, voidReg, voidPtc, voidLnk];
    }
};

function preventCheck(event) {
    event.preventDefault();
    event.stopPropagation();
}

function checkLegendaryEligability() {
    let importantValues = [];

    currentPrimaries[0].value === '' ? importantValues.push(0) : importantValues.push(currentPrimaries[0].value);
    currentPrimaries[1].value === '' ? importantValues.push(0) : importantValues.push(currentPrimaries[1].value);

    secondaries[0].value === '' ? importantValues.push(0) : importantValues.push(secondaries[0].value);
    secondaries[1].value === '' ? importantValues.push(0) : importantValues.push(secondaries[1].value);
    secondaries[2].value === '' ? importantValues.push(0) : importantValues.push(secondaries[2].value);
    secondaries[3].value === '' ? importantValues.push(0) : importantValues.push(secondaries[3].value);
    secondaries[4].value === '' ? importantValues.push(0) : importantValues.push(secondaries[4].value);

    if(Math.min(...importantValues) < 50) {
        vitLegText.style.color = 'gray';
        vitLegText.style.textDecoration = 'line-through';
        vitLegMark.style.pointerEvents = 'none';
        vitLegBox.checked = false;
        vitLegBox.addEventListener('click', preventCheck)
    } else {
        vitLegText.style.color = 'black';
        vitLegText.style.textDecoration = 'none';
        vitLegMark.style.pointerEvents = 'auto';
        vitLegBox.removeEventListener('click', preventCheck)
    }

    console.log(importantValues);
    console.log(Math.min(...importantValues));
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

// --------------------------------
// Bar Chart
// --------------------------------

const barGraph = new Chart(Bar, {
    type: 'bar',
    data: {
        labels: ['CAP', 'REG', 'PTC', 'bSTR'],
        datasets: [{
            label: 'Vital Vapor',
            data: [0, 0, 0, 0],
            borderColor: 'rgba(40, 40, 160, 1)',
            backgroundColor: 'rgba(40, 40, 160, 0.4)',
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
            legend: {
                labels: {
                    boxWidth: 0
                }
            },
            tooltip: {
                enabled: false
            }
        },
        scales: {
            y: {
                min: barMin,
                max: barMax,
                ticks: {
                    stepSize: barStep,
                    callback: function(x) {
                        if (x > 0 && x < barMax) {
                            return "";
                        } else {
                            return x;
                        }
                    }
                },
            }
        }
    },
});