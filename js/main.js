$(document).ready(function() {
    $('body').scrollspy({ target: '.navbar-spy' })

    $(window).scroll(function() {
          
                    var topOfWindow = $(window).scrollTop();
                    var bottomOfWindow = $(window).height();

                    //for nav bar color change
                        if (topOfWindow > 700) {
                            // $('.navbar').css('background', 'rgb( 3, 72, 102 )');
                            var navOpacity = topOfWindow / bottomOfWindow;
                            $('.navbar').css('background', 'rgba( 3, 72, 102,' + navOpacity + ')');
                            $('#nav-logo').css('display', 'block');
                        }
                        else if (topOfWindow < 700){
                             var navOpacity = topOfWindow / 700;
                            $('.navbar').css('background', 'rgba( 3, 72, 102,' + navOpacity + ')');
                        }
                        else{
                            $('.navbar').css('background', 'transparent');
                        }

                           
                    })
                     var bioFunc = function(bioNum){
                $('.pic-row div.active').removeClass('active');
                $('.bio-row div').css('display', 'none');
                if (bioNum == 1){
                    $('.pic1').addClass('active');
                    $('.bio-1').css('display','block');
                }
                else if (bioNum == 2){
                    $('.pic2').addClass('active');
                    $('.bio-2').css('display','block');
                }
                else if (bioNum == 3){
                    $('.pic3').addClass('active');
                    $('.bio-3').css('display','block');
                }
                else{
                    $('.pic4').addClass('active');
                    $('.bio-4').css('display','block');
                }
            }
            $('.pic1').mouseover(function(){
                $('.pic-row div.active').removeClass('active');
                $('.bio-row div').css('display', 'none');
                $('.pic1').addClass('active');
                $('.bio-1').css('display','block');
            });
            $('.pic2').mouseover(function(){
                $('.pic-row div.active').removeClass('active');
                $('.bio-row div').css('display', 'none');
                $('.pic2').addClass('active');
                $('.bio-2').css('display','block');
            });
            $('.pic3').mouseover(function(){
                $('.pic-row div.active').removeClass('active');
                $('.bio-row div').css('display', 'none');
                $('.pic3').addClass('active');
                $('.bio-3').css('display','block');
            });
            $('.pic4').mouseover(function(){
                $('.pic-row div.active').removeClass('active');
                $('.bio-row div').css('display', 'none');
                $('.pic4').addClass('active');
                $('.bio-4').css('display','block');
            });

            $('#myModal').modal('toggle');
})
