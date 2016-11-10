var fs = require('fs');

function insertinarray (errors, content) {
	var arr = content.split(":")
	var sum = arr.reduce(function(a, b){ return (parseInt(a) + parseInt(b))});
	var average = sum / arr.length;
	console.log(average);
	fs.writeFile('text2.txt', average, 'utf8')

}

fs.readFile('text.txt', 'utf8', insertinarray);



