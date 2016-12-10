window.onload = mathProb(0);
function mathProb(c) {
	var a = Math.floor(Math.random() * (100 - 1) + 1);
	var b = Math.floor(Math.random() * (100 - 1) + 1);
	var count = c;
	
	var answer = a + b;

	var userAnswer = parseInt(window.prompt("What is " + a + " + " + b + "?"));
	if (userAnswer == answer) {
		alert("Correct!");
		count++;
		mathProb(count);
	}
	else {
		alert("Wrong");
		document.writeln("<h2>You got " + count + " questions correct!</h2>");
	}
}

function refresh() {
	location.reload();
}

