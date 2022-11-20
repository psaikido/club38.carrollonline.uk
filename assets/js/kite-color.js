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
    $('.revolution .panel').on("click", function () {
        let clickedWing = '';
        let otherWing = '';
        let panel = 0;
        let mirrorId = '';

        /* Discover the currently selected colour */
        let clr = $('input[name="clrs"]:checked').val();

        /* What copy mode are we in? */
        let copyMode = $('input[name="copy-mode"]:checked').val();
        
        if (copyMode == 'single') {
            /* Default mode - fill chosen panel with selected color */
            changeClr(this, clr);
        } else if (copyMode == 'mirror') {
            /* Get the id and color and mirror to the other wing */
            clickedWing = this.id.substr(0, 1);
            panel = this.id.substr(1);

            if (clickedWing == 'L') {
                otherWing = 'R';
            } else if (clickedWing == 'R') {
                otherWing = 'L';
            } else {
                otherWing = '';
            }

            changeClr(this, clr);
            mirrorElem = $('.panel#' + otherWing + panel);
            changeClr(mirrorElem[0], clr);
        } else if (copyMode == 'whole-wing') {
            /* Fill in the whole wing with the selected color */
            clickedWing = this.id.substr(0, 1);

            $("[id^=" + clickedWing + "]").each(function(i) {
                changeClr(this, clr);
            });
        }
    });

    /* Bind a click event to each color's radio 
     * so that the 'current-color' can get updated 
     * with each choice. Change the whole toolbox's 
     * background color to the current choice. */
    $('.toolbox input[name="clrs"]').on("click", function () {
        let clr = 'var(--' + $(this).val() + ')';
        $(':root').css('--current-color', clr);
    });

    /* Show/hide the labels on the panels. */
    $('.toolbox #labels').click(function() {
        $('svg.revolution text').toggle();
    });

    /* Used to get back to the full editing mode */
    $('button#show-toolbox').click(function() {
        screenshotToggle();
    });

    /* Generate a screenshot with the html2canvas library */
    $('button#html2canvas').click(function() {
        screenshotToggle();
        let shotarea = document.querySelector(".kite-colorizer");
        $(".kite-colorizer .chosen-values").css({"background-color": "#343a40", "color": "#cdc8c8"});

        html2canvas(shotarea).then(canvas => {
            document.getElementById('displayCanvas').appendChild(canvas);
        });
    });

    // Toggle between editing and screenshot modes
    // Called from both modes by different buttons
    function screenshotToggle() {
        $('.header-text').toggle();
        $('.kite-colorizer .kite p').toggle();
        $('.toolbox').toggle();
        $('#show-toolbox').toggle();
        $('#displayCanvas').toggle();
    }

    /* Take all color choices off */
    $('button#reset').click(function() {
        $('.revolution').children('.panel').each(function(i) {
            $(this).removeClass();
            $(this).addClass('panel');
        });
        $("[id^=display]").each(function(i) {
            $(this).text('');
        });
    });

    /* Central logo panel can be white on black or reversed */
    $('.toolbox #reverse-center').click(function() {
        let centerPanel = $('svg.revolution #center-panel');
        let logo = $('svg.revolution .logo');

        if (centerPanel.attr("class") == 'center') {
            centerPanel.removeClass();
            centerPanel.addClass('center reverse');
            logo.children().each(function() {
                $(this).removeClass();
                $(this).addClass('logo reverse');
            });

            /* Display the choice. */
            $("#display-center-panel").text("light on dark");
        } else {
            centerPanel.removeClass();
            centerPanel.addClass('center');
            logo.children().each(function() {
                $(this).removeClass();
                $(this).addClass('logo');
            });

            /* Display the choice. */
            $("#display-center-panel").text("dark on light");
        }
    });
});
