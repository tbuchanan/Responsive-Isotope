$(document).ready(function() {

    // masonry grid init
    var $gridContainer = $('#masonryGrid');

    $gridContainer.isotope({
      layoutMode : 'masonry',
      itemSelector : '.tile',
      resizesContainer: true
    });

});