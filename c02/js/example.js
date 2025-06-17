// Create greeting
var greeting = 'Howdy ';
var name = 'Molly';
var message = ', please check your order!';
var welcome = greeting + name + message;

var sign = 'Montague House';
var tiles = sign.length;
var subTotal = 5 * tiles;
var shipping = 7;
var grandTotal = shipping + subTotal;

var el = document.getElementById('greeting');
el.textContent = welcome;

var elSign = document.getElementById('userSign');
elSign.textContent = sign;

var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

var elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = '$' + subTotal;

var elShipping = document.getElementById('shipping');
elShipping.textContent = '$' + shipping;

var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = '$' + grandTotal;
