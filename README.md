<h1>3D Rolling box slide show</h1>
==============

A jQuery slider plugin to create great looking 3D roling box slide show

About: Examples
 
The working example
Basic example     - http://completebaltics.com/www/boxroll-slider/
 
Usage example:
Add the javascript file jquery.boxroll-slider.js or jquery.boxroll-slider.min.js to your html documents <HEAD>
Add the css file jquery.boxroll-slider.css to your documents <HEAD>
 
Use this code with your own selector to initialize the plugin

$('#slide-container').boxRollSlider({<br/>
&nbsp;&nbsp;&nbsp;&nbsp;items: '.item', // default is the containers childre<br/>
&nbsp;&nbsp;&nbsp;&nbsp;timer: 7000, // interval to change slides default is 2000ms<br/>
});

HTML markup example<br/>
\<div id="slide-container"\><br/>
&nbsp;&nbsp;&nbsp;&nbsp;\<div class="item">\<img src="img/1.jpg" width="1440" />\</div><br/>
&nbsp;&nbsp;&nbsp;&nbsp;\<div class="item">\<img src="img/2.jpg" width="1440" />\</div><br/>
&nbsp;&nbsp;&nbsp;&nbsp;\<div class="item">\<img src="img/3.jpg" width="1440" />\</div><br/>
&nbsp;&nbsp;&nbsp;&nbsp;\<div class="item">\<img src="img/4.jpg" width="1440" />\</div><br/>
&nbsp;&nbsp;&nbsp;&nbsp;\<div class="item">\<img src="img/5.jpg" width="1440" />\</div><br/>
&nbsp;&nbsp;&nbsp;&nbsp;\<div class="item">\<img src="img/6.jpg" width="1440" />\</div><br/>
&nbsp;&nbsp;&nbsp;&nbsp;\<div class="item">\<img src="img/7.jpg" width="1440" />\</div><br/>
&nbsp;&nbsp;&nbsp;&nbsp;\<div class="item">\<img src="img/8.jpg" width="1440" />\</div><br/>
\</div>
 
 If height has changed you can also update the slider by calling this function<br/>
 $('#slide-container').boxRollSlider('update');
 
 jQuery Versions - 1.8+
 
 if css animations are not supported the plugin degrades to javascript crossfade
