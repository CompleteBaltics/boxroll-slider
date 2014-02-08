<h1>3D Rolling box slide show</h1>
==============

A jQuery slider plugin to create great looking 3D roling box slide show

About: Examples
 
The working example
Basic example     - http://completebaltics.com/www/boxroll-slider/
 
Usage example:
Add the javascript file jquery.boxroll-slider.js or jquery.boxroll-slider.min.js to your html documents <HEAD>
Add the css file jquery.boxroll-slider.css to your documents <HEAD>
 
Use this code woth your own selector to initialize the plugin

$('#slide-container').boxRollSlider({<br/>
 items: '.items', // default is the containers childre<br/>
 timer: 7000, // interval to change slides default is 2000ms<br/>
});
 
 If height has changed you can also update the slider by calling this function<br/>
 $('#slide-container').boxRollSlider('update');
 
 jQuery Versions - 1.8+
 
 if css animations are not supported the plugin degrades to javascript crossfade event
