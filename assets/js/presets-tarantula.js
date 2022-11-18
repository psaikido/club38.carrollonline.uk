/* Preset color schemes */
$('#presets').change(function() {
    let scheme = $(this).val();
    if (scheme == 'blackred') blackred();
    if (scheme == 'blues') blues();
    if (scheme == 'greenblack') greenblack();
    if (scheme == 'hot') hot();
    if (scheme == 'purplelimeblack') purplelimeblack();
    if (scheme == 'redwhiteblue') redwhiteblue();
});

function blackred() {
    changeClr($('#L1'), 'black');
    changeClr($('#R1'), 'black');
    changeClr($('#L2'), 'red');
    changeClr($('#R2'), 'red');
    changeClr($('#L3'), 'light-grey');
    changeClr($('#R3'), 'light-grey');
    changeClr($('#L4'), 'black');
    changeClr($('#R4'), 'black');
    changeClr($('#L5'), 'white');
    changeClr($('#R5'), 'white');
    changeClr($('#L6'), 'red');
    changeClr($('#R6'), 'red');
    changeClr($('#L7'), 'black');
    changeClr($('#R7'), 'black');
    changeClr($('#L8'), 'light-grey');
    changeClr($('#R8'), 'light-grey');
    changeClr($('#L10'), 'light-grey');
    changeClr($('#R10'), 'light-grey');
}

function blues() {
    changeClr($('#L1'), 'light-grey');
    changeClr($('#R1'), 'light-grey');
    changeClr($('#L2'), 'white');
    changeClr($('#R2'), 'white');
    changeClr($('#L3'), 'dark-blue');
    changeClr($('#R3'), 'dark-blue');
    changeClr($('#L4'), 'bright-blue');
    changeClr($('#R4'), 'bright-blue');
    changeClr($('#L5'), 'light-grey');
    changeClr($('#R5'), 'light-grey');
    changeClr($('#L6'), 'bright-blue');
    changeClr($('#R6'), 'bright-blue');
    changeClr($('#L7'), 'light-grey');
    changeClr($('#R7'), 'light-grey');
    changeClr($('#L8'), 'dark-blue');
    changeClr($('#R8'), 'dark-blue');
    changeClr($('#L10'), 'bright-blue');
    changeClr($('#R10'), 'bright-blue');
}

function greenblack() {
    changeClr($('#L1'), 'green');
    changeClr($('#L2'), 'green');
    changeClr($('#L3'), 'black');
    changeClr($('#L4'), 'black');
    changeClr($('#L5'), 'green');
    changeClr($('#L6'), 'black');
    changeClr($('#L7'), 'green');
    changeClr($('#L8'), 'black');
    changeClr($('#L10'), 'green');
    changeClr($('#R1'), 'black');
    changeClr($('#R2'), 'black');
    changeClr($('#R3'), 'green');
    changeClr($('#R4'), 'green');
    changeClr($('#R5'), 'black');
    changeClr($('#R6'), 'green');
    changeClr($('#R7'), 'black');
    changeClr($('#R8'), 'green');
    changeClr($('#R10'), 'black');
}

function hot() {
    changeClr($('#L1'), 'white');
    changeClr($('#R1'), 'white');
    changeClr($('#L2'), 'flo-yellow');
    changeClr($('#R2'), 'flo-yellow');
    changeClr($('#L3'), 'red');
    changeClr($('#R3'), 'red');
    changeClr($('#L4'), 'red');
    changeClr($('#R4'), 'red');
    changeClr($('#L5'), 'yellow');
    changeClr($('#R5'), 'yellow');
    changeClr($('#L6'), 'orange');
    changeClr($('#R6'), 'orange');
    changeClr($('#L7'), 'flo-yellow');
    changeClr($('#R7'), 'flo-yellow');
    changeClr($('#L8'), 'orange');
    changeClr($('#R8'), 'orange');
    changeClr($('#L10'), 'white');
    changeClr($('#R10'), 'white');
}

function purplelimeblack() {
    changeClr($('#L1'), 'purple');
    changeClr($('#R1'), 'purple');
    changeClr($('#L2'), 'black');
    changeClr($('#R2'), 'black');
    changeClr($('#L3'), 'flo-yellow');
    changeClr($('#R3'), 'flo-yellow');
    changeClr($('#L4'), 'purple');
    changeClr($('#R4'), 'purple');
    changeClr($('#L5'), 'black');
    changeClr($('#R5'), 'black');
    changeClr($('#L6'), 'flo-yellow');
    changeClr($('#R6'), 'flo-yellow');
    changeClr($('#L7'), 'flo-yellow');
    changeClr($('#R7'), 'flo-yellow');
    changeClr($('#L8'), 'black');
    changeClr($('#R8'), 'black');
    changeClr($('#L10'), 'purple');
    changeClr($('#R10'), 'purple');
}

function redwhiteblue() {
    changeClr($('#L1'), 'bright-blue');
    changeClr($('#R1'), 'bright-blue');
    changeClr($('#L2'), 'white');
    changeClr($('#R2'), 'white');
    changeClr($('#L3'), 'red');
    changeClr($('#R3'), 'red');
    changeClr($('#L4'), 'red');
    changeClr($('#R4'), 'red');
    changeClr($('#L5'), 'dark-blue');
    changeClr($('#R5'), 'dark-blue');
    changeClr($('#L6'), 'dark-blue');
    changeClr($('#R6'), 'dark-blue');
    changeClr($('#L7'), 'white');
    changeClr($('#R7'), 'white');
    changeClr($('#L8'), 'dark-blue');
    changeClr($('#R8'), 'dark-blue');
    changeClr($('#L10'), 'red');
    changeClr($('#R10'), 'red');
}
