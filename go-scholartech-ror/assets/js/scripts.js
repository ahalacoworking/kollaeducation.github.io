		 /*-----------------------------------------------------------------------------------*/
         /* 	LIST EXPANDER
         /*-----------------------------------------------------------------------------------*/
		(function(global, $){
			$('.gallery-items').imagelistexpander({
				prefix: "gallery-"
			});
		})(this, jQuery)
         /*-----------------------------------------------------------------------------------*/
         /* 	ANIMATION
         /*-----------------------------------------------------------------------------------*/
         var wow = new WOW({
             boxClass:     'animate',      // animated element css class (default is wow)
             animateClass: 'animated', // animation css class (default is animated)
             offset:       100,          // distance to the element when triggering the animation (default is 0)
             mobile:       false        // trigger animations on mobile devices (true is default)
         });
         wow.init();
          /*-----------------------------------------------------------------------------------*/
         /* 	360 VIEW
         /*-----------------------------------------------------------------------------------*/
         <!--

            -->
          /*-----------------------------------------------------------------------------------*/
         /* 	TABS
         /*-----------------------------------------------------------------------------------*/
         $(document).ready(function(){
             $(".nav-tabs a").click(function(){
                 $(this).tab('show');
             });
         });
         $(document).ready(function(){
             $(".gallery-item a").click(function(e){
                 $(this).tab('show');
             });
         });
		  /*-----------------------------------------------------------------------------------*/
         /* 	MOBILE MENU
         /*-----------------------------------------------------------------------------------*/
         $(document).ready(function(){
             $(".mobmenu").click(function(){
                 $('.colMenu').toggleClass('open')
             });
         });
		  /*-----------------------------------------------------------------------------------*/
         /* 	SMOOTHMENU
         /*-----------------------------------------------------------------------------------*/
         $(function() {
           $('a[href*="#"]:not([href="#"])').click(function() {
             if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
               var target = $(this.hash);
               target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
               if (target.length) {
                 $('html, body').animate({
                   scrollTop: target.offset().top
                 }, 1000);
                 return false;
               }
             }
           });
         });
		  /*-----------------------------------------------------------------------------------*/
         /* 	RESPONSIVE BLOCKS
         /*-----------------------------------------------------------------------------------*/
		 if ($(window).width() < 960) {
		   $(".mopen").css("height",1700);
		   $(".bumbleBee-A-Block").css("max-height",1200);
		}
		else {
		  // alert('More than 960');
		}

		 $(function () {
			$('.plus').on('click',function(){
				var $qty=$(this).closest('div').find('.qty');
				var currentVal = parseInt($qty.val());
				if (!isNaN(currentVal)) {
					$qty.val(currentVal + 1);
				}
			});
			$('.minus').on('click',function(){
				var $qty=$(this).closest('div').find('.qty');
				var currentVal = parseInt($qty.val());
				if (!isNaN(currentVal) && currentVal > 0) {
					$qty.val(currentVal - 1);
				}
			});
		});

		// ===== Scroll to Top ====
		$(window).scroll(function() {
		    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
		        $('#return-to-top').fadeIn(200);    // Fade in the arrow
		    } else {
		        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
		    }
		});
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
