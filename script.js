var main = function() {
	$('a.more-btn').click(function(){
		// $('ul.more-menu').toggle(); //this would toggle ALL OF THEM
		//console.log(this); 
		$(this).next().toggle(); //$(this) is the event target (ONLY SELECTING THE ONE BUTTON)
	});
	$('li.share').click(function(){
		$(this).next().toggle();
	});
	$('div.bell').click(function(){
		$(this).toggleClass('notification active');
	});
};

$(document).ready(main);

/*****************************************************************************
		Notes
*****************************************************************************/

/*
Project reqs: http://s3.amazonaws.com/codecademy-content/projects/2/gameboard/README.html

Objectives:
	1. Want to click more
	  - See more
	2. Toggle share element
	3. Click notification bell
		- When clicked, toggle class

	this
		-Referring to scope
		-Similar to self in ruby
		-Takes the regular DOM html element and pimps it out

  **Create CSS class that does the changes that you want to do and then add and remove classes as needed instead of trying to change the CSS itself
*/