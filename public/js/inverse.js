/*
 * Tooltip script 
 * powered by jQuery (http://www.jquery.com)
 * 
 * written by Alen Grakalic (http://cssglobe.com)
 * 
 * for more info visit http://cssglobe.com/post/1695/easiest-tooltip-and-image-preview-using-jquery
 *
 */
 


this.tooltip = function(){	
	/* CONFIG */		
		xOffset = 10;
		yOffset = 20;		
		// these 2 variable determine popup's distance from the cursor
		// you might want to adjust to get the right result		
	/* END CONFIG */		
	$("a.tooltip").hover(function(e){											  
		this.t = this.title;
		this.title = "";									  
		$("body").append("<p id='tooltip'>"+ this.t +"</p>");
		$("#tooltip")
			.css("top",(e.pageY - xOffset) + "px")
			.css("left",(e.pageX + yOffset) + "px")
			.fadeIn("fast");		
    },
	function(){
		this.title = this.t;		
		$("#tooltip").remove();
    });	
	$("a.tooltip").mousemove(function(e){
		$("#tooltip")
			.css("top",(e.pageY - xOffset) + "px")
			.css("left",(e.pageX + yOffset) + "px");
	});			
};



// starting the script on page load
$(document).ready(function(){
	tooltip();
	
});

$(function(){

	/* B & W STYLE */
	/*if ( $.cookie('style') == undefined )
	{
		//alert('cookie');
		setBlackCookie();
	}
	else
	{
		//alert( $.cookie('style') );
		if ($.cookie('style') == 'white')
			setWhiteStyle();
		else
			setBlackStyle();
		
	}*/
	
	$('#blackstyle').click(setBlackCookie);
	$('#whitestyle').click(setWhiteCookie);

	
	
	// 
	
	/* ARCHIVE COLUMN HEIGHT */
	/*var maxheight = 0;
	$('.archiveyear').each(function(){	// get max height
		if ( $(this).height() > maxheight )
			maxheight = $(this).height();
	});
	$('.archiveyear').height( maxheight );
	*/
	
	function setWhiteCookie(){
		setWhiteStyle();
		$.cookie('style', 'white', { path: '/'});
		return false;	
	}
	
	function setBlackCookie(){
		setBlackStyle();
		$.cookie('style', 'black', { path: '/' });
		return false;	
	}
	
	function setWhiteStyle(){
		$('body').css('background-color', '#FFF');
		$('body').css('color', '#000');
		$('header').css('background-color', '#FFF');
		$('.overlay').css('background-color', '#fff');
		$('div').css('color', '#000');
		$('footer').css('color', '#000');
		$('footer').css('border-top', '1.5px solid #000');
		$('span').css('color', '#000');
		$('.nav').css('border-bottom', '1.5px solid #000');
		$('.menuhomelink').css('border-bottom', '1.5px solid #000');
		$('.mobile-nav').css('border-bottom', '1.5px solid #000');
		$('.menuhomelink').css('background-color', '#fff');
		$('.box3').addClass('line-right').css('border-right', '1.5px solid #000');
		$('li').css('color', '#000');
		$('overlay').css('color', '#000');
		$('button').css('color', '#000');
		$('a').css('color', '#000');
		$('a').hover(
			function(){
				$(this).css({'color':'#000'});
			}, function(){
				$(this).css({'color':'#000'});
		});
		return false;	
	}
	
	
	function setBlackStyle(){
		$('body').css('background-color', '#000');
		$('body').css('color', '#FFF');
		$('header').css('background-color', '#000');
		$('.nav').css('border-bottom', '1.5px solid #fff');
		$('.menuhomelink').css('border-bottom', '1.5px solid #fff');
		$('.mobile-nav').css('border-bottom', '1.5px solid #fff');
		$('.menuhomelink').css('background-color', '#000');
		$('.overlay').css('background-color', '#000');
		$('.box3').addClass('line-right').css('border-right', '1.5px solid #fff');
		$('div').css('color', '#FFF');
		$('footer').css('color', '#FFF');
		$('footer').css('border-top', '1.5px solid #FFF');
		$('span').css('color', '#FFF');
		$('li').css('color', '#fff');
		$('overlay').css('color', '#fff');
		$('button').css('color', '#fff');
		$('a').css('color', '#FFF');
		$('a').hover(
			function(){
				$(this).css({'color':'#fff'});
			}, function(){
				$(this).css({'color':'#FFF'});
		});
		return false;	
	}
	
});