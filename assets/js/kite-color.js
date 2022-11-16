$( document ).ready(function() {
    /* Bind a click event to each panel in the kite's svg */
    $('.revolution-reflex .panel').on("click", function () {
        /* Discover the currently selected colour */
        let clr = $('input[name="clrs"]:checked').val();
        changeClr(this, clr);
    });

    /* Show/hide the labels on the panels. */
    $('.toolbox #labels').click(function() {
        $('svg.revolution-reflex text').toggle();
    });

    /* Take out clutter for a clean screenshot */
    $('button#ready-for-screenshot').click(function() {
        screenshotToggle();
    });

    /* Used to get back to the full editing mode */
    $('button#show-toolbox').click(function() {
        screenshotToggle();
    });

    // Toggle between editing and screenshot modes
    // Called from both modes by different buttons
    function screenshotToggle() {
        $('.kite-colorizer p').toggle();
        $('.toolbox').toggle();
        $('#show-toolbox').toggle();
    }

    /* Take all color choices off */
    $('button#reset').click(function() {
        $('.revolution-reflex').children('.panel').each(function(i) {
            $(this).removeClass();
            $(this).addClass('panel');
        });
    });

    $('.toolbox #reverse-center').click(function() {
        let centerPanel = $('svg.revolution-reflex #center-panel');
        let logo = $('svg.revolution-reflex .logo');

        if (centerPanel.attr("class") == 'center') {
            centerPanel.removeClass();
            centerPanel.addClass('center reverse');
            logo.children().each(function() {
                $(this).removeClass();
                $(this).addClass('logo reverse');
            });
        } else {
            centerPanel.removeClass();
            centerPanel.addClass('center');
            logo.children().each(function() {
                $(this).removeClass();
                $(this).addClass('logo');
            });
        }
    });

    /* Preset color schemes */
    $('#presets').change(function() {
        let scheme = $(this).val();
        if (scheme == 'blackred') blackred();
        if (scheme == 'blues') blues();
        if (scheme == 'greenblack') greenblack();
    });

    /* Called by the user choosing a color and a panel and also by
     * the preset drop down */
    function changeClr(elem, clr) {
        /* Clear out old classes */
        $(elem).removeClass();

        /* Add the chosen class. It should correspond to the 
         * colours set up in the kite-color.css file */
        $(elem).addClass("panel " + clr);
        
        /* Show the chosen colour in the relevant display. */
        let disp = "#display-" + elem.id;
        $(disp).text(clr);
    }

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
        changeClr($('#L9'), 'red');
        changeClr($('#R9'), 'red');
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
        changeClr($('#L9'), 'dark-grey');
        changeClr($('#R9'), 'dark-grey');
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
        changeClr($('#L9'), 'green');
        changeClr($('#L10'), 'green');
        changeClr($('#R1'), 'black');
        changeClr($('#R2'), 'black');
        changeClr($('#R3'), 'green');
        changeClr($('#R4'), 'green');
        changeClr($('#R5'), 'black');
        changeClr($('#R6'), 'green');
        changeClr($('#R7'), 'black');
        changeClr($('#R8'), 'green');
        changeClr($('#R9'), 'black');
        changeClr($('#R10'), 'black');
    }
});
