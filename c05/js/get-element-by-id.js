var el;
//el = document.getElementById('one');
//el = document.querySelector('.hot');
//el.className = 'cool';

var elements;
//elements = document.getElementsByClassName('hot');
//elements = document.getElementsByTagName('li');
/*
elements = document.querySelectorAll('.hot');

if (elements.length >= 1) {
	var firstItem = elements.item(0);
}
firstItem.className = 'complete';
*/

elements = document.getElementsByClassName('hot');
if (elements.length > 2) {
	el = elements[2];
	el.className = 'cool';
}
