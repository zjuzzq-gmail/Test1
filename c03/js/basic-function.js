function updateMessage(msg)
{
	var el = document.getElementById('message');
	el.textContent = msg;
}

/*
var area = function(sideA, sideB)
{
	return 0.5 * sideA * sideB;
}
*/

var area = (function(sideA, sideB){
	return 0.5 * sideA * sideB;
});

msg = area(4, 3);
msg = area(12, 5);
updateMessage(msg);

