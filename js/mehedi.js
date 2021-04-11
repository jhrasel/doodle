//----*************   All js code created by Mehedi Hasan  *************------
//*****************  and own created plug in               *****************************
//*************     Please Dont copy without company permisson and ligal policy ******************---------------




// ---------------------------Paralax effect by tracking mouse directions------------------------------------ 
$(".mh_projegct_images_frame, .digital-overlay ").hover(function() {
    var moveableImage = $("img", this);
    var moveableText = $("p", this);

    var rect = $(this)[0].getBoundingClientRect();
    var mouse = {
        x: 0,
        y: 0,
        moved: false
    };

    $(this).mousemove(function(e) {
        mouse.moved = true;
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });

    // Ticker event will be called on every frame
    TweenLite.ticker.addEventListener('tick', function() {
        if (mouse.moved) {
            parallaxIt(moveableText, -50);
            parallaxIt(moveableImage, -30);
        }
        mouse.moved = false;
    });

    function parallaxIt(target, movement) {
        TweenMax.to(target, 0.3, {
            x: (mouse.x - rect.width / 2) / rect.width * movement,
            y: (mouse.y - rect.height / 2) / rect.height * movement
        });
    }

    $(window).on('resize scroll', function() {
        rect = $(this)[0].getBoundingClientRect();
    })
});
// ---------------------------Paralax effect by tracking mouse directions ended------------------------------------ 



// ---------------------------------Code for customizing slider dots----------------------------------
$('.all_tand_t_elements').on('init', function(event, slick){
var dots = $( '.slick-dots li' );
//   console.log( 'Mehedi Hasan ' ); 
dots.each( function( k, v){
$(this).find( 'button' ).addClass( 'heading'+ k );
});
var items = slick.$slides;
items.each( function( k, v){
var text = $(this).find( 'h4' ).text();
$( '.heading' + k ).text(text);
});
});
// ---------------------------------Code for customizing slider dots ended----------------------------------


$('.approach_slider').on('init', function(event, slick){
    var dots = $( '.slick-dots li' );
    //   console.log( 'Mehedi Hasan ' ); 
    dots.each( function( k, v){
    $(this).find( 'button' ).addClass( 'heading'+ k );
    });
    var items = slick.$slides;
    items.each( function( k, v){
    var text = $(this).find( 'h3' ).text();
    $( '.heading' + k ).text(text);
    });
    });
// ---------------------------------Initilalized t and t slider  started ----------------------------------
$('.all_tand_t_elements').slick({
dots: true,
infinite: true,
speed: 300,
slidesToShow: 1,
adaptiveHeight: true,
arrows:false,
autoplay:true,
fade:true
});
// ---------------------------------Initilalized t and t slider  ended  ----------------------------------


//----------------------------Code for controlling slick slider  using mouse wheel-----------------------
var slider = $(".all_tand_t_elements");
slider.on('wheel', (function(e) {
e.preventDefault();
if (e.originalEvent.deltaY < 0) {
  $(this).slick('slickPrev');
} else {

   $(this).slick('slickNext');
}
}));






//----*************   All js code created by Mehedi Hasan  *************------
//*****************  and own created plug in               *****************************
//*************     Please Dont copy without company permisson and ligal policy ******************---------------




// Collision js 
function recthit(rectone, recttwo){
    
    var r1 = $(rectone);
    var r2 = $(recttwo);
    
    var r1x = r1.offset().left;
    var r1w = r1.width();
    var r1y = r1.offset().top;
    var r1h = r1.height();
    
    var r2x = r2.offset().left;
    var r2w = r2.width();
    var r2y = r2.offset().top;
    var r2h = r2.height();
    
    if( r1y+r1h < r2y ||
        r1y > r2y+r2h ||
        r1x > r2x+r2w ||
        r1x+r1w < r2x ){
        return false;
    }else{
        return true;   
    }
    
}//end function 





$(document).scroll(function(e) {

// $( ".slick-dots" ).append( $( "<div class='my_bar'> </div>" ) );
// var p_bar = $(".my_bar ").height();
// var update_p_bar = p_bar + 10;
// $(".my_bar").css({
//     'height': update_p_bar+'px'
// })

  $('.slick-dots').css({
    top: e.pageY,
    left: e.pageX
  });
  
  //one to many hit detect

    if(recthit('.slick-dots',$('#r_collaboration'))){
      $('.slick-dots, .arr_up, .arr_down').css({
        'opacity':'0'
      })
    }
    //one to many hit detect
        if(recthit('.slick-dots',$('.approach_slider'))){
            $('.slick-dots, .arr_up, .arr_down').css({
                'opacity':'1'
              })
        } 
        
        //one to many hit detect
        if(recthit('.slick-dots',$('.app_text'))){
            $('.slick-dots, .arr_up, .arr_down').css({
                'opacity':'0'
              })
        } 

}); // end mousmove

