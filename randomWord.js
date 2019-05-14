function loadText() {
	var stringAllText = JSON.stringify(allText);
	var myText = JSON.parse(stringAllText);
	var s = myText[0].content;

	document.getElementById('changeButton').focus();
	
	return s;
}

function displayRandomWord() {
	var s = loadText();
	
	var sentences = s.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|")
	var sentenceItem = sentences[Math.floor(Math.random()*sentences.length)];
	
	var punctuationless = s.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?0-9«<>≪≫]/g,"");
	var finalString = punctuationless.replace(/\s{2,}/g," ");
	var wordItems = finalString.split(' ');
	var wordItem = wordItems[Math.floor(Math.random()*wordItems.length)];


	//TODO: add color change of text on button press
	if (document.getElementById("sentence").checked == true) {
		document.getElementById("changeButton").innerHTML = sentenceItem;
	  } else {
		document.getElementById("changeButton").innerHTML = wordItem.toLowerCase();
	  }
 
}
