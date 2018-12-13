$(function() {
	// top
	$('#dinwei').mousemove(function() {
		$(this).css({
			'border-color': '#A2A2A2',
			'background-color': '#fff',
		})
		$('#dw-lis').show().mouseout(function() {
			$(this).hide()
			$('#dinwei').css('border-color', 'transparent')
		})
	}).mouseout(function() {
		$('#dinwei span').css('background-color', '#E3E4E5')
		$('#dinwei').css('border-color', '#E3E4E5');
		$('#dw-lis').hide();
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

	//放大镜
	// small中移动事件
	$("#small").mousemove(function(e) {
		// move big显示
		$("#move,#big").show();

		// 获取移动的值
		var x = e.pageX - $('#small_pic').offset().left - $("#move").width() / 2 + 75;
		var y = e.pageY - $('#small_pic').offset().top - 75;
		// 判断边距
		if(x <= 75) {
			x = 75
		} else if(x >= $('#small_pic').width() - $("#move").width() + 75) {
			x = $('#small_pic').width() - $("#move").width() + 75
		}

		if(y <= 0) {
			y = 0
		} else if(y >= $('#small_pic').height() - $("#move").height()) {
			y = $('#small_pic').height() - $("#move").height()
		}
		// 赋值
		$("#move").css({
			left: x + 'px',
			top: y + 'px'
		});


		//大图与小图的比例
		var scale = $("#big>img").width() / $("#small>img").width();

		// 大图的容器 元素的滚动
		$("#big").scrollTop(y * scale - 80);
		$("#big").scrollLeft(x * scale - 220);

	}).mouseout(function() {
		// move big隐藏
		$("#move,#big").hide();
	})

	// 鼠标悬停更换图片
	$('#dian li img').mousemove(function() {
		$('#dian li img').css('border-color', 'transparent')
		$(this).css('border-color', '#282828');
		$('#small>img,#big>img').attr("src", $(this).attr("src"));
	})

	//上一张   下一张   完善中...
//	var dian_l = $('#dian ul').position().left;
//	left.onclick = function() {
//			dian_l += -79
//			$('#dian ul').css('left', dian_l + 'px')
//	}
	// 右击
//	right.onclick = function() {
//		dian_l += 79
//		$('#dian ul').css('left', dian_l + 'px')
//	}
	
	//放大镜  end
	
	$('#xp-r-lis li').click(function(){
		$(this).addClass('yisck').siblings('li').removeClass('yisck');
	})
	
	$(window).scroll(function() {
		if($(document).scrollTop() > 745) {
			$('#xp-top').addClass('xp-top-fix');
		} else {
			$('#xp-top').removeClass('xp-top-fix');
		}
	})
})