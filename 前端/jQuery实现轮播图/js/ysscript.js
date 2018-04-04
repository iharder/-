function byId(id) {
	return typeof(id) === "string" ? document.getElementById(id) : id;
}


var main = byId('main'),
	banner = byId('banner'),
	pics = banner.getElementsByTagName('div'),
	len = pics.length,
	prev = byId('prev'),
	next = byId('next'),
	dots = byId('dots').getElementsByTagName('span'),
	index = 0,
	timer = null;

function startAutoPlay() {
	timer = setInterval(function() {
		index++;
		if (index >= len) {
			index = 0;
		}
		changeImg();
	}, 3000)
}

function stopAutoPlay() {
	if (timer) {
		clearInterval(timer);
	}
}

function changeImg() {
	for (var i = 0; i < len; i++) {
		dots[i].className = '';
		pics[i].style.display = 'none';
	}
	dots[index].className = 'dots-active';
	pics[index].style.display = 'block';
}

function slideImg() {
	main.onmouseover = function() {
		stopAutoPlay();
	}
	main.onmouseout = function() {
		startAutoPlay();
	}
	main.onmouseout();
	for (var i = 0; i < len; i++) {
		dots[i].id = i;
		dots[i].onclick = function() {
			index = this.id;
			changeImg();
		}
	}
	next.onclick = function() {
		index++;
		if(index >= len) {
			index = 0;
		}
		changeImg();
	}

	prev.onclick = function() {
		index--;
		if( index < 0) {
			index = len -1;
		}
		changeImg();
	}


}

slideImg();