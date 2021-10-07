jQuery(document).ready(function($) {
    $('a.stop').click(function(e){

        e.preventDefault();
        $(this).toggleClass('active');

        var text = $(this).html();
        $(this).text( text == "Green Light" ? "Red Light" : "Green Light");

        $('#egg-loop').each(function(){
            $(this).toggleClass('paused');
        });

    });
});