$(function() {
	$('#dinwei').mousemove(function() {
		$(this).css({
			'border-color': '#CCCCCC',
			'background-color': '#fff'
		})
		$('#dw-lis').show().mouseout(function() {
			$(this).hide()
			$('#dinwei').css({
				'border-color': 'transparent',
				'background-color': '#E3E4E5'
			})
		})
	}).mouseout(function() {
		$('#dinwei').css({
			'border-color': 'transparent',
			'background-color': '#E3E4E5'
		})
		$('#dw-lis').hide()
	})

	$('#dw-lis li').click(function() {
		$(this).addClass('clicked').siblings('li').removeClass('clicked')
		var value = $(this).html()
		$('#dinwei span').html(value);
	})

	$('#top-g button').click(function() {
		$('#top-g').hide();
	})

	//top-nav
	$(document).scroll(function() {
		if($(document).scrollTop() > 730) {
			$('#top-nav').slideDown();
		} else {
			$('#top-nav').slideUp();
		}
	})
	//top-nav  end

	//轮播
	var i = 0;

	function sh() {
		clearInterval(s);
		$('.inner-t img').eq(i).fadeIn(500).siblings('img').fadeOut(500);
		$('.inner-t-lis b').eq(i).addClass('inlick').siblings('b').removeClass('inlick');
	}

	function auto() {
		s = setInterval(function() {
			i++;
			if(i > 8) {
				i = 0;
			}
			sh(i);
		}, 3000)
	}

	auto();

	$('.inner-t-lis b').on({
		"mouseover": function() {
			clearInterval(s);
			i = $(this).index();
			sh(i);
		},

		"mouseout": function() {
			auto();
		},
	})

	$('.inner-t-r').click(function() {
		clearInterval(s);
		i++;
		if(i > 7) {
			i = 0;
		}
		sh(i);
	})

	$('.inner-t-l').click(function() {
		clearInterval(s);
		i--;
		if(i < 0) {
			i = 7;
		}
		sh(i);
	})
	//轮播  end

	//倒计时
	var timer = function() {
		var time_start = new Date().getTime(); //设定当前时间
		var time_end = new Date("2019/02/16 00:00:00").getTime(); //设定目标时间	
		// 计算时间差 
		var time_distance = time_end - time_start;
		// 天
		var int_day = Math.floor(time_distance / 86400000)
		time_distance -= int_day * 86400000;
		// 时
		var int_hour = Math.floor(time_distance / 3600000)
		time_distance -= int_hour * 3600000;

		int_hour = int_day * 24 + int_hour;
		// 分
		var int_minute = Math.floor(time_distance / 60000)
		time_distance -= int_minute * 60000;
		// 秒 
		var int_second = Math.floor(time_distance / 1000)
		// 时分秒为单数时、前面加零 
		if(int_day < 10 && int_day > 0) {
			int_day = "0" + int_day;
		}
		if(int_hour < 10 && int_hour > 0) {
			int_hour = "0" + int_hour;
		}
		if(int_minute < 10 && int_minute > 0) {
			int_minute = "0" + int_minute;
		}
		if(int_second < 10 && int_second > 0) {
			int_second = "0" + int_second;
		}

		// 显示时间 
		$('#djs-h').html(int_hour);
		$('#djs-m').html(int_minute);
		$('#djs-s').html(int_second);

	}
	// 设置定时器
	setInterval(timer, 1000);
	//倒计时 end

	//倒计时-无缝
	var index = 1,
		wid = $('.ms-lb li:first').outerWidth(true),
		len = $('.ms-lb li').size(),
		step = 4,
		max = Math.ceil(len / step), // 最大页数
		stepWidth = step * wid, // 图片滚动的总宽度
		timer,
		str = '';

	// 点击右按钮 从右往左走（负）
	$('.ms-lb-r').click(function() {
		play(index + 1);
	});
	// 点击左按钮 从左往右走（正）
	$('.ms-lb-l').click(function() {
		play(index - 1);
	});

	// 给不是整屏的页加空 li
	function addli(n) {
		var st = '';
		for(var i = 0; i < n; i++) {
			st += '<li></li>';
		}
		return st;
	}
	$('.ms-lb ul').append(addli(step - len % step));
	lis = $('.ms-lb li');

	// 初始化
	lis.slice(0, step).clone().appendTo($('.ms-lb ul'));
	lis.slice(-step).clone().prependTo($('.ms-lb ul'));
	$('.ms-lb ul').css({
		marginLeft: -stepWidth
	});

	function play(nums) {
		if(!$('.ms-lb ul').is(':animated')) {
			var dir = nums > index ? -1 : 1,
				n = Math.abs(nums - index);
			$('.ms-lb ul').animate({
				marginLeft: '+=' + stepWidth * dir * n
			}, 500, function() {
				if(nums > max) {
					nums = 1;
					$('.ms-lb ul').css({
						marginLeft: -stepWidth
					});
				} else if(nums <= 0) {
					nums = max;
					$('.ms-lb ul').css({
						marginLeft: -stepWidth * max
					});
				}
				index = nums;
			});
		}
	}
	//倒计时-无缝end

	//倒计时右侧
	$('.jpms-lis div').mousemove(function() {
		$(this).css('background', '#E33333').siblings('div').css('background', '#C0C0C0');
		$('.jpms img').eq($(this).index()).fadeIn().siblings('img').fadeOut();
	})
	//倒计时右侧  end

	$('.box-lis-nav a').mousemove(function() {
		$(this).css('color', '#E33333').siblings('a').css('color', '#666666');
		$('.box-fy').eq($(this).index()).show().siblings('.box-fy').hide();
	})

	//特色推荐
	var t = 0;

	function tl() {
		$('.box-lbt ul').eq(t).show(500).siblings('ul').hide();
		$('.box-lbt-btn i').eq(t).addClass('boxclick').siblings('i').removeClass('boxclick');
	}

	function tslbt() {
		s = setInterval(function() {
			t++;
			if(t > 3) {
				t = 0;
			}
			tl(t);
		}, 3000)
	}

	tslbt();

	$('.box-lbt-btn i').on({
		"mouseover": function() {
			clearInterval(s);
			t = $(this).index();
			tl(t);
		},

		"mouseout": function() {
			auto();
		},
	})

	$('.box-lbt-r').click(function() {
		clearInterval(s);
		t++;
		if(t > 3) {
			t = 0;
		}
		tl(t);
	})

	$('.box-lbt-l').click(function() {
		clearInterval(s);
		t--;
		if(t < 0) {
			t = 3;
		}
		tl(t);
	})
	//特色推荐  end

	//瀑布流
	$(document).scroll(function() {
		// 每次滚到到底部 就请求数据

		// 文档总高度
		var aHeight = $(document).height();

		// 可视区域高度
		var cHeight = $(window).height();

		// 滚动高度
		var sHeight = $('html,body').scrollTop();

		// 每次滚到到底部=总高度-可视区域高度
		if(aHeight - cHeight <= sHeight) {
			// 建立ajax请求数据
			$.get('php/index.php', function(msg) {
				msg = JSON.parse(msg);

				// 声明空格字符串
				var str = '';
				for(var i in msg) {
					str += '<img src="' + msg[i]["pic"] + '">';
				}
				//输出
				if(aHeight < 20000) {
					$('#pbl').append(str);
				}
			});
		}
	})
	//瀑布流  end

})