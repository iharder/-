$('.main > .nav > .title').click(function(event) {
	$('.title').removeClass('active');
	// if ($(this).className = 'title') {
	// 	$(this).addClass('active')
	// } else {
	// 	$(this).className = 'title';
	// }
	$(this).addClass('active');
	$('.content').text($(this).text());
})