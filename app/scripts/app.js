(function(document) {
  'use strict';

  document.addEventListener('polymer-ready', function() {
    // Perform some behaviour
    console.log('Polymer is ready to rock!');
    var humap = document.querySelector('google-map');
    console.log(humap);
    var marker = document.querySelector('google-map-marker');
    console.log(humap.$.markers);
    // how do i clone and repeat templates here
  });

// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));
