    var navFunc = function() {
         if ($('.navigation').css('display') == 'none'){
           $('.fa-bars').removeClass('fa-bars').addClass('fa-times');
           $('.navigation').removeClass('easeOut');
           $('.navigation').addClass('easeIn');
           $('.navigation').css('height', '300px');
         }
         else{
           $('.fa-times').removeClass('fa-times').addClass('fa-bars');
           $('.navigation').removeClass('easeIn');
           $('.navigation').addClass('easeOut');          
         }
         if ($('.navigation').css('display') == 'none'){
             $('.navigation').show();
             $('.navbar').css('position', 'relative').css('padding-right', '15px').css('margin-left', '0');
             $('.navbar span').css('color', 'rgb( 236, 94, 8 )');
         }
         else{
             setTimeout(function(){$('.navigation').hide();}, 700);
             $('.navbar').css('position', 'fixed').css('padding-right', '45px').css('margin-left', '-65px');
             $('.navbar span').css('color', 'white');
         }
       };
       var navLiClickFunc = function(){
           $('.fa-times').removeClass('fa-times').addClass('fa-bars');
           $('.navigation').removeClass('easeIn');
           $('.navigation').hide();
           $('.navbar').css('position', 'fixed').css('padding-right', '45px').css('margin-left', '-65px');
           $('.navbar span').css('color', 'white');
       };
     $( document ).ready(function() {
         setTimeout(function(){$('.scroll-nav').show();}, 3000);
         
         $(window).scroll(function() {
             $('.navbar-row').each(function(){
                  var topOfWindow = $(window).scrollTop();
                  //for nav bar color change
                  if ($('.navbar').css('position') == 'fixed'){
                      if (topOfWindow > 1000) {
                          $('.navbar').css('background', 'rgb( 3, 72, 102 )');
                      }
                      else if(topOfWindow <= 0){
                          $('.navbar').css('background', 'transparent');
                      }
                      else{
                          var navOpacity = topOfWindow / 1000;
                          $('.navbar').css('background', 'rgba( 3, 72, 102,' + navOpacity + ')');
                      }
                  }
                  else {$('.navbar').css('background', 'transparent');}
             });
          })
    });