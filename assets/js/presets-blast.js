/* Preset color schemes */
$('#presets').change(function() {
    let scheme = $(this).val();
    if (scheme == 'electric') electric();
    if (scheme == 'purple') purple();
    if (scheme == 'red') red();
});

function electric() {
    changeClr($('#L1'), 'black');
    changeClr($('#R1'), 'black');
		changeClr($('#L2'), 'flo-yellow');
    changeClr($('#R2'), 'flo-yellow');
}

function purple() {
    changeClr($('#L1'), 'purple');
    changeClr($('#R1'), 'purple');
		changeClr($('#L2'), 'flo-yellow');
    changeClr($('#R2'), 'flo-yellow');
}

function red() {
	changeClr($('#L1'), 'red');
	changeClr($('#R1'), 'red');
	changeClr($('#L2'), 'white');
	changeClr($('#R2'), 'white');
}
