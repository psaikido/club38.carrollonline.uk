/* Preset color schemes */
$('#presets').change(function() {
    let scheme = $(this).val();
    if (scheme == 'blues') blues();
    if (scheme == 'hot') hot();
    if (scheme == 'lime_purple') lime_purple();
    if (scheme == 'red_black') red_black();
});

function blues() {
    changeClr($('#L1'), 'dark-blue');
    changeClr($('#R1'), 'dark-blue');
    changeClr($('#L2'), 'bright-blue');
    changeClr($('#R2'), 'bright-blue');
    changeClr($('#L3'), 'dark-blue');
    changeClr($('#R3'), 'dark-blue');
    changeClr($('#L4'), 'bright-blue');
    changeClr($('#R4'), 'bright-blue');
    changeClr($('#center-panel'), 'bright-blue');
}

function hot() {
    changeClr($('#L1'), 'red');
    changeClr($('#R1'), 'red');
    changeClr($('#L2'), 'orange');
    changeClr($('#R2'), 'orange');
    changeClr($('#L3'), 'orange');
    changeClr($('#R3'), 'orange');
    changeClr($('#L4'), 'yellow');
    changeClr($('#R4'), 'yellow');
    changeClr($('#center-panel'), 'yellow');
}

function lime_purple() {
    changeClr($('#L1'), 'purple');
    changeClr($('#R1'), 'purple');
    changeClr($('#L2'), 'flo-yellow');
    changeClr($('#R2'), 'flo-yellow');
    changeClr($('#L3'), 'purple');
    changeClr($('#R3'), 'purple');
    changeClr($('#L4'), 'flo-yellow');
    changeClr($('#R4'), 'flo-yellow');
    changeClr($('#center-panel'), 'flo-yellow');
}

function red_black() {
    changeClr($('#L1'), 'red');
    changeClr($('#R1'), 'red');
    changeClr($('#L2'), 'red');
    changeClr($('#R2'), 'red');
    changeClr($('#L3'), 'red');
    changeClr($('#R3'), 'red');
    changeClr($('#L4'), 'white');
    changeClr($('#R4'), 'white');
    changeClr($('#center-panel'), 'red');
}
