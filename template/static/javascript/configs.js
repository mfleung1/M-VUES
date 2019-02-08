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

     // nav-bar buttons
      // nav-width 
      var nav_widths = $("div.navbar-collapse").width();
     $("nav.navbar-expand-md button#navbar-toggler").click(function(e){
      $('body,html').animate({scrollTop:0},100);
      $("header#header").css('position','relative');
      $('div.mains-content').css('margin-top','0');
      $('body').animate({
          foo:89
          },{
          step:function(now,fx){
            $(this).css({"overflow":"hidden","transform":"translate("+now+"%)"});
          },
          duration:361
        });
      $('#black-nav-responses').css({'left':'0','display':'block'});

      // black-nav
        $("#black-nav-responses").click(function(event){
          $(this).css({'left':'-100%','display':'none'});
          $("header#header").removeAttr('style');
          $('div.mains-content').removeAttr("style");
          $("ul.header_display_menus li.master-navgition").removeAttr("style");
          $('body').animate({
            foo:0
            },{
            step:function(now,fx){
              $('body').css({"overflow":"hidden","transform":"translate("+now+"px,-87px)"})
              if(fx.now == 0){
                $('body').attr('style','')
              }
            },
            duration:361
          })
          
        });
      });

      // devices
      var currents_dev_widths = $(window).width();
      if(currents_dev_widths < 768){

        $('.header_display_menus').each(function(){
          $('li.master-navgition').find("div.master-navgition").click(function(){
            $(this).find('a').unbind('mouseenter').unbind('mouseleave');
          })
        })

        $("ul.header_display_menus").each(function(){
          $(this).find("li.master-navgition").click(function(e){
            $(this).find('div.master-navgition a').attr('href','javascript:void();')
            $(this).children(".general-div").animate({
              foo:100
            },{
              step:function(now,fx){
                $(this).css("transform",'translate('+now+'%)');   
              },
              duration:360
            })
            
            e.stopPropagation();
          })

          // back up
          $(this).find("li.master-navgition").click(function(){
           $(this).find(".general-div .back-to").click(function(event){
              $(this).parents("div.general-div").animate({
                foo:0
              },{
                step:function(now,fx){
                  $(this).css("transform",'translate('+now+'%)');
                },
                duration:360
              })
              event.stopPropagation();
             });

          });
        })

        $('.header_display_menus').each(function(){
          $('li.master-navgition').find("div.general-div").mouseover(function(){
            $(this).prev('div.master-navgition').children('a').removeAttr("style");
          }).mouseout(function(){
           $(this).prev('div.master-navgition').children('a').removeAttr("style");
          });
        })
      }else{
        return;
      }

      // search mousedown
      $("#search div.form-checkout input").mousedown(function(){
        $(this).parents("li.master-navgition").siblings().css("display",'none');
      })
    });
