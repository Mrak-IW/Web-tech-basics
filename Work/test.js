var resElem = document.createElement("p");

function testResult() {
	var pointOfInsert = document.querySelector("form");
	var elems = document.forms[0].elements;
	var sum = 0
	var max = 0;
	for (var i = 0; i < elems.length; i++) {
		if ((elems[i].type == "radio" || elems[i].type == "checkbox") && elems[i].value == 1) {
			max++;
			if (elems[i].checked) {
				sum++;
			}
		}
	}
	
	resElem.innerHTML = "Ваш результат: " + sum + "/" + max;
	pointOfInsert.appendChild(resElem);
}