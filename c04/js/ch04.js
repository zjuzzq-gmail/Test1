var score = 90;
if (score > 50) {
	document.write('You passed!');
} 
else {
	document.write('Try again...');
}

var today = new Date();
if (today.getHours() >= 17) {
	document.write('You are late!');
}
else {
	document.write('Keep going...');
}

var today = 10 / 'NBA';
document.write('<br>');
document.write(today);

var today = 'NBA' / 10;
document.write('<br>');
document.write(today);

if (document.getElementById('info')) {
	document.write('<br>info exist');
} else {
	document.write('<br>info doesnot exist');
}

if (false == 0) {
	document.write('<br>false == 0: true');
} else {
	document.write('<br>false == 0: false');	
}

if (false === 0) {
	document.write('<br>false === 0: true');
} else {
	document.write('<br>false === 0: false');	
}


if (false == '') {
	document.write("<br>false == '': true");
} else {
	document.write("<br>false == '': false");	
}

if (false === '') {
	document.write("<br>false === '': true");
} else {
	document.write("<br>false === '': false");	
}

if (0 == '') {
	document.write("<br>0 == '': true");
} else {
	document.write("<br>0 == '': false");	
}

if (0 === '') {
	document.write("<br>0 === '': true");
} else {
	document.write("<br>0 === '': false");	
}

if (undefined == null) {
	document.write("<br>undefined == null: true");
} else {
	document.write("<br>undefined == null: false");	
}

if (undefined === null) {
	document.write("<br>undefined === null: true");
} else {
	document.write("<br>undefined === null: false");	
}

if (null == false) {
	document.write("<br>null == false: true");
} else {
	document.write("<br>null == false: false");	
}

if (undefined == false) {
	document.write("<br>undefined == false: true");
} else {
	document.write("<br>undefined == false: false");	
}

if (NaN == null) {
	document.write("<br>NaN == null: true");
} else {
	document.write("<br>NaN == null: false");	
}

if (NaN == NaN) {
	document.write("<br>NaN == NaN: true");
} else {
	document.write("<br>NaN == NaN: false");	
}

// SHORT CIRCUIT VALUES
var artist = 'Rembrandt';
var artistA = (artist || 'Unknown');
document.write("<br>");
document.write(artistA);

var artist = '';
var artistA = (artist || 'Unknown');
document.write("<br>");
document.write(artistA);

var artist = '';
var artistA = (artist || {});
document.write("<br>");
document.write({});

// USING FOR LOOPS
for (var i = 0; i < 10; i++) {
	document.write("<br>");
	document.write(i)
	i += 1;
}

var scores = [24, 32, 17];
var arrayLength = scores.length;
var roundNumber = 0;
var msg = '<br/>';
var i;

for (i=0; i<arrayLength; i++) {
	roundNumber = i+1;
	msg += 'Round ' + roundNumber + ': ';
	msg += scores[i] + '<br/>';
}
document.write(msg);
//var el = document.getElementById('answer');
//el.innerHTML = msg;

msg = '<br/>';
i = 1;
while (i < 10) {
	msg += i + ' x 9 = ' + 9*i + '<br>';
	i += 1;
}
document.write(msg);

msg = '<br>';
i = 1;
do {
	msg += i + ' x 9 = ' + 9*i + '<br>';
	i += 1;
} while (i < 10)
document.write(msg);


