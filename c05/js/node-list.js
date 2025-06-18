var els = document.querySelectorAll('li.hot');
if (els.length > 0) {
	for (var i = 0; i < els.length; i++) {
		els[i].className = 'cool';
	}
}
