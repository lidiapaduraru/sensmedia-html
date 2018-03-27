/*Bootstrap Carousel Touch Slider.
 http://bootstrapthemes.co
 
 Credits: Bootstrap, jQuery, TouchSwipe, Animate.css, FontAwesome
 
 */

( function ( $ ) {
    "use strict";

    $.fn.bsTouchSlider = function ( options ) {
        var carousel = $( "#bootstrap-touch-slider" );
        return this.each( function ( ) {

            function doAnimations( animatingInElems, animatingOutElems ) {
                //Cache the animationend event in a variable
                var animEndEv = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                animatingInElems.each( function ( ) {
                    var $this = $( this ),
                        $animationType = $this.data( 'animation' );
                    $this.addClass( $animationType ).one( animEndEv, function ( ) {
                        $this.removeClass( $animationType );
                    } );
                } );
                if(animatingOutElems != null) {
                    animatingOutElems.each( function ( ) {
                        var $this = $( this ),
                            $animationType = "animation fadeOutRight";
                        $this.addClass( $animationType ).one( animEndEv, function ( ) {
                            $this.removeClass( $animationType );
                        } );
                    } );
                }
            }

            //Variables on page load
            var $firstAnimatingElems = carousel.find( '.item:first' ).find( "[data-animation ^= 'animated']" );
            //Initialize carousel
            carousel.carousel( );
            //Animate captions in first slide on page load
            doAnimations( $firstAnimatingElems, null );
            //Other slides to be animated on carousel slide event
            carousel.on( 'slide.bs.carousel', function ( e ) {
                var $animatingInElems = $( e.relatedTarget ).find( "[data-animation ^= 'animated']" );
                var $oldItem = $( e.relatedTarget ).next();
                var $animatingOutElems = $oldItem.find( "[data-animation ^= 'animated']" );
                doAnimations( $animatingInElems, null );
            } );

        } );
    };


} )( jQuery );


