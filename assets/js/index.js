// --------------------------------
// Variables
// --------------------------------

const MainUI = document.getElementById('ui');
const createBtn = document.getElementById('create-btn');
const generateBtn = document.getElementById('generate-btn');
const viewBtn = document.getElementById('view-btn');
const compareBtn = document.getElementById('compare-btn');

const cardUI = document.getElementById('card');
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

let importantValues = [0, 0, 0, 0, 0, 0, 0];

// --------------------------------
// Event Listeners
// --------------------------------

createBtn.addEventListener('click', () => {
    MainUI.style.display = 'none';
    cardUI.style.display = 'block';
    barGraph.update();
    radarGraph.update();
})

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
};

// --------------------------------
// Functions
// --------------------------------

let barGraph;
let radarGraph;

const checkCard = setInterval(() => {
    if (cardUI.offsetHeight > 0 && cardUI.offsetWidth > 0) {
        clearInterval()
        
        barGraph = new Chart(bar, {
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
                },
                responsive: true
            }
        });
        
        radarGraph = new Chart(radar, {
            type: 'radar',
            data: {
                labels: ['STR', 'SPD', 'AGI', 'PER', 'CLR'],
                datasets: [{
                    label: 'Secondaries',
                    data: [0, 0, 0, 0, 0],
                    borderColor: '#D21404',
                    backgroundColor: 'rgba(154, 42, 42, 0.4)'
                }],
            },
            options: {
                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        enabled: false
                    }
                },
                scales: {
                    r: {
                        min: radarMin,
                        max: radarMax,
                        grid: {
                            color: 'black',
                        },
                        ticks: {
                            stepSize: radarStep,
                            display: false,
                        },
                        pointLabels: {
                            color: 'black',
                            font: {
                                size: 10
                            },
                            padding: 2
                        }
                    }
                },
                responsive: true
            }
        });
    }
}, 100);

