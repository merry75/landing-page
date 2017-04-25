$('#register').click(function(event) {
	var email = $('#email').val();
	if(email == '' || email == undefined) {
		$('.error').css('display', 'block');
		$('.right-container').addClass('hasError');
		return;
	}
	console.log('redirecting');
	window.location = 'https://www.coral.co.uk/register?email=' + email;
});
$('#email').on('change', function(event) {
	$('.error').css('display', 'none');
	$('.right-container').removeClass('hasError');
});