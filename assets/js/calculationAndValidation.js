// --------------------------------
// || Variables
// --------------------------------

/*
Demographics:
age
birthDate
height
race
sex
guild
alliance

Secondaries:
str
spd
agi
per
clr
avg

Primaries:
primaries[0, 4, 8, 12]
vitLegBox
natLegBox
astLegBox
voidLegBox
*/

const style = document.getElementById('style-input');
const strategy = document.getElementById('strategy-input');
const tactics = document.getElementById('tactics-input');
const rating = document.getElementById('rating-input');

/* 
------------------------------------------------
Secondaries
------------------------------------------------
*/

document.addEventListener('click', () => {
    let strCalc1 = (1.01**str.value**1.25 - 1) * 7.5;
    let spdCalc1 = (1.01**spd.value**1.25 - 1) * 7.5;
    let agiCalc1 = (1.01**agi.value**1.25 - 1) * 7.5;
    let perCalc1 = (1.01**per.value**1.25 - 1) * 7.5;
    let clrCalc1 = (1.01**clr.value**1.25 - 1) * 7.5;

    let vitCapCalc1;
    let vitCapCalc2;
    if(vitCap.value <= 50) {
        vitCapCalc1 = 0.02 * vitCap.value**2 + 0.5 * vitCap.value;
    } else { vitCapCalc1 = -0.01 * vitCap.value**2 + 3 * vitCap.value - 50 }
    
    // The cubic-bezier-like if statement above will create a new variable
    // from the inputted value that ranges from 0 to 148. This returns it to a 0-99
    // but on that cubic-bezier-like curve
    vitCapCalc2 = vitCapCalc1 / 148.99 * 99;

    // TODO: Calculate this value in the same way regeneration is calculated for
    // each of the other energy types.
    let vitRegCalc1 = (100 * vitReg.value + 1225) ** 0.5 - 35;
    let vitRegCalc2 = vitRegCalc1 / 70.4 * 99;

    // Potency acts as a moderator for the strength of capacity and regeneration
    let vitPtcCalc1;
    // Gets the average value of these two
    let vitCapReg = (vitCapCalc2 + vitRegCalc2) / 2;
    // Avoids 'Infinity' value on 0 and then creates the moderation strength
    if (vitPtc.value === '' || 0) {
        vitPtcCalc1 = 0;
    } else { vitPtcCalc1 = (95 * Math.log10(vitPtc.value) ** 0.2) / 100 }
    // Final value is the average of the effective capacity and regeneration
    let vitPtcCalc2 = vitPtcCalc1 * vitCapReg;

    let bStrCalc1 = (+bStr.value || 0) + (1.04 ** +bStr.value - 1 || 0);

    let secRating = (strCalc1 + spdCalc1 + agiCalc1 + perCalc1 + clrCalc1) / 5;
    // Instead of using the effective values of capacity and regeneration,
    // their potency moderated values are used. They are used twice in place
    // of both capacity and regeneration. This is used for the other vapor types
    // as well. I don't really like this system and may change it in the future.
    
    // What I like more is simply making the potency its own value that is
    // based off of the average of those two and then using all three of those
    // with equal weights in the final value. That doesn't really make sense
    // in terms of what potency actually does, but it seems to make more sense
    // mathematically... probably.
    let vitRating = (vitPtcCalc2 + vitPtcCalc2 + bStrCalc1) / 3 / 3;

    console.log('\n' + 'Secondaries: ' + secRating);
    console.log('\n' + 'Vital Rating: ' + vitRating);

    let natCapCalc1 = +natCap.value + 1.03**+natCap.value - 1;
    let natRegCalc1 = (180 * natReg.value + 1225)**0.5 - 35;

    let natPtcCalc1;
    let natCapReg = (+natCapCalc1 + +natRegCalc1) / 2;
    if (natPtc.value === '' || 0) {
        natPtcCalc1 = 0;
    } else { natPtcCalc1 = (95 * Math.log10(natPtc.value) ** 0.2) / 100 }

    let natPtcCalc2 = natPtcCalc1 * natCapReg;

    let natLnkCalc1;
    natLnk.value === '' || 0 ? natLnkCalc1 = 0 :
    natLnkCalc1 = 0.7 * +natLnk.value + (1.03**+natLnk.value - 1) + 25;

    let natRating = (natPtcCalc2 + natPtcCalc2 + natLnkCalc1) / 2 / 3;

    console.log('\n' + 'Nature Rating: ' + natRating);
})

//33.37.39.22.47..30.41.56.30
