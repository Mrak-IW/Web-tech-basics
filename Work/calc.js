var arg1 = null;
var arg2 = null;
var memory;
var operation;
var operationMemory;

function btnHandler(formName, inputName, outputName) {
	var input = document[formName].elements[inputName];
	var newOperation = this.value;
	var outText = "";
	
	switch(newOperation) {
		case "±":
			if (arg1 != null) {
				arg2 = -+input.value;
				input.value = arg2;
				arg2 = null;
			} else {
				arg1 = -+input.value;
				input.value = arg1;
				arg1 = null;
			}
			break;
		case ".":
			if(input.value.indexOf(newOperation) < 0) {
				if(input.value == "") {
					input.value = "0" + newOperation;
				} else {
					input.value += newOperation;
				}
			}
			break;
		case "0":
		case "1":
		case "2":
		case "3":
		case "4":
		case "5":
		case "6":
		case "7":
		case "8":
		case "9":
			input.value += newOperation;
			break;
		case "C":
			arg1 = null;
			arg2 = null;
			operator = null;
			memory = null;
			operatorMemory = null;
			input.value = null;
			outText = "reset";
			break;
		case "=":
			if (arg1 != null) {
				arg2 = +input.value;
				outText = arg1 + " " + operation + " " + arg2 + " = ";
				input.value = execute();
				outText += input.value;
				operation = null;
				arg1 = null;
			} else {
				outText = input.value;
			}
			break;
		default:	//Бинарные операции
			if (arg1 == null) {
				arg1 = +input.value;
			} else {
				arg2 = +input.value;
				execute ();
			}
			input.value = "";
			operation = newOperation;
	}
	if(arg1 !=null) {
		outText = arg1 + " " + operation + " " + input.value;
	} else if (outText == ""){
		outText = input.value;
	}
	document.getElementsByName(outputName)[0].textContent = outText;
	input.focus();
}

function execute() {
	switch (operation) {
		case "+":
			arg1 = arg1 + arg2;
			break;
		case "-":
			arg1 = arg1 - arg2;
			break;
		case "*":
			arg1 = arg1 * arg2;
			break;
		case "/":
			arg1 = arg1 / arg2;
			break;
	}
	//arg1 = null;
	arg2 = null;
	return arg1;
}