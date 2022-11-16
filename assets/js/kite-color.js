$( document ).ready(function() {
    /* Bind a click event to each panel in the kite's svg */
    $('.revolution-reflex .panel').on("click", function () {
        /* Discover the currently selected colour */
        let clr = $('input[name="clrs"]:checked').val();

        /* Clear out old classes */
        $(this).removeClass();

        /* Add the chosen class. It should correspond to the 
         * colours set up in the kite-color.css file */
        $(this).addClass("panel " + clr);
        
        /* Show the chosen colour in the relevant display. */
        let disp = "#display-" + this.id;
        $(disp).text(clr);
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

    // Toggle between editing and screenshot modes
    // Called from both modes by different buttons

    function screenshotToggle() {
        $('.kite-colorizer p').toggle();
        $('.toolbox').toggle();
        $('#show-toolbox').toggle();
    }
});
