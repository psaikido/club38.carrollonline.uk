/* Preset color schemes */
$('#presets').change(function() {
    let scheme = $(this).val();
    if (scheme == 'red_grey_black_bcenter') red_grey_black_bcenter();
    if (scheme == 'brightblue_grey_black_bcenter') brightblue_grey_black_bcenter();
    if (scheme == 'purple_grey_black_wcenter') purple_grey_black_wcenter();
    if (scheme == 'lime_grey_black_bcenter') lime_grey_black_bcenter();
    if (scheme == 'blue_grey_black_wcenter') blue_grey_black_wcenter();
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

function red_grey_black_bcenter() {
    changeClr($('#L1'), 'black');
    changeClr($('#R1'), 'black');
    changeClr($('#L2'), 'dark-grey');
    changeClr($('#R2'), 'dark-grey');
    changeClr($('#L3'), 'red');
    changeClr($('#R3'), 'red');
    changeClr($('#L4'), 'black');
    changeClr($('#R4'), 'black');
    changeClr($('#L5'), 'red');
    changeClr($('#R5'), 'red');
    changeClr($('#L6'), 'light-grey');
    changeClr($('#R6'), 'light-grey');
    changeClr($('#L7'), 'black');
    changeClr($('#R7'), 'black');
    changeClr($('#L8'), 'dark-grey');
    changeClr($('#R8'), 'dark-grey');
    changeClr($('#L9'), 'dark-grey');
    changeClr($('#R9'), 'dark-grey');
    changeClr($('#L10'), 'black');
    changeClr($('#R10'), 'black');
    changeClr($('#L11'), 'red');
    changeClr($('#R11'), 'red');

    blackCenter();
}

function brightblue_grey_black_bcenter() {
    changeClr($('#L1'), 'black');
    changeClr($('#R1'), 'black');
    changeClr($('#L2'), 'dark-grey');
    changeClr($('#R2'), 'dark-grey');
    changeClr($('#L3'), 'bright-blue');
    changeClr($('#R3'), 'bright-blue');
    changeClr($('#L4'), 'black');
    changeClr($('#R4'), 'black');
    changeClr($('#L5'), 'bright-blue');
    changeClr($('#R5'), 'bright-blue');
    changeClr($('#L6'), 'light-grey');
    changeClr($('#R6'), 'light-grey');
    changeClr($('#L7'), 'black');
    changeClr($('#R7'), 'black');
    changeClr($('#L8'), 'dark-grey');
    changeClr($('#R8'), 'dark-grey');
    changeClr($('#L9'), 'dark-grey');
    changeClr($('#R9'), 'dark-grey');
    changeClr($('#L10'), 'black');
    changeClr($('#R10'), 'black');
    changeClr($('#L11'), 'bright-blue');
    changeClr($('#R11'), 'bright-blue');

    blackCenter();
}

function purple_grey_black_wcenter() {
    changeClr($('#L1'), 'black');
    changeClr($('#R1'), 'black');
    changeClr($('#L2'), 'light-grey');
    changeClr($('#R2'), 'light-grey');
    changeClr($('#L3'), 'purple');
    changeClr($('#R3'), 'purple');
    changeClr($('#L4'), 'black');
    changeClr($('#R4'), 'black');
    changeClr($('#L5'), 'purple');
    changeClr($('#R5'), 'purple');
    changeClr($('#L6'), 'light-grey');
    changeClr($('#R6'), 'light-grey');
    changeClr($('#L7'), 'black');
    changeClr($('#R7'), 'black');
    changeClr($('#L8'), 'dark-grey');
    changeClr($('#R8'), 'dark-grey');
    changeClr($('#L9'), 'dark-grey');
    changeClr($('#R9'), 'dark-grey');
    changeClr($('#L10'), 'black');
    changeClr($('#R10'), 'black');
    changeClr($('#L11'), 'purple');
    changeClr($('#R11'), 'purple');

    whiteCenter();
}

function lime_grey_black_bcenter() {
    changeClr($('#L1'), 'black');
    changeClr($('#R1'), 'black');
    changeClr($('#L2'), 'dark-grey');
    changeClr($('#R2'), 'dark-grey');
    changeClr($('#L3'), 'flo-green');
    changeClr($('#R3'), 'flo-green');
    changeClr($('#L4'), 'black');
    changeClr($('#R4'), 'black');
    changeClr($('#L5'), 'flo-green');
    changeClr($('#R5'), 'flo-green');
    changeClr($('#L6'), 'light-grey');
    changeClr($('#R6'), 'light-grey');
    changeClr($('#L7'), 'black');
    changeClr($('#R7'), 'black');
    changeClr($('#L8'), 'dark-grey');
    changeClr($('#R8'), 'dark-grey');
    changeClr($('#L9'), 'dark-grey');
    changeClr($('#R9'), 'dark-grey');
    changeClr($('#L10'), 'black');
    changeClr($('#R10'), 'black');
    changeClr($('#L11'), 'flo-green');
    changeClr($('#R11'), 'flo-green');

    blackCenter();
}


function blue_grey_black_wcenter() {
    changeClr($('#L1'), 'black');
    changeClr($('#R1'), 'black');
    changeClr($('#L2'), 'light-grey');
    changeClr($('#R2'), 'light-grey');
    changeClr($('#L3'), 'dark-blue');
    changeClr($('#R3'), 'dark-blue');
    changeClr($('#L4'), 'black');
    changeClr($('#R4'), 'black');
    changeClr($('#L5'), 'dark-blue');
    changeClr($('#R5'), 'dark-blue');
    changeClr($('#L6'), 'light-grey');
    changeClr($('#R6'), 'light-grey');
    changeClr($('#L7'), 'black');
    changeClr($('#R7'), 'black');
    changeClr($('#L8'), 'light-grey');
    changeClr($('#R8'), 'light-grey');
    changeClr($('#L9'), 'dark-grey');
    changeClr($('#R9'), 'dark-grey');
    changeClr($('#L10'), 'black');
    changeClr($('#R10'), 'black');
    changeClr($('#L11'), 'dark-blue');
    changeClr($('#R11'), 'dark-blue');

    whiteCenter();
}

