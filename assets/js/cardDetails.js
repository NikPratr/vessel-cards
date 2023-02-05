function damageCard(size, skew, rotation, side, distance, gap, line, length, lineDist, lineRot) {
    const chip = document.createElement('div');
    const tear = document.createElement('div');

    chip.style.position = 'absolute';

    chip.style.height = size + 'px';
    chip.style.width = size + 'px';

    chip.style.transform = `skew(${skew}deg)`;

    chip.style.rotate = rotation + 'deg';

    if (side === 'left') {
        chip.style.left = gap + 'px';
        chip.style.top = distance + '%';
        chip.style.borderWidth = '0 2px 2px 0';
    } else if (side === 'right') {
        chip.style.right = gap + 'px';
        chip.style.top = distance + '%';
        chip.style.borderWidth = '2px 0 0 2px';
    } else if (side === 'top') {
        chip.style.top = gap + 'px';
        chip.style.right = distance + '%';
        chip.style.borderWidth = '2px 0 0 2px';
    } else {
        chip.style.bottom = gap + 'px';
        chip.style.right = distance + '%';
        chip.style.borderWidth = '2px 0 0 2px';
    }
    
    chip.style.borderStyle = 'solid';
    chip.style.backgroundColor = 'lightgray';

    cardUI.prepend(chip);

    if (line === 'true' && side === 'left') {
        tear.style.position = 'absolute';
        tear.style.top = lineDist + '%';
        tear.style.left = size + 'px';
        tear.style.width = length + 'px';
        tear.style.rotate = lineRot + 'deg';
        tear.style.borderTop = '1px solid';
        cardUI.prepend(tear);
    }
    
    if (line === 'true' && side === 'bottom') {
        tear.style.position = 'absolute';
        tear.style.right = lineDist + '%';
        tear.style.bottom = size + 'px';
        tear.style.width = length + 'px';
        tear.style.rotate = lineRot + 'deg';
        tear.style.borderTop = '1px solid';
        cardUI.prepend(tear);
    }
}

damageCard('10', '25', '335', 'right', '25', '-5');
damageCard('12', '40', '335', 'right', '47', '-6');
damageCard('12', '20', '330', 'right', '88', '-6');

damageCard('10', '40', '345', 'left', '11', '-5', 'true', '10', '12.3', '10');
damageCard('6', '40', '345', 'left', '25', '-5', 'true', '8', '25.8', '5');
damageCard('9', '40', '340', 'left', '23', '-5');
damageCard('17', '50', '10', 'left', '75', '-9');

damageCard('3', '40', '255', 'top', '25', '-2');
damageCard('5', '40', '235', 'top', '95', '-3');

damageCard('4', '40', '80', 'bottom', '25', '-2');
damageCard('8', '40', '80', 'bottom', '23', '-5');
damageCard('8', '5', '50', 'bottom', '67', '-5', 'true', '12', '66.7', '270');