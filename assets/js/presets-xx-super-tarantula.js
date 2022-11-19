/* Preset color schemes */
$('#presets').change(function() {
    let scheme = $(this).val();
    if (scheme == 'green_black') green_black();
    if (scheme == 'purple_lime_black') purple_lime_black();
    if (scheme == 'hot') hot();
    if (scheme == 'blues') blues();
    if (scheme == 'red_white_blue') red_white_blue();
    if (scheme == 'black_red_grey') black_red_grey();
});

function green_black() {
    changeClr($('#L1'), 'green');
    changeClr($('#L2'), 'green');
    changeClr($('#L3'), 'black');
    changeClr($('#L4'), 'black');
    changeClr($('#L5'), 'green');
    changeClr($('#L6'), 'green');
    changeClr($('#L7'), 'black');
    changeClr($('#L8'), 'black');
    changeClr($('#L9'), 'green');
    changeClr($('#L10'), 'green');
    changeClr($('#R1'), 'black');
    changeClr($('#R2'), 'black');
    changeClr($('#R3'), 'green');
    changeClr($('#R4'), 'green');
    changeClr($('#R5'), 'black');
    changeClr($('#R6'), 'black');
    changeClr($('#R7'), 'green');
    changeClr($('#R8'), 'green');
    changeClr($('#R9'), 'black');
    changeClr($('#R10'), 'black');
}

function purple_lime_black() {
    changeClr($('#L1'), 'purple');
    changeClr($('#R1'), 'purple');
    changeClr($('#L2'), 'black');
    changeClr($('#R2'), 'black');
    changeClr($('#L3'), 'yellow');
    changeClr($('#R3'), 'yellow');
    changeClr($('#L4'), 'black');
    changeClr($('#R4'), 'black');
    changeClr($('#L5'), 'black');
    changeClr($('#R5'), 'black');
    changeClr($('#L6'), 'black');
    changeClr($('#R6'), 'black');
    changeClr($('#L7'), 'purple');
    changeClr($('#R7'), 'purple');
    changeClr($('#L8'), 'yellow');
    changeClr($('#R8'), 'yellow');
    changeClr($('#L9'), 'yellow');
    changeClr($('#R9'), 'yellow');
    changeClr($('#L10'), 'purple');
    changeClr($('#R10'), 'purple');
}

function hot() {
    changeClr($('#L1'), 'white');
    changeClr($('#R1'), 'white');
    changeClr($('#L2'), 'yellow');
    changeClr($('#R2'), 'yellow');
    changeClr($('#L3'), 'red');
    changeClr($('#R3'), 'red');
    changeClr($('#L4'), 'orange');
    changeClr($('#R4'), 'orange');
    changeClr($('#L5'), 'yellow');
    changeClr($('#R5'), 'yellow');
    changeClr($('#L6'), 'yellow');
    changeClr($('#R6'), 'yellow');
    changeClr($('#L7'), 'red');
    changeClr($('#R7'), 'red');
    changeClr($('#L8'), 'orange');
    changeClr($('#R8'), 'orange');
    changeClr($('#L9'), 'yellow');
    changeClr($('#R9'), 'yellow');
    changeClr($('#L10'), 'white');
    changeClr($('#R10'), 'white');
}

function blues() {
    changeClr($('#L1'), 'white');
    changeClr($('#R1'), 'white');
    changeClr($('#L2'), 'white');
    changeClr($('#R2'), 'white');
    changeClr($('#L3'), 'dark-blue');
    changeClr($('#R3'), 'dark-blue');
    changeClr($('#L4'), 'dark-blue');
    changeClr($('#R4'), 'dark-blue');
    changeClr($('#L5'), 'white');
    changeClr($('#R5'), 'white');
    changeClr($('#L6'), 'white');
    changeClr($('#R6'), 'white');
    changeClr($('#L7'), 'bright-blue');
    changeClr($('#R7'), 'bright-blue');
    changeClr($('#L8'), 'bright-blue');
    changeClr($('#R8'), 'bright-blue');
    changeClr($('#L9'), 'white');
    changeClr($('#R9'), 'white');
    changeClr($('#L10'), 'bright-blue');
    changeClr($('#R10'), 'bright-blue');
}

function red_white_blue() {
    changeClr($('#L1'), 'dark-blue');
    changeClr($('#R1'), 'dark-blue');
    changeClr($('#L2'), 'white');
    changeClr($('#R2'), 'white');
    changeClr($('#L3'), 'red');
    changeClr($('#R3'), 'red');
    changeClr($('#L4'), 'dark-blue');
    changeClr($('#R4'), 'dark-blue');
    changeClr($('#L5'), 'white');
    changeClr($('#R5'), 'white');
    changeClr($('#L6'), 'dark-blue');
    changeClr($('#R6'), 'dark-blue');
    changeClr($('#L7'), 'red');
    changeClr($('#R7'), 'red');
    changeClr($('#L8'), 'dark-blue');
    changeClr($('#R8'), 'dark-blue');
    changeClr($('#L9'), 'white');
    changeClr($('#R9'), 'white');
    changeClr($('#L10'), 'red');
    changeClr($('#R10'), 'red');
}

function black_red_grey() {
    changeClr($('#L1'), 'black');
    changeClr($('#R1'), 'black');
    changeClr($('#L2'), 'red');
    changeClr($('#R2'), 'red');
    changeClr($('#L3'), 'dark-grey');
    changeClr($('#R3'), 'dark-grey');
    changeClr($('#L4'), 'black');
    changeClr($('#R4'), 'black');
    changeClr($('#L5'), 'red');
    changeClr($('#R5'), 'red');
    changeClr($('#L6'), 'light-grey');
    changeClr($('#R6'), 'light-grey');
    changeClr($('#L7'), 'black');
    changeClr($('#R7'), 'black');
    changeClr($('#L8'), 'red');
    changeClr($('#R8'), 'red');
    changeClr($('#L9'), 'black');
    changeClr($('#R9'), 'black');
    changeClr($('#L10'), 'dark-grey');
    changeClr($('#R10'), 'dark-grey');
}
