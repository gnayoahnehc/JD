$(function() {

	(function() {
		// 页面加载完成开启遮罩
		$(".bar").show();
		$(".bar").css({
			"width": $(document).width(),
			"height": $(document).height(),
		})

		var l = $(document).width() - $('#show').width();
		var t = $(document).height() - $('#show').height();

		$('#show').show().css({
			'left': l / 2 + 'px',
			'top': t / 2 + 'px',
		});

	})()

	//同意并继续
	$("button").eq(0).click(function() {
		$(".bar").hide();
		$("#show").hide();
	})

	// 拖拽 按下 移动 抬起
	$("#show").mousedown(function(e) {
		// 鼠标指针
		$(this).css("cursor", "move")
		// 获取当前show的偏移值
		var offset = $(this).offset();
		var x = e.pageX - offset.left;
		var y = e.pageY - offset.top;
		// x  y 鼠标在show中按下的位置

		$(document).mousemove(function(e) {
			// 移动的距离=当前的坐标-xy
			var ll = e.pageX - x;
			var tt = e.pageY - y;

			//判断边界
			if(ll <= 0) {
				ll = 0
			} else if(ll >= $(document).width() - $("#show").width()) {
				ll = $(document).width() - $("#show").width();
			}

			if(tt <= 0) {
				tt = 0
			} else if(tt >= $(document).height() - $("#show").height()) {
				tt = $(document).height() - $("#show").height();
			}

			// 赋值
			$("#show").css({
				left: ll + 'px',
				top: tt + 'px'
			});
		})

	})

	// 鼠标抬起
	$(document).mouseup(function() {
		$(this).off("mousemove");
		$("#show").css("cursor", "")

	})

	//手机验证
	$('.phone').on({
		'focus': function() {
			$(this).css('border-color', '#999');
			$('#warn').css('opacity', '1');
		},
		'blur': function() {
			$(this).css('border-color', '#ddd');
			$('#warn').css('opacity', '0');

			if($(this).val().length < 11 && $(this).val().length > 0) {
				$('#warn').css({
					'color': '#ff9911',
					'opacity': '1',
				}).html('格式错误');
			}
		}
	})

	var reg = /^[1][3,4,5,7,8][0-9]{9}$/;

	$('button').click(function() {
		if($('.phone').val().length == 0) {
			$('#warn').css({
				'color': '#ff9911',
				'opacity': '1',
			}).html('请输入手机号');
		} else if(reg.test($('.phone').val())) {
			alert('当前号码可用');
		} else {
			$('#warn').css({
				'color': '#ff9911',
				'opacity': '1',
			}).html('格式错误');
		}
	})
	//手机验证  end

})