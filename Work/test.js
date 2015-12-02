var resElem = document.createElement("p");
var answers = {"rbHLink":1, "rbNumList":4, "rbMaintenanceInfo":8, "cbTable":10, "cbForm":3};

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
		ans = answers[elems[i].name];
		pow2 = Math.pow(2, +elems[i].value);
		mustChecked = ((ans - ans % pow2) / pow2) % 2 == 1;
		
		if (elems[i].name == "cbTable") {
			console.log(elems[i].name + "[" + elems[i].value + "]");
		}
		
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