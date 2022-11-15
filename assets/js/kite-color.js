$( document ).ready(function() {
    /* Bind a click event to each panel in the kite's svg */
    $('.kite-panels .panel').on("click", function () {
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
        $('svg.revolution-reflex-xx text').toggle();
    });

    $('button#ready-for-screenshot').click(function() {
        screenshotToggle();
    });

    $('button#show-toolbox').click(function() {
        screenshotToggle();
    });

    $('button#reset').click(function() {
        $('.revolution-reflex-xx').children('.panel').each(function(i) {
            $(this).removeClass();
            $(this).addClass('panel');
        });
    });

    function screenshotToggle() {
        $('.kite-panels p').toggle();
        $('.kite-panels .toolbox').toggle();
        $('#show-toolbox').toggle();
    }
});
