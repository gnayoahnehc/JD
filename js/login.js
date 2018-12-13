$(function() {
	$('.box-top li').click(function() {
		var i = $(this).index();
		$(this).css({
			'color': '#e4393c',
			'fontWeight': 'bold',
		}).siblings('li').css({
			'fontWeight': '',
			'color': '',
		});

		$('.box-lis').eq(i).show().siblings('.box-lis').hide();
	})

	$('#people').blur(function() {
		var username = $(this).val();
		$.post('php/login.php', 'value=' + username, function(msg) {
			if(msg == 'y') {
				$('#warn').css('opacity', '0')
			} else {
				$('#warn').css('opacity', '1')
			}
		})
	})
})