$(document).ready(function() {

	$('.work-link').click(function() {
		$('.work-holder').addClass('work-active');
		$('.holder').addClass('inactive');
	});
	$('.work-close').click(function() {
		$('.work-holder').removeClass('work-active');
		$(this).toggleClass('work-spin');
		$('.holder').removeClass('inactive');
	});

	$('.about-link').click(function() {
		$('.about-holder').addClass('about-active');
		$('.holder').addClass('inactive');
	});
	$('.about-close').click(function() {
		$('.about-holder').removeClass('about-active');
		$(this).toggleClass('about-spin');
		$('.holder').removeClass('inactive');
	});

	var name = $('form[name="name"]').value();
	var email = $('form[name="_reply2"]').vaule();
	var message = $('form[name="message"]').vaule();

	
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
