/* Preset color schemes */
$('#presets').change(function() {
    let scheme = $(this).val();
    if (scheme == 'red_black_grey') red_black_grey();
    if (scheme == 'bright_blue_black_grey') bright_blue_black_grey();
    if (scheme == 'dark_blue_black_grey_white') dark_blue_black_grey_white();
    if (scheme == 'lime_black_grey') lime_black_grey();
    if (scheme == 'purple_black_grey_white') purple_black_grey_white();
});

function blackCenter() {
    $('svg.revolution-reflex #center-panel').addClass('reverse');
    $('svg.revolution-reflex .logo').children().each(function() {
        $(this).removeClass();
        $(this).addClass('logo reverse');
    });
}

function red_black_grey() {
    changeClr($('#L1'), 'black');
    changeClr($('#R1'), 'black');
    changeClr($('#L2'), 'dark-grey');
    changeClr($('#R2'), 'dark-grey');
    changeClr($('#L3'), 'red');
    changeClr($('#R3'), 'red');
    changeClr($('#L4'), 'dark-grey');
    changeClr($('#R4'), 'dark-grey');
    changeClr($('#L5'), 'red');
    changeClr($('#R5'), 'red');
    changeClr($('#L6'), 'black');
    changeClr($('#R6'), 'black');
    changeClr($('#L7'), 'dark-grey');
    changeClr($('#R7'), 'dark-grey');
    changeClr($('#L8'), 'red');
    changeClr($('#R8'), 'red');
    changeClr($('#L9'), 'black');
    changeClr($('#R9'), 'black');

    blackCenter();
}

function bright_blue_black_grey() {
    changeClr($('#L1'), 'black');
    changeClr($('#R1'), 'black');
    changeClr($('#L2'), 'dark-grey');
    changeClr($('#R2'), 'dark-grey');
    changeClr($('#L3'), 'bright-blue');
    changeClr($('#R3'), 'bright-blue');
    changeClr($('#L4'), 'dark-grey');
    changeClr($('#R4'), 'dark-grey');
    changeClr($('#L5'), 'black');
    changeClr($('#R5'), 'black');
    changeClr($('#L6'), 'black');
    changeClr($('#R6'), 'black');
    changeClr($('#L7'), 'dark-grey');
    changeClr($('#R7'), 'dark-grey');
    changeClr($('#L8'), 'bright-blue');
    changeClr($('#R8'), 'bright-blue');
    changeClr($('#L9'), 'black');
    changeClr($('#R9'), 'black');

    blackCenter();
}

function dark_blue_black_grey_white() {
    changeClr($('#L1'), 'black');
    changeClr($('#R1'), 'black');
    changeClr($('#L2'), 'light-grey');
    changeClr($('#R2'), 'light-grey');
    changeClr($('#L3'), 'dark-blue');
    changeClr($('#R3'), 'dark-blue');
    changeClr($('#L4'), 'light-grey');
    changeClr($('#R4'), 'light-grey');
    changeClr($('#L5'), 'black');
    changeClr($('#R5'), 'black');
    changeClr($('#L6'), 'black');
    changeClr($('#R6'), 'black');
    changeClr($('#L7'), 'light-grey');
    changeClr($('#R7'), 'light-grey');
    changeClr($('#L8'), 'dark-blue');
    changeClr($('#R8'), 'dark-blue');
    changeClr($('#L9'), 'black');
    changeClr($('#R9'), 'black');

    blackCenter();
}

function lime_black_grey() {
    changeClr($('#L1'), 'black');
    changeClr($('#R1'), 'black');
    changeClr($('#L2'), 'dark-grey');
    changeClr($('#R2'), 'dark-grey');
    changeClr($('#L3'), 'flo-yellow');
    changeClr($('#R3'), 'flo-yellow');
    changeClr($('#L4'), 'dark-grey');
    changeClr($('#R4'), 'dark-grey');
    changeClr($('#L5'), 'black');
    changeClr($('#R5'), 'black');
    changeClr($('#L6'), 'black');
    changeClr($('#R6'), 'black');
    changeClr($('#L7'), 'dark-grey');
    changeClr($('#R7'), 'dark-grey');
    changeClr($('#L8'), 'flo-yellow');
    changeClr($('#R8'), 'flo-yellow');
    changeClr($('#L9'), 'black');
    changeClr($('#R9'), 'black');

    blackCenter();
}

function purple_black_grey_white() {
    changeClr($('#L1'), 'black');
    changeClr($('#R1'), 'black');
    changeClr($('#L2'), 'light-grey');
    changeClr($('#R2'), 'light-grey');
    changeClr($('#L3'), 'purple');
    changeClr($('#R3'), 'purple');
    changeClr($('#L4'), 'light-grey');
    changeClr($('#R4'), 'light-grey');
    changeClr($('#L5'), 'black');
    changeClr($('#R5'), 'black');
    changeClr($('#L6'), 'black');
    changeClr($('#R6'), 'black');
    changeClr($('#L7'), 'light-grey');
    changeClr($('#R7'), 'light-grey');
    changeClr($('#L8'), 'purple');
    changeClr($('#R8'), 'purple');
    changeClr($('#L9'), 'black');
    changeClr($('#R9'), 'black');

    blackCenter();
}
