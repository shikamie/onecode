function changeColor() {
	var hexNumber = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D", "E","F"];
	var hexCode = '';

	for (var i = 0; i < 6; i++) {
		var rndIndex = Math.floor(Math.random() * hexNumber.length)
		hexCode += hexNumber[rndIndex]
	}

	document.getElementById("hex-code").innerHTML = hexCode;
	document.getElementsByTagName("body")[0].style.background = "#" + hexCode;
}