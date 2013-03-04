/*!
 * Packery site scripts
 */

( function( window ) {

'use strict';

// global namespace, PS = Packery Site
var PS = window.PS = {};
// hash of page controllers
PS.pages = {};

// ----- dependencies ----- //

var docListener = window.docListener;

// -------------------------- page controller -------------------------- //

docListener.on( 'ready', function() {
  // get name of page
  var pageAttr = document.body.getAttribute('data-page');
  // trigger controller if there
  if ( typeof PS[ pageAttr ] === 'function' ) {
    PS[ pageAttr ]();
  }

  var navContainer = document.querySelector('#site-nav .packery');
  var navPckry = new Packery( navContainer, {
    columnWidth: 20,
    rowHeight: 20,
    gutter: 4
  });
  var itemCount = 0;
  function addItem() {
    var item = document.createElement('div');
    var wRand = Math.random();
    var widthClass = wRand > 0.9 ? 'w4' :
      wRand > 0.7 ? 'w2' : '';
    var hRand = Math.random();
    var heightClass = hRand > 0.9 ? 'h4' :
      hRand > 0.7 ? 'h2' : '';
    item.className = 'item ' + widthClass + ' ' + heightClass;
    navContainer.appendChild( item );
    var draggie = new Draggabilly( item );
    navPckry.bindDraggabillyEvents( draggie );
    navPckry.appended( item );
    itemCount++;
    if ( itemCount < 20 ) {
      setTimeout( addItem, 100 );
    }
  }
  addItem();
  // var itemElems = navPckry.getItemElements();
  // for ( var i=0, len = itemElems.length; i < len; i++ ) {
  //   var elem = itemElems[i];
  //   var draggie = new Draggabilly( elem );
  //   navPckry.bindDraggabillyEvents( draggie );
  // }


});



// -------------------------- helpers -------------------------- //

PS.getSomeItemElements = function() {
  var fragment = document.createDocumentFragment();
  var items = [];
  for ( var i=0; i < 3; i++ ) {
    var item = document.createElement('div');
    var wRand = Math.random();
    var widthClass = wRand > 0.85 ? 'w4' :
      wRand > 0.7 ? 'w2' : '';
    var hRand = Math.random();
    var heightClass = hRand > 0.85 ? 'h4' :
      hRand > 0.7 ? 'h2' : '';
    item.className = 'item ' + widthClass + ' ' + heightClass;
    fragment.appendChild( item );
    items.push( item );
  }
  // ex7.appendChild( fragment );
  // return
};

})( window );