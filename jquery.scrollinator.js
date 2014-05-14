/*
	jQuery.Scrollinator
	https://github.com/code-for-coffee/jquery.scrollinator/
*/
$.fn.scrollinate = function(onScrollUp, onScrollDown) {
	var restingScrollPosition = undefined;
	$(this).scroll(function(evt) {
		var y = $(this).scrollTop();
		if (y < restingScrollPosition) {
			onScrollUp(this);
		} else {
			onScrollDown(this);
		}
		restingScrollPosition = y;
	})
};