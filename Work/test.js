var resElem = document.createElement("p");

function testResult() {
	var pointOfInsert = document.querySelector("form");
	var elems = document.forms[0].elements;
	var sum = 0
	var max = 0;
	var checkGroups = [];
	
	for (var i = 0; i < elems.length; i++) {
		if ((elems[i].type == "checkbox") || (elems[i].type == "radio")) {
			if (checkGroups[elems[i].name] === undefined) {
				checkGroups[elems[i].name] = true;
				max++;
			}
			if ((elems[i].value == 1) && !elems[i].checked || !(elems[i].value == 1) && elems[i].checked) {
				checkGroups[elems[i].name] = false;
			}
		}
	}
	
	for (var i in checkGroups) {
		if (checkGroups[i]) {
			sum++;
		}
	}
	
	resElem.innerHTML = "Ваш результат: " + sum + "/" + max;
	pointOfInsert.appendChild(resElem);
}