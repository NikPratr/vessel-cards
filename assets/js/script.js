// --------------------------------
// HTML Variables
// --------------------------------
const inputs = document.getElementsByTagName('input');

// Character information
const age = document.getElementById('age');
const birthDate = document.getElementById('birth-date');
const race = document.getElementById('race');
const height = document.getElementById('height');
const guild = document.getElementById('guild');
const alliance = document.getElementById('alliance');

const guildContainer = document.getElementById('container');
const guildItem = document.getElementById('container-item');

// div to simulate blur on click elsewhere in the document
const clickaway = document.getElementById('clickaway');

// Secondaries
const str = document.getElementById('str');
const spd = document.getElementById('spd');
const agi = document.getElementById('agi');
const per = document.getElementById('per');
const clr = document.getElementById('clr');
const avg = document.getElementById('avg');
const secondariesRow = document.getElementById('secondaries-block-1');
const radar = document.getElementById('radar');

const primariesRow = document.getElementById('primaries-row');
const primariesBar = document.getElementById('bar');

// --------------------------------
// Javascript Variables
// --------------------------------

// Character information
const races = [
    'Akhanian',
    'Drega',
    'Ellinian',
    'Griyan',
    'Ourk',
    'Tairo',
    'Venoa',
    'Wehrin',
    'Wezlan'
];

// Secondaries
const secondaries = [str, spd, agi, per, clr];

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

let radarMin = 0;
let radarMax = 33;
let radarStep = 11;

// --------------------------------
// Shortcuts
// --------------------------------

const once = { once: true };

// --------------------------------
// Scripting
// --------------------------------

// General
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

document.addEventListener('keyup', (event) => {
    if ((event.key === 'Enter') && document.activeElement.nodeName === 'INPUT') {
        nextFocus();
        removeList();
    }

    // jank?
    if (event.key === 'Tab') {
        removeList();
    }
});

window.addEventListener('resize', generateGuilds);

// Character information
function validateAge1(event) {
    if (this.value.length === 0) {
        if (!one.test(event.key) && safe.indexOf(event.key) === -1) {
            event.preventDefault();
        } 
    } else if (this.value.length < 3) {
        if (!zero.test(event.key) && safe.indexOf(event.key) === -1) {
            event.preventDefault();
        }
    } else if (this.value.length >= 3) {
        if (window.getSelection().toString() !== this.value && safe.indexOf(event.key) === -1) {
            event.preventDefault();
        } else if (window.getSelection().toString() === this.value && !one.test(event.key) && safe.indexOf(event.key) === -1) {
            event.preventDefault();
        }
    }
};

function validateAge2(event) {
    if (this.value.length >= 3 && safe.indexOf(event.key) === -1 && zero.test(event.key)) {
        event.preventDefault();
    }
};

function updateAge() {
    if (age.value === '') {
        birthDate.textContent = 'Unknown';
        birthDate.style.color = 'gray';
    } else {
        birthDate.textContent = 10003 - +age.value;
        birthDate.style.color = 'black';
    }
};

function handleHeight(event) {
    if (event.key === 'Enter' || event.key === 'Tab') {
        return
    } else { event.preventDefault(); }
 
    if (height.dataset.index === '0') {
        if (one.test(event.key)) {
            this.value = event.key + "'" + '0' + '"';
            this.selectionStart = 3;
            this.selectionEnd = 3;

            if(event.key === '8') {
                height.dataset.index = '3';
            } else { height.dataset.index = '1'; }
        }
    } else if (height.dataset.index === '1') {
        if (one.test(event.key)) {
            this.value = this.value.slice(0, 2) + event.key + '"';
            this.selectionStart = 3;
            this.selectionEnd = 3;
            height.dataset.index = '2';
        }
    } else if (height.dataset.index === '2') {
        if (this.value[2] === '1' && (event.key === '0' || event.key === '1')) {
            this.value = this.value.slice(0, 3) + event.key + '"';
            this.selectionStart = 4;
            this.selectionEnd = 4;
            height.dataset.index = '3';
        }
    }

    if(event.key === 'Backspace') {
        this.value = '';
        height.dataset.index = '0';
    }
};

