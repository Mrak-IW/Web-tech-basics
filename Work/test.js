var resElem = document.createElement("p");

function testResult() {
	var pointOfInsert = document.querySelector("form");
	var elems = document.forms[0].elements;
	var sum = 0
	var max = 0;
	var checkGroups = [];
	for (var i = 0; i < elems.length; i++) {
		switch (elems[i].type)
		{
			case "checkbox":
				if (checkGroups[elems[i].name] === undefined) {
					checkGroups[elems[i].name] = 0;
					max++;
				}
				if ((elems[i].value == 1) && elems[i].checked) {
					checkGroups[elems[i].name] += 0.5;
				} else if ((elems[i].value == 0) && elems[i].checked){
					checkGroups[elems[i].name] -= 0.5;
				}
				break;
			case "radio":
				if(elems[i].value == 1) {
					if (elems[i].checked) {
						sum++;
					}
					max++;
				}
				break;
		}
		
	}
	
	for (var i in checkGroups) {
		sum += checkGroups[i];
	}
	
	resElem.innerHTML = "Ваш результат: " + sum + "/" + max;
	pointOfInsert.appendChild(resElem);
}