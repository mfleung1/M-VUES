$(function(){
    $('div.go-up-nav').click(function(event){
          $('body,html').animate({ scrollTop: 0 }, 550);
      });

      /*about me*/
      $('#headingZero').on('shown.bs.collapse', function (){
        $('div#headingZero font.cross-button').removeClass('cross-button').addClass('cross-buttona');
      })
      $('#headingZero').on('hidden.bs.collapse', function (){
        $('div#headingZero font.cross-buttona').removeClass('cross-buttona').addClass('cross-button');
      })

      /*servers*/
      $('#headingOne').on('shown.bs.collapse', function (){
        $('div#headingOne font.cross-button').removeClass('cross-button').addClass('cross-buttona');
      })
      $('#headingOne').on('hidden.bs.collapse', function (){
        $('div#headingOne font.cross-buttona').removeClass('cross-buttona').addClass('cross-button');
      })

      /*provision and provision*/
      $('#headingThree').on('shown.bs.collapse', function (){
        $('div#headingThree font.cross-button').removeClass('cross-button').addClass('cross-buttona');
      })
      $('#headingThree').on('hidden.bs.collapse', function (){
        $('div#headingThree font.cross-buttona').removeClass('cross-buttona').addClass('cross-button');
      })

      $('.header_display_menus').each(function(){
        $('li.master-navgition').find("div.general-div").mouseover(function(){
          $(this).prev('div.master-navgition').children('a').css("border-bottom",'2px solid #111')
        }).mouseout(function(){
         $(this).prev('div.master-navgition').children('a').removeAttr("style");
        });
      })
    });

     // nav-bar buttons
      // nav-width 
      var nav_widths = $("div#navbarTogglerDemo01").innerWidth();
     $("nav.navbar-expand-md button#navbar-toggler").click(function(e){
      $('body,html').animate({scrollTop:0},100);
      $('body').animate({
          foo:nav_widths
          },{
          step:function(now,fx){
            $(this).css({"overflow":"hidden","transform":"translate("+now+"px,-87px)"});
          },
          duration:600
        });
      $('#black-nav-responses').css({'left':'0','display':'block'});

      // black-nav
        $("#black-nav-responses").click(function(event){
          $(this).css({'left':'-100%','display':'none'});
          $('body').animate({
            foo:0
            },{
            step:function(now,fx){
              $('body').css({"overflow":"hidden","transform":"translate("+now+"px,-87px)"}) 
              $('body').removeAttr('style');
            },
            duration:600
          });
        });
});
