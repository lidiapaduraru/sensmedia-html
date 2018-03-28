/*Bootstrap Carousel Touch Slider.
 http://bootstrapthemes.co
 
 Credits: Bootstrap, jQuery, TouchSwipe, Animate.css, FontAwesome
 
 */

( function ( $ ) {
    "use strict";

    $.fn.bsTouchSlider = function ( options ) {
        var carousel = $( "#bootstrap-touch-slider" );
        return this.each( function ( ) {

            function doAnimations( animatingElems ) {
                //Cache the animationend event in a variable
                var animEndEv = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                animatingElems.each( function ( ) {
                    var $this = $( this ),
                        $animationType = $this.data( 'animation' );
                    $this.addClass( $animationType ).one( animEndEv, function ( ) {
                        $this.removeClass( $animationType );
                    } );
                } );
            }

            //Variables on page load
            var $firstAnimatingElems = carousel.find( '.item:first' ).find( "[data-animation ^= 'animated']" );
            //Initialize carousel
            carousel.carousel( );
            //Animate captions in first slide on page load
            doAnimations( $firstAnimatingElems );
            carousel.find('.carousel-inner').children(':nth-child(2)').delay(1000).queue(function(){
                $(this).addClass('shaded');
                $(this).clearQueue();
            });
            //Other slides to be animated on carousel slide event
            carousel.on( 'slide.bs.carousel', function ( e ) {
                var $animatingInElems = $( e.relatedTarget ).find( "[data-animation ^= 'animated']" );
                doAnimations( $animatingInElems );
                $( '#bootstrap-touch-slider .item' ).removeClass('shaded');
            } );

            var csize = carousel.find('.carousel-inner').children().size();
            carousel.on( 'slid.bs.carousel', function ( e ) {
                if(csize > 1){
                    if($( e.relatedTarget ).index() + 1 == csize){
                        var $nextElem = $( e.relatedTarget ).parent().children(':first-child');
                    }else{
                        var $nextElem = $( e.relatedTarget ).next();
                    }
                    $nextElem.delay(1000).queue(function(){
                        $(this).addClass('shaded');
                        $(this).clearQueue();
                    });
                }
            });

        } );
    };


} )( jQuery );


