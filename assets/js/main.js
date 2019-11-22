(function($){
    "use strict";
  
    // Top Bar Scroll
    var scrollAmount = 50;
  
    $(window).on('scroll', function(){
      if($(window).scrollTop()>=scrollAmount && !$('.header-top').hasClass('show')){
          $('.header-top').addClass('show'); 
      }
      else if($(window).scrollTop()<scrollAmount && $('.header-top').hasClass('show')){
          $('.header-top').removeClass('show') 
      }
    });
  
  
    // Bottom Bar Scroll For mobile
    var scrollAmount = 200;
  
    $(window).on('scroll', function(){
      if($(window).scrollTop()>=scrollAmount && !$('.bottom-popup').hasClass('show')){
          $('.bottom-popup').addClass('show'); 
      }
      else if($(window).scrollTop()<scrollAmount && $('.bottom-popup').hasClass('show')){
          $('.bottom-popup').removeClass('show') 
      }
    });
  
  
    
  
  })(jQuery);