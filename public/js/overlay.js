$(function() {
$('#toggle').on('click touchend', function(event) {
		  event.stopPropagation();
		  event.preventDefault();		
	    $(this).toggleClass('toggle-active');
	    $('#overlay').toggleClass('nav-active');
    });

     $("button").on("click", function() {
	  var el = $(this);
	  if (el.text() == el.data("text-swap")) {
	    el.text(el.data("text-original"));
	  } else {
	    el.data("text-original", el.text());
	    el.text(el.data("text-swap"));
	  }
	});
});