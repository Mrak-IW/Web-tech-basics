var arg1 = null;		//Первый аргумент выражения
var arg2 = null;		//Второй аргумент выражения
var operation;			//Символ выполняемой операции (+-*/)
var memory;				//Временное хранилище для одного из аргументов
var memoryOperation;	//Временное хранилище для операции с этим аргументом
var errDiv0 = false;
var input;				//Поле ввода калькулятора
var output;				//Элемент для вывода результата

//Задание обработчиков кнопок калькулятора
$(document).ready(function() {
	input = $("#screen");
	output = $("#calcOutput");
	
	$(".digit").click(function() {
		btnDigit(this.value);
	});
	
	$(".binOp").click(function() {
		btnBinaryOperation(this.value);
	});
	
	$("input[value='C']").click(btnReset);
	$("input[value='±']").click(btnChangeSign);
	$("input[value='=']").click(btnEqual);
	$("input[value='.']").click(btnDot);
});

//Обработчик цифровой кнопки
function btnDigit(digit) {
	var outText = "";
	input[0].value += digit;
	printResult(outText);
}

//Обработчик кнопки сброса
function btnReset() {
	var outText = "&nbsp;";
	resetcalc();
	input.val(null);
	printResult(outText);
}

//Обработчик кнопки ±
function btnChangeSign() {
	var outText = "";
	var buf = -+input.val();
		input.val(buf);
	printResult(outText);
}

//Обработчик кнопки .
function btnDot() {
	var outText = "";
	if (input.val().indexOf(".") < 0) {
		if (input.val() == "") {
			input.val("0" + ".");
		} else {
			input.val(input.val() + ".");
		}
	}
	printResult(outText);
}

//Обработчик кнопки =
function btnEqual() {
	var outText = "";
	if (arg1 != null) {
		arg2 = +input.val();
		outText = arg1 + " " + operation + " " + arg2 + " = ";
		input.val(execute());
		if (errDiv0 == false) {
			//Проверка, нет-ли вытесненных в память операций с низким приоритетом:
			if (memory != null && memoryOperation !=null) {
				arg2 = arg1;
				arg1 = memory;
				operation = memoryOperation;
				outText = arg1 + " " + operation + " " + outText;
				memory = null;
				memoryOperation = null;
				input.val(execute());
			}
			outText += input.val();
			operation = null;
			arg1 = null;
		}
	} else {
		outText = input.val();
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
				arg2 = +input.val();
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
				arg1 = +input.val();
			}
			input.val("");
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
					arg2 = +input.val();
					execute ();
				}
			}
			if (arg1 == null) {
				arg1 = +input.val();
			}
			input.val("");
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
		outText = arg1 + " " + operation + " " + input.val();
	} else if (outText == "") {
		outText = input.val();
	}
	if (memory != null && memoryOperation != null) {
		outText = memory + " " + memoryOperation + " " + outText;
	}
	if (errDiv0 == true) {
		resetcalc();
		outText = "ОШИБКА: Деление на ноль.";
		input.val("");
	}
	output.html(outText);
	input[0].focus();
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