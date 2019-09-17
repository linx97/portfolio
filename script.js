$(document).ready(function() {

		    
	var loadingText = anime({
	  targets: '.loading-screen p, #progressbar, #loading',
	  opacity: 0,
	  duration: 11000,
	  delay: 14700
	});

	var loadingOne = anime({
	  targets: '.loading-screen.one',
	  translateY: '100%',
	  easing: 'easeInSine',
	  duration: 3000,
	  delay: 15000
	});

	var loadingOne = anime({
	  targets: '.loading-screen.two',
	  translateY: '-100%',
	  easing: 'easeInSine',
	  duration: 4000,
	  delay: 15200
	});

	$(document).mousemove(function(event) {
		cx = Math.ceil($(window).width() / 1.8);
		cy = Math.ceil($(window).height() / 1.8);
		dx = event.pageX - cx;
		dy = event.pageY - cy;

		var tiltx;
		if(dy < 310) {
			tiltx = (dy / cy);
		} else {
			tiltx = (310 / cy);
		}
		tilty = -(dx / cx);
		radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2));
		degree = (radius * 20);

		$('#head').css('-webkit-transform', 'rotate3d(' + -tiltx + ', ' + -tilty + ', 0, ' + degree + 'deg)');
		$('#head').css('transform', 'rotate3d(' + -tiltx + ', ' + -tilty + ', 0, ' + degree + 'deg)');

		ballCoords();

	});

	setTimeout(function(){

		var rect1 = anime({
		  targets: '.rect-1',
		  translateX: '-600%',
		  width: {
		    value: '+=500',
		    duration: 5000,
		    easing: 'easeInCirc'
		  },
		  easing: 'easeInOutQuart',
		  duration: 5000,
		  direction: 'reverse',
		  begin: function(anim) {
		    setTimeout(function(){
		      $('.rect-1').show()
		    }, 100)
		  }
		});

		var rect2 = anime({
		  targets: '.rect-2',
		  translateY: '500%',
		  height: {
		    value: '+=200',
		    duration: 6000,
		    easing: 'easeInCirc'
		  },
		  easing: 'easeInOutQuart',
		  duration: 6000,
		  direction: 'reverse',
		  begin: function(anim) {
		    setTimeout(function(){
		      $('.rect-2').show()
		    }, 100)
		  }
		});

		var rect3 = anime({
		  targets: '.rect-3',
		  translateY: '-500%',
		  height: {
		    value: '+=200',
		    duration: 7000,
		    easing: 'easeInCirc'
		  },
		  easing: 'easeInOutQuart',
		  duration: 7000,
		  direction: 'reverse',
		  begin: function(anim) {
		    setTimeout(function(){
		      $('.rect-3').show()
		    }, 100)
		  }
		});

		var rect4 = anime({
		  targets: '.rect-4',
		  translateY: '-500%',
		  translateX: '500%',
		  easing: 'easeInOutQuart',
		  height: {
		    value: '+=200',
		    duration: 7500,
		    easing: 'easeInCirc'
		  },
		  width: {
		    value: '+=200',
		    duration: 7500,
		    easing: 'easeInCirc'
		  },
		  duration: 7500,
		  direction: 'reverse',
		  begin: function(anim) {
		    setTimeout(function(){
		      $('.rect-4').show()
		    }, 100)
		  }
		});

	}, 15400)

	var ball = $("#ball");

	function ballCoords(mouseEvent) {
	  var xpos;
	  var ypos;
	  
	  if (mouseEvent) {
	    
	    //FireFox
	    xpos = mouseEvent.pageX + "px";
	    ypos = mouseEvent.pageY + "px";
	    
	  } else {
	    
	    //IE
	    xpos = window.event.x + document.body.scrollLeft - 2;
	    ypos = window.event.y + document.body.scrollTop - 2;
	    
	  }
	  
	  ball.css('top', ypos);
	  ball.css('left', xpos);
	}

	$('.work-link').click(function() {
		$('.work-holder').addClass('work-active');
		$('.holder, .box-inner').addClass('inactive');
	});
	$('.work-close').click(function() {
		$('.work-holder').removeClass('work-active');
		$(this).toggleClass('work-spin');
		$('.holder, .box-inner').removeClass('inactive');
	});

	$('.about-link').click(function() {
		$('.about-holder').addClass('about-active');
		$('.holder, .box-inner').addClass('inactive');
	});
	$('.about-close').click(function() {
		$('.about-holder').removeClass('about-active');
		$(this).toggleClass('about-spin');
		$('.holder, .box-inner').removeClass('inactive');
	});

	var name = $('form[name="name"]').val();
	var email = $('form[name="_reply2"]').val();
	var message = $('form[name="message"]').val();

	
	$('.send').click(function() {
		if (name !== "" && email !== "" && message !== "") {
			$('.message-sent').toggleClass('hide');
			$('.dark').toggleClass('hide');
		}
	});
	$('.ok').click(function() {
		$('.message-sent').toggleClass('hide');
		$('.dark').toggleClass('hide');
	});
});
