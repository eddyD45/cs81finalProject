window.onload = mathProb(0);
function mathProb(c) {
	var a = Math.floor(Math.random() * (100 - 1) + 1);
	var b = Math.floor(Math.random() * (100 - 1) + 1);
	var count = c;
	var answer = 0;
	var userAnswer = 0;
	
	if(a > b) {
		answer = a - b;
		userAnswer = parseInt(window.prompt("What is " + a + " - " + b + "?"));
	}
	else {
		answer = b - a;
		userAnswer = parseInt(window.prompt("What is " + b + " - " + a + "?"));
	}

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
