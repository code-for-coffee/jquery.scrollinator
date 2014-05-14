$.fn.scrollinate = function(onScrollUp, onScrollDown) {
	var restingScrollPosition = undefined;
	$(this).scroll(function(evt) {
		var y = $(this).scrollTop();
		if (y < restingScrollPosition) {
			onScrollUp();
		} else {
			onScrollDown();
		}
		restingScrollPosition = y;
	})
};