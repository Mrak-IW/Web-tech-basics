var arg1 = null;
var arg2 = null;
var memory;
var operation;
var memoryOperation;

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
				
				//Проверка, нет-ли вытесненных в память операций с низким приоритетом:
				if (memory != null && memoryOperation !=null) {
					arg2 = arg1;
					arg1 = memory;
					operation = memoryOperation;
					outText = arg1 + " " + operation + " " + outText;
					memory = null;
					memoryOperation = null;
					input.value = execute();
				}
				
				outText += input.value;
				operation = null;
				arg1 = null;
			} else {
				outText = input.value;
			}
			break;
		//Бинарные операции с низким приоритетом
		case "+":
		case "-":	
			if (arg1 != null) {
				arg2 = +input.value;
				execute ();
				//Проверка, нет-ли вытесненных в память операций с низким приоритетом:
				if (memory != null && memoryOperation !=null) {
					arg2 = arg1;
					arg1 = memory;
					operation = memoryOperation;
					outText = arg1 + " " + operation + " " + outText;
					memory = null;
					memoryOperation = null;
					execute();
				}
			} else {
				arg1 = +input.value;
			}
			input.value = "";
			operation = newOperation;
			break;
		//Бинарные операции с высоким приоритетом
		case "*":
		case "/":
			if (arg1 != null) {
				if (operation == "+" || operation == "-") {
					//Вытесняем менее приоритетную операцию в память
					memory = arg1;
					memoryOperation = operation;
					arg1 = null;
					operation = null;
				} else {
					arg2 = +input.value;
					execute ();
				}
			}
			if (arg1 == null) {
				arg1 = +input.value;
			}
			input.value = "";
			operation = newOperation;
			break;
	}
	
	if (arg1 != null) {
		outText = arg1 + " " + operation + " " + input.value;
	} else if (outText == "") {
		outText = input.value;
	}
	if (memory != null && memoryOperation != null) {
		outText = memory + " " + memoryOperation + " " + outText;
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