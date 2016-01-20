// This is the script file for your in class assignment.

// jQuery Ready Function
$(function() {

    var $window = $(window);
    var $slideAd = $('#slideAd');
    var endZone = $('#footer').offset().top - $window.height() - 500;

    $window.on('scroll', function() {

        if( (endZone) < $window.scrollTop() ) {
            $slideAd.animate({'right':'0px'}, 250);
        } else {
            $slideAd.stop(true).animate( {'right':'-360px' }, 250);
        }
    });

    var $list = $('li');

    $list.on('click', function() {
        $(this).animate({
            opacity:0,
            paddingLeft: '+=500',
            //margin: 500,
            fontSize: 200,
            height: 300
        }, 600, 'swing', function (){
            $(this).slideUp(400);
        })
    });


    $list.on('mouseover', function() {
        $(this).addClass('cool');
    });

    $list.on('mouseout', function() {
        $(this).removeClass('cool');
    });
});
