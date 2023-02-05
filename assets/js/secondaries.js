// --------------------------------
// Variables
// --------------------------------

const str = document.getElementById('str');
const spd = document.getElementById('spd');
const agi = document.getElementById('agi');
const per = document.getElementById('per');
const clr = document.getElementById('clr');
const avg = document.getElementById('avg');
const secondariesRow = document.getElementById('secondaries-block-1');
const radar = document.getElementById('radar');
const radarMaxEl = document.getElementById('radar-max');

const secondaries = [str, spd, agi, per, clr];

let radarMin = 0;
let radarMax = 33;
let radarStep = 11;

// --------------------------------
// Event Listeners
// --------------------------------

for (let i = 0; i < secondaries.length; i++) {
    secondaries[i].addEventListener(
        'input', ( function(index) { return () => updateSecondaries(index, secondaries[index]) } ) (i)
    );

    secondaries[i].addEventListener('keydown', validateStats1);
    secondaries[i].addEventListener('keyup', validateStats2);
};

// --------------------------------
// Functions
// --------------------------------

function updateSecondaries(n, stat) {
    let currentAvg = +str.value + +spd.value + +agi.value + +per.value + +clr.value;
    avg.textContent = (currentAvg / 5).toFixed(1);
    importantValues[n] = stat.value;
    checkLegendaryEligability();

    radarGraph.data.datasets[0].data[n] = stat.value;
    radarGraph.update();
    
    if(Math.max( str.value, spd.value, agi.value, per.value, clr.value) > 33) {
        radarMax = 99;
        radarMaxEl.textContent = 'Max: 99';
        radarGraph.options.scales.r.max = radarMax;

        radarStep = 33;
        radarGraph.options.scales.r.ticks.stepSize = radarStep;

        radarGraph.update();
    } else {
        radarMax = 33;
        radarMaxEl.textContent = 'Max: 33';
        radarGraph.options.scales.r.max = radarMax;

        radarStep = 11;
        radarGraph.options.scales.r.ticks.stepSize = radarStep;

        radarGraph.update();
    }
};