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
    });
});