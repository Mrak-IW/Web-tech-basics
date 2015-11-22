var arg1 = null;		//Первый аргумент выражения
var arg2 = null;		//Второй аргумент выражения
var operation;			//Символ выполняемой операции (+-*/)
var memory;				//Временное хранилище для одного из аргументов
var memoryOperation;	//Временное хранилище для операции с этим аргументом
var errDiv0 = false;

//Обработчик кнопки сброса
function btnReset(inputName, outputName) {
	var cmd = init(this, inputName, outputName);
	resetcalc();
	cmd.input.value = null;
	cmd.outText = "&nbsp;";
	printResult(cmd);
}

//Обработчик цифровой кнопки
function btnDigit(inputName, outputName) {
	var cmd = init(this, inputName, outputName);
	cmd.input.value += cmd.newOperation;
	printResult(cmd);
}

//Обработчик кнопки ±
function btnChangeSign(inputName, outputName) {
	var cmd = init(this, inputName, outputName);
	var buf = -+cmd.input.value;
		cmd.input.value = buf;
	printResult(cmd);
}

//Обработчик кнопки .
function btnDot(inputName, outputName) {
	var cmd = init(this, inputName, outputName);
	if (cmd.input.value.indexOf(".") < 0) {
		if (cmd.input.value == "") {
			cmd.input.value = "0" + ".";
		} else {
			cmd.input.value += ".";
		}
	}
	printResult(cmd);
}

//Обработчик кнопки =
function btnEqual(inputName, outputName) {
	var cmd = init(this, inputName, outputName);
	if (arg1 != null) {
		arg2 = +cmd.input.value;
		cmd.outText = arg1 + " " + operation + " " + arg2 + " = ";
		cmd.input.value = execute();
		if (errDiv0 == false) {
			//Проверка, нет-ли вытесненных в память операций с низким приоритетом:
			if (memory != null && memoryOperation !=null) {
				arg2 = arg1;
				arg1 = memory;
				operation = memoryOperation;
				cmd.outText = arg1 + " " + operation + " " + cmd.outText;
				memory = null;
				memoryOperation = null;
				cmd.input.value = execute();
			}
			cmd.outText += cmd.input.value;
			operation = null;
			arg1 = null;
		}
	} else {
		cmd.outText = cmd.input.value;
	}
	printResult(cmd);
}

//Обработчик кнопки с бинарной операцией
function btnBinaryOperation(inputName, outputName) {
	var cmd = init(this, inputName, outputName);
	switch (cmd.newOperation) {
		//Бинарные операции с низким приоритетом
		case "+":
		case "-":	
			if (arg1 != null) {	//В этом случае сейчас будет задан второй аргумент и можно начинать вычисления
				arg2 = +cmd.input.value;
				execute ();
				if (errDiv0) {
					break;
				}
				//Проверка, нет-ли вытесненных в память операций с низким приоритетом:
				if (memory != null && memoryOperation !=null) {
					arg2 = arg1;
					arg1 = memory;
					operation = memoryOperation;
					cmd.outText = arg1 + " " + operation + " " + cmd.outText;
					memory = null;
					memoryOperation = null;
					execute();
				}
			} else {
				arg1 = +cmd.input.value;
			}
			cmd.input.value = "";
			operation = cmd.newOperation;
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
					arg2 = +cmd.input.value;
					execute ();
				}
			}
			if (arg1 == null) {
				arg1 = +cmd.input.value;
			}
			cmd.input.value = "";
			operation = cmd.newOperation;
			break;
		default:
			alert("Вызвана неизвестная бинарная операция \"" + cmd.newOperation + "\"");
	}
	printResult(cmd);
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

//Подготавливает "окружение" команды для калькулятора
function init(caller, inputName, outputName) {
	var command = {};
	command.form = caller.form;
	command.input = command.form.elements[inputName];			//Где находится поле ввода калькулятора
	command.output = document.getElementsByName(outputName)[0];	//Где находится строка вывода калькулятора
	command.newOperation = caller.value;
	command.outText = "";
	return command;
}

//Выводит результат работы команды на интерфейс
function printResult(command) {
	if (arg1 != null) {
		command.outText = arg1 + " " + operation + " " + command.input.value;
	} else if (command.outText == "") {
		command.outText = command.input.value;
	}
	if (memory != null && memoryOperation != null) {
		command.outText = memory + " " + memoryOperation + " " + command.outText;
	}
	if (errDiv0 == true) {
		resetcalc();
		command.outText = "ОШИБКА: Деление на ноль.";
		command.input.value = "";
	}
	command.output.innerHTML = command.outText;
	command.input.focus();
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