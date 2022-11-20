/* Preset color schemes */
$('#presets').change(function() {
    let scheme = $(this).val();
    if (scheme == 'dark_blue_black_grey_white') dark_blue_black_grey_white();
    if (scheme == 'bright_blue_black_grey') bright_blue_black_grey();
    if (scheme == 'lime_black_grey') lime_black_grey();
    if (scheme == 'purple_black_grey_white') purple_black_grey_white();
    if (scheme == 'red_black_grey') red_black_grey();
});

function blackCenter() {
    $('svg.revolution-reflex #center-panel').addClass('reverse');
    $('svg.revolution-reflex .logo').children().each(function() {
        $(this).removeClass();
        $(this).addClass('logo reverse');
    });

    $("#display-center-panel").text("light on dark");
}

function whiteCenter() {
    $('svg.revolution-reflex #center-panel').removeClass('reverse');
    $('svg.revolution-reflex .logo').children().each(function() {
        $(this).removeClass();
        $(this).addClass('logo');
    });

    $("#display-center-panel").text("dark on light");
}

function dark_blue_black_grey_white() {
    changeClr($('#L1'), 'black');
    changeClr($('#R1'), 'black');
    changeClr($('#L2'), 'white');
    changeClr($('#R2'), 'white');
    changeClr($('#L3'), 'black');
    changeClr($('#R3'), 'black');
    changeClr($('#L4'), 'white');
    changeClr($('#R4'), 'white');
    changeClr($('#L5'), 'dark-blue');
    changeClr($('#R5'), 'dark-blue');
    changeClr($('#L6'), 'white');
    changeClr($('#R6'), 'white');
    changeClr($('#L7'), 'dark-blue');
    changeClr($('#R7'), 'dark-blue');
    changeClr($('#L8'), 'white');
    changeClr($('#R8'), 'white');
    changeClr($('#L9'), 'black');
    changeClr($('#R9'), 'black');
    changeClr($('#L10'), 'black');
    changeClr($('#R10'), 'black');

    whiteCenter();
}

function bright_blue_black_grey() {
    changeClr($('#L1'), 'black');
    changeClr($('#R1'), 'black');
    changeClr($('#L2'), 'light-grey');
    changeClr($('#R2'), 'light-grey');
    changeClr($('#L3'), 'black');
    changeClr($('#R3'), 'black');
    changeClr($('#L4'), 'light-grey');
    changeClr($('#R4'), 'light-grey');
    changeClr($('#L5'), 'bright-blue');
    changeClr($('#R5'), 'bright-blue');
    changeClr($('#L6'), 'light-grey');
    changeClr($('#R6'), 'light-grey');
    changeClr($('#L7'), 'bright-blue');
    changeClr($('#R7'), 'bright-blue');
    changeClr($('#L8'), 'light-grey');
    changeClr($('#R8'), 'light-grey');
    changeClr($('#L9'), 'black');
    changeClr($('#R9'), 'black');
    changeClr($('#L10'), 'black');
    changeClr($('#R10'), 'black');

    blackCenter();
}

function lime_black_grey() {
    changeClr($('#L1'), 'black');
    changeClr($('#R1'), 'black');
    changeClr($('#L2'), 'dark-grey');
    changeClr($('#R2'), 'dark-grey');
    changeClr($('#L3'), 'black');
    changeClr($('#R3'), 'black');
    changeClr($('#L4'), 'dark-grey');
    changeClr($('#R4'), 'dark-grey');
    changeClr($('#L5'), 'flo-yellow');
    changeClr($('#R5'), 'flo-yellow');
    changeClr($('#L6'), 'dark-grey');
    changeClr($('#R6'), 'dark-grey');
    changeClr($('#L7'), 'flo-yellow');
    changeClr($('#R7'), 'flo-yellow');
    changeClr($('#L8'), 'dark-grey');
    changeClr($('#R8'), 'dark-grey');
    changeClr($('#L9'), 'black');
    changeClr($('#R9'), 'black');
    changeClr($('#L10'), 'black');
    changeClr($('#R10'), 'black');

    blackCenter();
}

function purple_black_grey_white() {
    changeClr($('#L1'), 'black');
    changeClr($('#R1'), 'black');
    changeClr($('#L2'), 'white');
    changeClr($('#R2'), 'white');
    changeClr($('#L3'), 'black');
    changeClr($('#R3'), 'black');
    changeClr($('#L4'), 'white');
    changeClr($('#R4'), 'white');
    changeClr($('#L5'), 'purple');
    changeClr($('#R5'), 'purple');
    changeClr($('#L6'), 'white');
    changeClr($('#R6'), 'white');
    changeClr($('#L7'), 'purple');
    changeClr($('#R7'), 'purple');
    changeClr($('#L8'), 'white');
    changeClr($('#R8'), 'white');
    changeClr($('#L9'), 'black');
    changeClr($('#R9'), 'black');
    changeClr($('#L10'), 'black');
    changeClr($('#R10'), 'black');

    whiteCenter();
}

function red_black_grey() {
    changeClr($('#L1'), 'black');
    changeClr($('#R1'), 'black');
    changeClr($('#L2'), 'dark-grey');
    changeClr($('#R2'), 'dark-grey');
    changeClr($('#L3'), 'black');
    changeClr($('#R3'), 'black');
    changeClr($('#L4'), 'dark-grey');
    changeClr($('#R4'), 'dark-grey');
    changeClr($('#L5'), 'red');
    changeClr($('#R5'), 'red');
    changeClr($('#L6'), 'dark-grey');
    changeClr($('#R6'), 'dark-grey');
    changeClr($('#L7'), 'red');
    changeClr($('#R7'), 'red');
    changeClr($('#L8'), 'dark-grey');
    changeClr($('#R8'), 'dark-grey');
    changeClr($('#L9'), 'black');
    changeClr($('#R9'), 'black');
    changeClr($('#L10'), 'black');
    changeClr($('#R10'), 'black');

    blackCenter();
}

