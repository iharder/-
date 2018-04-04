var index = 0,
	banner = $('.banner').children(),
	dots = $('.dots').children(),
	timer = null,
	prev = $('.prev'),
	next = $('.next');

function changeImg(index) {
	banner.eq(index).addClass('slide-active').siblings().removeClass('slide-active');
	dots.eq(index).addClass('dots-active').siblings().removeClass('dots-active');
};

$('.main').mouseout(function() {
	timer = setInterval(function() {
		index++;
		if(index>=banner.length) {
			index=0;
		}
		console.log(index);
		changeImg(index);
	},5000);
});

$('.main').mouseout();

$('.main').mouseover(function() {
	clearInterval(timer);
});

dots.click(function() {
	index=$(event.target).index();
	changeImg(index);
});

prev.click(function() {
	index--;
	if(index < 0) {
		index = banner.length -1;
	}
	changeImg(index);
})

next.click(function() {
	index++;
	if(index >=banner.length) {
		index =0;
	}
	changeImg(index);
})