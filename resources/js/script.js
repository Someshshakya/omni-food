$(document).ready(function(){
    // this is for sticky nav
    var waypoint = new Waypoint({
        element: $('.js--section-features'),
        handler: function(direction) {
        //   console.log('now u r scrolling ',direction)
          if (direction=="down"){
              $('nav').addClass("sticky");
          }else{
              $('nav').removeClass("sticky")
          }
        },
        offset:"60px"
      })
      
      // scroll to plans
      $('.js--scroll-to-plans').click(function(){
          $('body, html').animate({scrollTop:$('.js--section-plans').offset().top},1000);
      })
      
      // scrol to start
      $('.js--scroll-to-start').click(function(){
          $('body, html').animate({scrollTop:$('.js--section-features').offset().top},1000)
      })


      // Navigation scrolling 
            // Select all links with hashes
        $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
            && 
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000, function() {
                // Callback after animation
                // Must change focus!
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) { // Checking if the target was focused
                return false;
                } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
                };
            });
            }
        }
        });



        // animation on scrolling
              new Waypoint({
            element: $('.js--wp-1'),
            handler: function(direction) {
                $('.js--wp-1').addClass("animated fadeIn");
            },
            offset:"50%"
          })

          // animation on image 
          new Waypoint({
            element: $('.js--wp-2'),
            handler: function(direction) {
                $('.js--wp-2').addClass("animated fadeInUp");
            },
            offset:"50%"
          })
        
          // animation for 
          new Waypoint({
            element: $('.js--wp-3'),
            handler: function(direction) {
                $('.js--wp-3').addClass("animated fadeIn");
            },
            offset:"50%"
          })

          // animation for 
          new Waypoint({
            element: $('.js--wp-4'),
            handler: function(direction) {
                $('.js--wp-4').addClass("animated pulse");
            },
            offset:"50%"
          })


          // for mobile navigation 
          $('.js--nav-icon').click(function() {
            var nav = $('.js--main-nav');
            var icon = $('js--nav-icon i');
            nav.slideToggle(2000);
            console.log()
            console.log("started now")
            if (icon.hasClass('ion-navicon-round')){
                console.log("this is true now ")
                icon.addClass('ion-close-round');
                icon.removeClass('ion-navicon-round');
            }else{
                console.log("this is inside else block")
                icon.removeClass('ion-close-round');
                icon.addClass('ion-navicon-round');
            }
          })
}); 