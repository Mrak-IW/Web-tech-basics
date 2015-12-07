var resElem = document.createElement("p");

function testResult() {
	var pointOfInsert = document.querySelector("form");
	var elems = document.forms[0].elements;
	var sum = 0
	var max = 0;
	var checkGroups = [];
	var mustChecked;
	var ans;
	var pow2;
	for (var i = 0; i < elems.length; i++) {
		mustChecked = decode(+elems[i].value, +elems[i].getAttribute("code"));
		
		switch (elems[i].type)
		{
			case "checkbox":
				if (checkGroups[elems[i].name] === undefined) {
					checkGroups[elems[i].name] = {};
					checkGroups[elems[i].name].right = 0;
					checkGroups[elems[i].name].countRight = 0;
					max++;
				}
				
				if (mustChecked) {
					checkGroups[elems[i].name].countRight++;
					if (elems[i].checked) {
						checkGroups[elems[i].name].right++;
					}
				}
				
				if (!mustChecked && elems[i].checked) {
					checkGroups[elems[i].name].right--;
				}
				
				break;
				
			case "radio":
				if(mustChecked) {
					if (elems[i].checked) {
						sum++;
					}
					max++;
				}
				break;
		}
		
	}
	
	for (var i in checkGroups) {
		if (checkGroups[i].right > 0) {
			sum += checkGroups[i].right / checkGroups[i].countRight;
		}
	}
	
	resElem.innerHTML = "Ваш результат: " + sum + "/" + max;
	pointOfInsert.appendChild(resElem);
}

function decode(value, code) {
	var pow2;
	
	pow2 = 1 << value;
	
	return (code & pow2) != 0;
}