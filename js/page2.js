/**
 * Created by jand on 12/08/16.
 */
$(document).ready(function(){
    $('.golf-kid').on('click', function(){
        $('.golf-kid').animate({
            opacity: '0.0',
            height:'0%',
            width: '0%'
        }, 'slow');
        $('.main').removeClass('non-active');
    });


    $('.cta').on('click', function(){
        $('.eckdaten').show({

        }, 'slow');


        $('.eckdaten').removeClass('non-active');
    });
});