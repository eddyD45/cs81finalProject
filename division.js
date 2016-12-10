window.onload = mathProb(0);
function mathProb(c) {
	var a = Math.floor(Math.random() * (100 - 1) + 1);
	var b = Math.floor(Math.random() * (10 - 1) + 1);
	var count = c;
	var answer = 0;
	var remainder = 0;
	var userAnswer = 0;
	var userRemainder = 0;
	
	if(a > b) {
		answer = Math.floor(a / b);
		remainder = a % b;
		userAnswer = parseInt(window.prompt("What is " + a + " / " + b + "? (Without remainder)"));
		userRemainder = parseInt(window.prompt("What is the remainder of " + a + " / " + b +"?"));
	}
	else if (b > a) {
		answer = b / a;
		remainder = b % a;
		userAnswer = parseInt(window.prompt("What is " + b + " / " + a + "?"));
		userRemainder = parseInt(window.prompt("What is the remainder of " + b + " / " + a + "?"));
	}
	if (userAnswer == answer && userRemainder == remainder) {
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
