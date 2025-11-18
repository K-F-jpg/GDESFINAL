$(document).ready(function(){
    // $(".instagram").click(function(){
    //     // $(".inner-body").toggleClass("show");
    //     $(".info-column-start").toggleClass("show");
    // })

    // $(".snapchat").click(function(){
    //     // $(".inner-body").toggleClass("show");
    //     $(".info-1").toggleClass("show");
    // })

    // $(".circle").click(function(){
    //     $(".info-column-start").toggleClass("show");
    //     $(".inner-body").toggleClass("show");
    // })

    // $(".test-button").click(function(){
    //     $(".circle").css('background-image', 'url(MEDIA/ascii-art.png)')
    //     // $('body').css('background-color', 'black')
    //     $('.animation-container').toggleClass('on');
    // })

    // $(".circle").css('background-image', 'url(MEDIA/ascii-art.png)').delay(5000);

    // setTimeout(function(){
    //     $('.circle').toggleClass('on')
    // }, 2000);

    setTimeout(function(){
        $('.person-text').contents().filter(function(){
            return this.nodeType == 3
        }).each(function(){
            this.textContent = this.textContent.replace('Searching User...','User Found!');
        })

        $('.circle').css('background-image', 'url(MEDIA/pfpbefore.png)', 'background-size', '700px', '700px');
    }, 6000);

    setTimeout(function(){
        $('.the-bar').toggleClass('gone');
        $('body').toggleClass('animate');
        $('.circle').toggleClass('on');

        setTimeout(function(){
            $('.circle').animate({top: '50px'});
        }, 300, 'easeInElastic');

        $('.content-scan').toggleClass('on');
    }, 8000);

    // setTimeout(function(){
    //     $('.circle').css('background-image', 'url(MEDIA/ascii-art.png)');
    //     $('.circle').fadeIn(3000);
    // }, 9000);

    // setTimeout(function(){
    //     $('.circle').toggleClass('on');
    //     $('.circle').css('background-image', 'url(MEDIA/ascii-art.png)');
    // }, 11000);

    

    // $('.test-button').click(function(){
    //     // alert('hi');
    //     $('.circle').animate({top: '30px'});
    // })

})