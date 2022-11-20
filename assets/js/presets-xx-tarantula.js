/* Preset color schemes */
$('#presets').change(function() {
    let scheme = $(this).val();
    if (scheme == 'blues') blues();
    if (scheme == 'hot') hot();
    if (scheme == 'purplelimeblack') purplelimeblack();

    $("#display-center-panel").text("dark on light");
});

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
    changeClr($('#L9'), 'bright-blue');
    changeClr($('#R9'), 'bright-blue');
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
    changeClr($('#L9'), 'white');
    changeClr($('#R9'), 'white');
}

function purplelimeblack() {
    changeClr($('#L1'), 'purple');
    changeClr($('#R1'), 'purple');
    changeClr($('#L2'), 'dark-grey');
    changeClr($('#R2'), 'dark-grey');
    changeClr($('#L3'), 'flo-yellow');
    changeClr($('#R3'), 'flo-yellow');
    changeClr($('#L4'), 'purple');
    changeClr($('#R4'), 'purple');
    changeClr($('#L5'), 'dark-grey');
    changeClr($('#R5'), 'dark-grey');
    changeClr($('#L6'), 'flo-yellow');
    changeClr($('#R6'), 'flo-yellow');
    changeClr($('#L7'), 'flo-yellow');
    changeClr($('#R7'), 'flo-yellow');
    changeClr($('#L8'), 'dark-grey');
    changeClr($('#R8'), 'dark-grey');
    changeClr($('#L9'), 'purple');
    changeClr($('#R9'), 'purple');
}
