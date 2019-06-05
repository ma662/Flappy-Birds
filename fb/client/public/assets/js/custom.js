/*global $:false, jQuery:false, console:false */
jQuery(document).ready(function($) {
  "use strict";

  // parallax setting
  $('.floatinggif').parallax("40%", 0.1);

  //navigation
  $('.navigation').onePageNav({
    begin: function() {
      console.log('start');
    },
    end: function() {
      console.log('stop');
    },
    scrollOffset: 0
  });

});