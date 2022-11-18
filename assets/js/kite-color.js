/* Called by the user choosing a color and a panel and also by
 * the preset drop down */
function changeClr(elem, clr) {
    /* If this is being called from a preset scheme then we need
     * to use its first child */
    if (!elem.id) {
        elem = elem[0];
    }
    
    /* Clear out old classes */
    $(elem).removeClass();

    /* Add the chosen class. It should correspond to the 
     * colours set up in the kite-color.css file */
    $(elem).addClass("panel " + clr);
    
    /* Show the chosen colour in the relevant display. */
    let disp = "#display-" + elem.id;
    $(disp).text(clr);
}

$( document ).ready(function() {
    /* Bind a click event to each panel in the kite's svg */
    $('.revolution-reflex .panel').on("click", function () {
        let clickedWing = '';
        let otherWing = '';
        let panel = 0;
        let mirrorId = '';

        /* Discover the currently selected colour */
        let clr = $('input[name="clrs"]:checked').val();
        let mirror = $('#mirror:checked').val();
        
        /* Get the id and color and mirror to the other wing */
        if (mirror == 'on') {
            clickedWing = this.id.substr(0, 1);
            panel = this.id.substr(1);

            if (clickedWing == 'L') {
                otherWing = 'R';
            } else if (clickedWing == 'R') {
                otherWing = 'L';
            } else {
                otherWing = '';
            }

            mirrorElem = $('.panel#' + otherWing + panel);
            changeClr(mirrorElem[0], clr);
        }

        changeClr(this, clr);
    });

    /* Show/hide the labels on the panels. */
    $('.toolbox #labels').click(function() {
        $('svg.revolution-reflex text').toggle();
    });

    /* Used to get back to the full editing mode */
    $('button#show-toolbox').click(function() {
        screenshotToggle();
    });

    /* Generate a screenshot with the html2canvas library */
    $('button#html2canvas').click(function() {
        screenshotToggle();
        let shotarea = document.querySelector(".kite-colorizer");
        $(".kite-colorizer .chosen-values").css({"background-color": "white", "color": "black"});

        html2canvas(shotarea).then(canvas => {
            document.getElementById('displayCanvas').appendChild(canvas);
            // document.body.appendChild(canvas)
        });
    });

    // Toggle between editing and screenshot modes
    // Called from both modes by different buttons
    function screenshotToggle() {
        $('.kite-colorizer .kite p').toggle();
        $('.toolbox').toggle();
        $('#show-toolbox').toggle();
        $('#displayCanvas').toggle();
    }

    /* Take all color choices off */
    $('button#reset').click(function() {
        $('.revolution-reflex').children('.panel').each(function(i) {
            $(this).removeClass();
            $(this).addClass('panel');
        });
    });

    /* Central logo panel can be white on black or reversed */
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
});
