const name = document.getElementById('name').value;

const str = parseInt(document.getElementById('str').value);
const spd = parseInt(document.getElementById('spd').value);
const agi = parseInt(document.getElementById('agi').value);
const per = parseInt(document.getElementById('per').value);
const clr = parseInt(document.getElementById('clr').value);
const avg = document.getElementById('avg');
const secondariesRow = document.getElementById('secondaries-block-1');
const radar = document.getElementById('radar');

const primariesRow = document.getElementById('primaries-row');
const primariesBar = document.getElementById('bar');

avg.textContent = ((str + spd + agi + per + clr) / 5).toFixed(1);

function updateValue(stat) {
    var currentValue = stat;
    stat = currentValue;

    currentRadar.update();
}

const currentRadar = new Chart(radar, {
    type: 'radar',
    data: {
        labels: ['STR', 'SPD', 'AGI', 'PER', 'INT'],
        datasets: [{
            label: 'Secondaries',
            data: [str, spd, agi, per, clr],
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
                min: 0,
                max: 33,
                grid: {
                    color: 'black',
                },
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