$( document ).ready(function() {
    function fillClr(elem) {
        let clr = $('input[name="clrs"]:checked').val();
        $(elem).removeClass();
        $(elem).addClass("panel " + clr);
    }

    $('#L1').click(function () {
        fillClr(this);
    });

    $('#L2').click(function () {
        fillClr(this);
    });
});