function generateGuilds() {
    guildContainer.innerHTML = '';
    guildContainer.style.display = 'flex';
    let list = [];

    if (guild.value !== '') {
        for ( let i = 0; i < guilds.length; i++ ) {
            if (guilds[i].name.toUpperCase().startsWith(guild.value.toUpperCase())) {
                list.push(guilds[i].name);
            }
        }

        for ( let i = 0; i < 10; i++) {
            const newSpan = document.createElement('div');
            newSpan.classList.add('container-item');
            newSpan.textContent = list[i];
            newSpan.addEventListener('click', function() {
                guild.value = this.textContent;

                const found = guilds.find(g => g.name === guild.value);
                alliance.textContent = found.alliance || 'Unaligned';
                removeList();
            });
            guildContainer.appendChild(newSpan);
        }

        guildContainer.style.width = guild.clientWidth + 'px';
        clickaway.style.display = 'block';
        clickaway.addEventListener('click', removeList);
    } else {
        guildContainer.style.display = 'none';
        clickaway.style.display = 'none';
    }
}

function removeList() {
    guildContainer.innerHTML = '';
    guildContainer.style.display = 'none';
    guild.value.toUpperCase();
    clickaway.style.display = 'none';
}

{
    // List version of height

    // let x = 3;
    // let y = 10;
    
    // function generateHeights() {
    //     while (x < 9) {
    //         while (y < 12) {
                
    //             const newOption = document.createElement('option');
    //             newOption.setAttribute('value', x + "'" + y + '"');
    //             newOption.textContent = x + "'" + y + '"';
    //             console.log(newOption);
    //             height.appendChild(newOption);
                
    //             if (x === 8 && y === 0) {
    //                 break
    //             }
    
    //             y++
                
    //         }
    //         y = 0;
    //         x++
    //     }
    // }
    
    // generateHeights();
}

age.addEventListener('keydown', validateAge1);
age.addEventListener('keyup', validateAge2);
age.addEventListener('input', updateAge);

height.addEventListener('keydown', handleHeight);

race.addEventListener('change', () => updateColor(race));

guild.addEventListener('input', generateGuilds);
guild.addEventListener('focus', generateGuilds);


// Secondaries
function validateSecondaries1(event) {
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

function validateSecondaries2(event) {
    if (this.value.length >= 2 && safe.indexOf(event.key) === -1 && zero.test(event.key)) {
        nextFocus();
    }
};

function updateSecondaries(n, stat) {
    let currentAvg = +str.value + +spd.value + +agi.value + +per.value + +clr.value;
    avg.textContent = (currentAvg / 5).toFixed(1);

    currentRadar.data.datasets[0].data[n] = stat.value;
    currentRadar.update();
    
    if(Math.max( str.value, spd.value, agi.value, per.value, clr.value) > 33) {
        radarMax = 99;
        currentRadar.options.scales.r.max = radarMax;

        radarStep = 33;
        currentRadar.options.scales.r.ticks.stepSize = radarStep;

        currentRadar.update();
    } else {
        radarMax = 33;
        currentRadar.options.scales.r.max = radarMax;

        radarStep = 11;
        currentRadar.options.scales.r.ticks.stepSize = radarStep;

        currentRadar.update();
    }
};

for (let i=0; i<secondaries.length; i++) {
    secondaries[i].addEventListener(
        'input', ( function(index) { return () => updateSecondaries(index, secondaries[index]) } ) (i)
    );

    secondaries[i].addEventListener('keydown', validateSecondaries1);
    secondaries[i].addEventListener('keyup', validateSecondaries2);
};

// Charts
const currentRadar = new Chart(radar, {
    type: 'radar',
    data: {
        labels: ['STR', 'SPD', 'AGI', 'PER', 'CLR'],
        datasets: [{
            label: 'Secondaries',
            data: [str.value, spd.value, agi.value, per.value, clr.value],
            borderColor: '#D21404',
            backgroundColor: 'rgba(154, 42, 42, 0.4)'
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false,
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
                    callback: function(x) {
                        if (x !== radarMax) {
                            return "";
                        } else {
                            return x;
                        }
                    }
                },
                pointLabels: {
                    color: 'black',
                    font: {
                        size: '14px'
                    }
                }
            }
        }
    }
});

new Chart(primariesBar, {
    type: 'bar',
    data: {
        labels: ['CAP', 'REG', 'PTC', 'bSTR'],
        datasets: [{
            label: 'Vital Vapor Primaries',
            data: [9, 20, 10, 4],
            backgroundColor: 'rgba(154, 42, 42, 0.4)',
            borderColor: 'rgba(154, 42, 42)',
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
            legend: {
                labels: {
                    boxWidth: 0
                }
            }
        },
        scales: {
            y: {
                min: 0,
                max: 33,
                ticks: {
                    stepSize: 11,
                    callback: function(x) {
                        if (x > 0 && x < 33) {
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