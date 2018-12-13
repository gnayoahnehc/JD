$(function() {
	// top
	$('#dinwei').mousemove(function() {
		$(this).css('border-color', '#A2A2A2')
		$('#dw-lis').show().mouseout(function() {
			$(this).hide()
			$('#dinwei').css('border-color', 'transparent')
		})
	}).mouseout(function() {
		$('#dinwei').css('border-color', 'transparent')
		$('#dw-lis').hide()
	})

	$('#dw-lis li').click(function() {
		$(this).addClass('clicked').siblings('li').removeClass('clicked')
		var value = $(this).html()
		$('#dinwei span').html(value);
	})
	//top  end 

	//搜索框 
	$('.search').focus(function() {
		$(this).val('').css('border-color', 'transparent').siblings('.search-lis').show()
	}).blur(function() {
		$(this).val('艺术品').css('border-color', '#DFDFDF').siblings('.search-lis').hide()
	})

	//搜索框   end

	//巨幕背景切换
	var i = 0;

	function sh() {
		$('#jumbotron img').eq(i).fadeIn(1000).siblings('img').fadeOut(1000);
		$('.jumb-lis li').eq(i).addClass('curr').siblings('li').removeClass('curr');
	}

	function auto() {
		s = setInterval(function() {
			i++;
			if(i > 6) {
				i = 0;
			}
			sh(i);
		}, 4000)
	}

	auto();

	$('.jumb-lis li').on({
		"mouseover": function() {
			clearInterval(s);
			i = $(this).index();
			sh(i);
		},

		"mouseout": function() {
			auto();
		},
	})

	//巨幕背景切换  end

	//黑色导航  隐藏/出现
	$(window).scroll(function() {
		if($(document).scrollTop() > 110) {
			$('#nav-black').show();
			$('#lou').show();
		} else {
			$('#nav-black').hide();
			$('#lou').hide();
		}
	})

	//黑色导航  隐藏/出现   end

	//作品推荐
	$('.zptj-nav li').mouseover(function() {
		var m = $(this).index();
		$(this).css({
			'border-color': '#DFDFDF',
			'font-weight': 'bold',
		}).find('*').show()

		$(this).siblings('li').css({
			'border-color': 'transparent',
			'font-weight': '500',
		}).find('*').hide()

		$('.zptj-lis').eq(m).show().siblings('.zptj-lis').hide()
	})
	//作品推荐  end

	//手风琴
	$('.yszt-sfq-lis').click(function() {
		$(this).stop().animate({
			width: '468px',
		}, 400).siblings('.yszt-sfq-lis').stop().animate({
			width: '224px',
		}, 400)
	})
	//手风琴 end

	//艺术家
	var t = $('.ysj-l-drawer').position().top,
		n = 0,
		tt = $('#ysj-r-drawer').position().top;
	//上      完善中...
	$('.ysj-l em').eq(0).click(function() {
		t += 72, n += -1, tt += 352;
		if(t > 0) {
			t = -72;
		}
		$('.ysj-l-drawer').stop().animate({
			'top': t + 'px'
		});

		if(n < 0) {
			n = 3;
		}
		$('.ysj-l-drawer div').eq(n).children('b').hide();
		$('.ysj-l-drawer div').eq(n).siblings('div').children('b').show();

		if(tt > 0) {
			tt = -1056;
		}
		$('#ysj-r-drawer').animate({
			'top': tt + 'px',
		})
	})

	//下
	$('.ysj-l em').eq(1).click(function() {
		t += -72, n += 1, tt += -352;
		if(t < -72) {
			t = -72;
		}
		$('.ysj-l-drawer').stop().animate({
			'top': t + 'px',
		});

		if(n > 3) {
			n = 0;
			$('.ysj-l-drawer').stop().animate({
				'top': '0px'
			});
		}

		$('.ysj-l-drawer div').eq(n).children('b').hide();
		$('.ysj-l-drawer div').eq(n).siblings('div').children('b').show();

		if(tt < -1056) {
			tt = 0;
		}
		$('#ysj-r-drawer').animate({
			'top': tt + 'px'
		})
	})

	$('.ysj-l-drawer div').click(function() {
		$(this).children('b').hide();
		$(this).siblings('div').children('b').show();

		$('#ysj-r-drawer').animate({
			'top': $(this).index() * -352 + 'px',
		})
	})
	//艺术家  end

	//楼层
	$('#lou li').eq(0).click(function() {
		$('body,html').animate({
			"scrollTop": $('.zptj').offset().top - 30,
		}, 500)
	})

	$('#lou li').eq(1).click(function() {
		$('body,html').animate({
			"scrollTop": $('.yszt').offset().top - 30,
		}, 500)
	})

	$('#lou li').eq(2).click(function() {
		$('body,html').animate({
			"scrollTop": $('.ysjg').offset().top - 30,
		}, 500)
	})

	$('#lou li').eq(3).click(function() {
		$('body,html').animate({
			"scrollTop": $('.yishu').offset().top - 30 + 553 * ($(this).index() - 3),
		}, 500)
	})

	$('#lou li').eq(4).click(function() {
		$('body,html').animate({
			"scrollTop": $('.yishu').offset().top - 30 + 553 * ($(this).index() - 3),
		}, 500)
	})

	$('#lou li').eq(5).click(function() {
		$('body,html').animate({
			"scrollTop": $('.yishu').offset().top - 30 + 553 * ($(this).index() - 3),
		}, 500)
	})

	$('#lou li').eq(6).click(function() {
		$('body,html').animate({
			"scrollTop": $('.yishu').offset().top - 30 + 553 * ($(this).index() - 3),
		}, 500)
	})

	$('#lou li').eq($('#lou li').length - 1).click(function() {
		$('body,html').animate({
			"scrollTop": 0,
		}, 500)
	})
	//楼层  end

})