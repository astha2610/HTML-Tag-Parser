
var HtmlParser = function(textToParse, tagToPick) {
	var openTag = tagToPick;
  var closetag = tagToPick[0] + '/' + tagToPick.substr(1);
  var splitArray = text.split(openTag);
  var textArray = [];
  var textObject = [];

  if (splitArray[0].indexOf(closetag) === -1) {
    textObject.startText = splitArray[0];
    splitArray.shift();
  } else {
    textObject.startText = '';
  }

  splitArray.forEach(function(txt, ind) {
    var secondSplit = txt.split(closetag);
    var tempObj = {};
    tempObj.textInsideTag = secondSplit[0] || '';
    tempObj.textAfterTag = secondSplit[1] || '';
    textArray.push(tempObj);
  });

  textObject.textArray = textArray;

	return textObject;
}
