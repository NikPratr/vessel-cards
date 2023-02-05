// --------------------------------
// Variables
// --------------------------------

const age = document.getElementById('age');
const birthDate = document.getElementById('birth-date');
const height = document.getElementById('height');
const race = document.getElementById('race');
const sex = document.getElementById('sex');
const guild = document.getElementById('guild');
const alliance = document.getElementById('alliance');

const guildContainer = document.getElementById('container');
const guildItem = document.getElementById('container-item');

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

// --------------------------------
// Event Listeners
// --------------------------------

age.addEventListener('keydown', validateAge1);
age.addEventListener('keyup', validateAge2);
age.addEventListener('input', updateAge);

height.addEventListener('keydown', handleHeight);

race.addEventListener('change', () => updateColor(race, 'black'));
sex.addEventListener('change', () => updateColor(sex, 'black'));

guild.addEventListener('input', generateGuilds);
guild.addEventListener('focus', generateGuilds);

window.addEventListener('resize', generateGuilds);

// --------------------------------
// Functions
// --------------------------------

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
                updateColor(alliance, 'black');
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
};

function removeList() {
    guildContainer.innerHTML = '';
    guildContainer.style.display = 'none';
    guild.value.toUpperCase();
    clickaway.style.display = 'none';
};

// --------------------------------
// Scrapped Ideas
// --------------------------------

// Generate list of heights instead of typing your own
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