/*!
 * jQuery Box roll slider
 * http://completebaltics.com/blog/jquery-roll-slider/
 * 
 * Copyright (c) 2014 Complete Baltics ltd. Kasparas Skripkauskas
 * Dual licensed under the MIT and GPL licenses.
 */

// Frok me on GitHub: https://github.com/CompleteBaltics/boxroll-slider
// 
// About: Examples
// 
// The working example
// Basic example     - http://completebaltics.com/www/boxroll-slider/
// 
// Usage example:
// Add the javascript file jquery.boxroll-slider.js or jquery.boxroll-slider.min.js to your html documents <HEAD>
// Add the css file jquery.boxroll-slider.css to your documents <HEAD>
// 
// Use this code with your own selector to initialize the plugin
// $('#slide-container').boxRollSlider({
//  items: '.items', - default is the containers children
//  timer: 7000, - interval to change slides default is 2000ms
// });
// 
// If height has changed you can also update the slider by calling this function
// $('#slide-container').boxRollSlider('update');
// 
// jQuery Versions - 1.8+
// 
// if css animations are not supported the plugin degrades to javascript crossfade
// 

(function ( $ ) {
    $.fn.boxRollSlider = function(options) {
      
      if(options === 'update' && $(this).hasClass('boxroll-slider')){
        update();
      }
      // set defaults
      var defaults = {
        container: $(this), // store the container
        items: $(this).children(), // store default slides
        timer: 2000, // set interval
      };
      
      // merge settings with the defaults
      $.extend(defaults, options);
      
      var items = defaults.container.find(defaults.items); // get the slides
      var height = Math.round(defaults.container.height()/2); // get the half height of container
      var transitionend = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend'; // add strings for css animation events with browser prefixes
      var current = 0; // set current slide to zero
      var count = items.length-1; // get the total slides in container
      var int; // create a variable for the interval id
      
      // test if the browser supports css animation
      var thisBody = document.body || document.documentElement,
      thisStyle = thisBody.style,
      
      // if support is TRUE then css animations are supported
      support = thisStyle.transition !== undefined || thisStyle.WebkitTransition !== undefined || thisStyle.MozTransition !== undefined || thisStyle.MsTransition !== undefined || thisStyle.OTransition !== undefined;

      
      // add slider class to container
      defaults.container.addClass('boxroll-slider');
      // add slide class to slides, also set the proper css transorm
      items.addClass('boxroll-slider-item').css('transform','rotateX(-90deg) translate3d( 0px, ' + height + 'px, ' + height + 'px )');

      // add the proper css thansform to the first slide
      items.eq(current).css({'transform':'rotateX(0deg) translate3d( 0px, 0px, 0px )', 'opacity':1, 'z-index': 1, 'visibility':'visible'});
      
      // set the ticker
      int = window.setInterval(function(){
        brains();
      }, defaults.timer);

      // recalculate the css transform when the browser window is resized
      $(window).resize(function(){
        update();
      });
      
      $(document).ready(function(){
        // bind window focus and blur events to stop the ticker and reinitialize it when the tab loses and gains focus
        $(window).on("focus",function(){
          int = window.setInterval(function(){
            brains();
          }, defaults.timer);
        }).on("blur", function(){
          window.clearInterval(int);
        });
      });

      // the brains of the animation
      function brains(){
        // check if css aniamtion is suported
        if(support){
          // animate the active slide
          items.eq(current).css({'transform':'rotateX(90deg) translate3d( 0px, ' + (-height) + 'px, ' + height + 'px )', 'z-index': 0, 'opacity':0}).on(transitionend, function(){
            // hide it when not in view
            $(this).unbind(transitionend).css({'transform':'rotateX(-90deg) translate3d( 0px, ' + height + 'px, ' + height + 'px )', 'z-index': -1, 'opacity':1,'visibility':'hidden'});
          });
        }else{
          // if css animations are not supported start fade out
          items.eq(current).css({'z-index':0, 'visibility':'visible'});
        }
        // change the active slide variable
        if(current < count){
          current++;
        }else{
          current = 0;
        }
        // check if css aniamtion is suported
        if(support){
          // show the new active slide
          items.eq(current).css({'transform':'rotateX(0deg) translate3d( 0px, 0px, 0px )', 'visibility':'visible'}).on(transitionend, function(){
            $(this).unbind(transitionend).css({'z-index':1});
          });
        }else{
          // fade in the new slide
          items.eq(current).css({'z-index':1, 'visibility':'visible', 'opacity':0}).animate({'opacity':1},1000);
        }
      }
      
      // update css transform
      function update(){
        var it = defaults.container.find('.boxroll-slider-item');
        // reset the container height
        height = Math.round(it.height()/2);
        // iterate through slides and change css transform
        it.each(function(){
          // set a diffrent css transform to the slide before the current
          items.eq(current-1).css({'transform':'rotateX(90deg) translate3d( 0px, ' + (-height) + 'px, ' + height + 'px )'});
          // set a diffrent css transform to the current slide
          items.eq(current).css({'transform':'rotateX(0deg) translate3d( 0px, 0px, 0px )'});
          // set a diffrent css transform to all other slides
          items.not(':eq(' + current + '), :eq(' + (current-1) + ')').css({'transform':'rotateX(-90deg) translate3d( 0px, ' + height + 'px, ' + height + 'px )'});
        });
      }
      
      return $(this);
    };
}( jQuery ));
