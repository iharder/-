// 定义变量
var timer = null,
	main = document.getElementById('main'),
	word = document.getElementById('word').getElementsByTagName('div'),
	banner = document.getElementById('banner').getElementsByTagName("div"),
	bannerBig = document.getElementById('banner'),
	index = 0,
	len = word.length;

// 轮播主函数
function slideImg() {
	// 鼠标主体中移动触发停止自动轮播函数
	main.onmouseover = function() {
		stopAutoPlay();
	}

	// 鼠标移开主体触发开始自动轮播函数
	main.onmouseout = function() {
		startAutoPlay();
	}

	// 第一次加载触发移开主体函数
	main.onmouseout();

	// 点击文字触发函数
	mainImg();
	bigImg();
}

// 变大函数
function bigImg() {
	bannerBig.onmouseover = function() {
		this.className = 'bannerBig';
		main.className = 'main1'
	}

	bannerBig.onmouseout = function() {
		this.className = 'banner';
		main.className = 'main';
	}	
}
// 点击文字触发切换图片函数
function mainImg() {
	for (var i = 0; i < len; i++) {
		word[i].id = i;
		word[i].onclick = function() {
			index = this.id;
			changeImg();
		}
	}
}


// 切换图片
function changeImg() {
	for (var i = 0; i < len; i++) {
		banner[i].style.display = 'none';
		word[i].className = 'innerWord';
	}
	banner[index].style.display = 'block';
	word[index].className = 'innerWord move';
}

// 开始自动轮播
function startAutoPlay() {
	timer = setInterval(function() {
		index++;
		if (index >= len) {
			index = 0;
		};
		changeImg();
	}, 3000);
}

// 停止自动轮播
function stopAutoPlay() {
	if (timer) {
		clearInterval(timer);
	};
}
// 调用主函数
slideImg();