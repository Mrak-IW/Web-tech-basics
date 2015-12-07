var resElem = $("<p></p>");

function testResult() {
	var sum = 0
	var max = 0;
	var checkGroups = [];
	var mustChecked;
	
	$(":checkbox").each(function(index, elem){
		var el = $(elem);
		if (checkGroups[el.attr("name")] === undefined) {
			checkGroups[el.attr("name")] = {};
			checkGroups[el.attr("name")].right = 0;
			checkGroups[el.attr("name")].countRight = 0;
			max++;
		}
		
		mustChecked = decode(+el.val(), +el.attr("code"));
		
		if (mustChecked) {
			checkGroups[el.attr("name")].countRight++;
			if (el.prop("checked")) {
				checkGroups[el.attr("name")].right++;
			}
		}
		
		if (!mustChecked && el.prop("checked")) {
			checkGroups[el.attr("name")].right--;
		}
	});
	
	$(":radio").each(function(index, elem){
		var el = $(elem);
		
		mustChecked = decode(+el.val(), +el.attr("code"));
		
		if(mustChecked) {
			if (el.prop("checked")) {
				sum++;
			}
			max++;
		}
	});
	
	
	for (var i in checkGroups) {
		if (checkGroups[i].right > 0) {
			sum += checkGroups[i].right / checkGroups[i].countRight;
		}
	}
	
	resElem.html("Ваш результат: " + sum + "/" + max);
	$(".body").append(resElem);
}

function decode(value, code) {
	var pow2;
	
	pow2 = 1 << value;
	
	return (code & pow2) != 0;
}