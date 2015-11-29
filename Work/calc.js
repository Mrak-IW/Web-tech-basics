var arg1 = null;		//Первый аргумент выражения
var arg2 = null;		//Второй аргумент выражения
var operation;			//Символ выполняемой операции (+-*/)
var memory;				//Временное хранилище для одного из аргументов
var memoryOperation;	//Временное хранилище для операции с этим аргументом
var errDiv0 = false;
var input;				//Поле ввода калькулятора
var output;				//Элемент для вывода результата

//Задание обработчиков кнопок калькулятора
function handlersInit(frmName, inputName, idOutputElem) {
	var form = document[frmName];
	input = form.elements[inputName];
	output = document.getElementById(idOutputElem);
	
	var elem;
	for (var i = 0; i < form.elements.length; i++) {
		elem = form.elements[i];
		//console.log(elem.value);
		if (elem.type == "button") {
			if (!isNaN(elem.value)) {
				elem.onclick = function() {
					btnDigit(this.value);
				}
				// REM Никогда не делать ТАК:
				// elem.onclick = function() {
					// btnDigit(elem.value);
				// }
				// Результат сломал мне мозг O_o
			} else {
				switch (elem.value) {
					case "C":
						elem.onclick = btnReset;
						break;
					case "±":
						elem.onclick = btnChangeSign;
						break;
					case "=":
						elem.onclick = btnEqual;
						break;
					case ".":
						elem.onclick = btnDot;
						break;
					case "=":
						elem.onclick = btnEqual;
						break;
					case "+":
					case "-":
					case "*":
					case "/":
						elem.onclick = function() {
							btnBinaryOperation(this.value);
						}
						break;
				}
			}
		}
	}
}

//Обработчик цифровой кнопки
function btnDigit(digit) {
	var outText = "";
	input.value += digit;
	printResult(outText);
}

//Обработчик кнопки сброса
function btnReset() {
	var outText = "&nbsp;";
	resetcalc();
	input.value = null;
	printResult(outText);
}

//Обработчик кнопки ±
function btnChangeSign() {
	var outText = "";
	var buf = -+input.value;
		input.value = buf;
	printResult(outText);
}

//Обработчик кнопки .
function btnDot() {
	var outText = "";
	if (input.value.indexOf(".") < 0) {
		if (input.value == "") {
			input.value = "0" + ".";
		} else {
			input.value += ".";
		}
	}
	printResult(outText);
}

//Обработчик кнопки =
function btnEqual() {
	var outText = "";
	if (arg1 != null) {
		arg2 = +input.value;
		outText = arg1 + " " + operation + " " + arg2 + " = ";
		input.value = execute();
		if (errDiv0 == false) {
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
		}
	} else {
		outText = input.value;
	}
	printResult(outText);
}

//Обработчик кнопки с бинарной операцией
function btnBinaryOperation(opText) {
	var newOperation = opText;
	var outText = "";
	switch (newOperation) {
		//Бинарные операции с низким приоритетом
		case "+":
		case "-":	
			if (arg1 != null) {	//В этом случае сейчас будет задан второй аргумент и можно начинать вычисления
				arg2 = +input.value;
				execute ();
				if (errDiv0) {
					break;
				}
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
			if (arg1 != null) {	//В этом случае сейчас будет задан второй аргумент и можно начинать вычисления
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
		default:
			alert("Вызвана неизвестная бинарная операция \"" + newOperation + "\"");
	}
	printResult(outText);
}

//Выполнить операцию, заданную в operation над arg1 и arg2 с записью в arg1
function execute() {
	errDiv0 = false;
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
			if (arg2 == 0) {
				errDiv0 = true;
			}
			arg1 = arg1 / arg2;
			break;
	}
	arg2 = null;
	return arg1;
}

//Выводит результат работы команды на интерфейс
function printResult(outText) {
	if (arg1 != null) {
		outText = arg1 + " " + operation + " " + input.value;
	} else if (outText == "") {
		outText = input.value;
	}
	if (memory != null && memoryOperation != null) {
		outText = memory + " " + memoryOperation + " " + outText;
	}
	if (errDiv0 == true) {
		resetcalc();
		outText = "ОШИБКА: Деление на ноль.";
		input.value = "";
	}
	output.innerHTML = outText;
	input.focus();
}

//Сброс внутреннего состояния калькулятора в начальное
function resetcalc() {
	arg1 = null;
	arg2 = null;
	operator = null;
	memory = null;
	memoryOperation = null;
	errDiv0 = false;
}