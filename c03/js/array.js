var hotels = ['Quay', 'Park', 'Beach', 'Bloomsbury'];
var rooms = [10, 20, 30, 40];

var elName = document.getElementById('hotelName');
elName.textContent = hotels[3];

//var elRooms = document.getElementById('rooms');
//elRooms.textContent = rooms[3];

//document.write(document.title);
//document.write(document.lastModified);
//document.write(document.URL);

var msg = '<p><b>page title: </b>' + document.title + '<br />';
msg += '<p><b>page address: </b>' + document.URL + '<br />';
msg += '<p><b>last modified: </b>' + document.lastModified + '<br />';

var saying = 'Home sweet home ';
msg = saying.length + '<br>';
msg += saying.toUpperCase() + '<br>';
msg += saying.toLowerCase() + '<br>' ;
msg += saying.charAt(0) + '<br>' ;
msg += saying.indexOf('o') + '<br>' ;
msg += saying.lastIndexOf('o') + '<br>' ;
msg += saying.substring(5, 9) + '<br>' ;

rooms = saying.split(' ');
var room = rooms[0] + '<br>';
room += rooms[1] + '<br>';
room += rooms[2] + '<br>';
//room += rooms[3] + '<br>';
//room += rooms[4] + '<br>';
elName.innerHTML = room;

msg += '|' + saying.trim() + '|<br>' ;

msg += '|' + saying.replace(' ', '_') + '|<br>' ;

// NUMBER OBJECT
var originalNumber = 10.23456;
msg += '<h2>original number</h2><p>' + originalNumber + '</p>';
msg += '<h2>toPrecision()</h2><p>' + originalNumber.toPrecision(3) + '</p>' ;
msg += '<h2>toFixed()</h2><p>' + originalNumber.toFixed(3) + '</p>' ;
msg += '<h2>toExponential()</h2><p>' + originalNumber.toExponential() + '</p>' ;

// MATH OBJECT
msg += '<h2>Math.PI</h2><p>' + Math.PI + '</p>' ;
msg += '<h2>Math.sqrt()</h2><p>' + Math.sqrt(originalNumber) + '</p>' ;
msg += '<h2>Math.ceil()</h2><p>' + Math.ceil(originalNumber) + '</p>' ;
msg += '<h2>Math.floor()</h2><p>' + Math.floor(originalNumber) + '</p>' ;
msg += '<h2>Math.random()</h2><p>' + Math.random() + '</p>' ;

msg += '<h2>Random number</h2><p>' + Math.floor(Math.random()*10 +1)  + '</p>' ;

// DATE OBJECT
var today = new Date();
msg += '<h2>today</h2><p>' + today + '</p>' ;

msg += '<h2>getDay()</h2><p>' + today.getDay() + '</p>' ;

msg += '<h2>getFullYear()</h2><p>' + today.getFullYear() + '</p>' ;

msg += '<h2>getHours()</h2><p>' + today.getHours() + '</p>' ;

msg += '<h2>getMilliseconds()</h2><p>' + today.getMilliseconds() + '</p>' ;

msg += '<h2>getMinutes()</h2><p>' + today.getMinutes() + '</p>' ;

msg += '<h2>getMonth()</h2><p>' + today.getMonth() + '</p>' ;

msg += '<h2>getSeconds()</h2><p>' + today.getSeconds() + '</p>' ;

msg += '<h2>getTime()</h2><p>' + today.getTime() + '</p>' ;

msg += '<h2>getTimezoneOffset()</h2><p>' + today.getTimezoneOffset() + '</p>' ;

msg += '<h2>toDateString()</h2><p>' + today.toDateString() + '</p>' ;

msg += '<h2>toTimeString()</h2><p>' + today.toTimeString() + '</p>' ;

var est = new Date('Apr 16, 1996 15:45:55');
var difference = today.getTime() - est.getTime();
difference = difference / 31556900000;

msg += '<h2>Years of online travel advice</h2><p>' + Math.floor(difference) + ' years of online travel advice</p>' ;


var elRooms = document.getElementById('rooms');
elRooms.innerHTML = msg;


