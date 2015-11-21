var taskNum;
var taskTitle;

do {
	taskNum = +prompt("Ввести номер задания", "");
	taskTitle = "Задание " + taskNum + ". ";

	switch (taskNum) {
		case 1:		//Задание 1
			var a = +prompt(taskTitle + "Введите сторону квадрата", "");
			if (a != 0 && a!= NaN) {
				alert("Площадь квадрата = " + a + "^2 = " + a * a);
			}
			break;
		case 2:		//Задание 2
			var s	= +prompt(taskTitle + "Введите Расстояние между автомобилями",	"100");
			var v1	= +prompt(taskTitle + "Введите скорость первого автомобиля",		"5");
			var v2	= +prompt(taskTitle + "Введите скорость второго автомобиля",		"5");
			var t	= +prompt(taskTitle + "Введите время движения",					"10");
			alert("Расстояние между автомобилями составило: " + Math.abs(s - (v1 + v2) * t));
			break;
		case 3:		//Задание 3
			//Для единообразия кодя я "забуду", что переменная а уже существует.
			var a = +prompt(taskTitle + "Ax^2 + Bx + C = 0. Введите A",	"1");
			var b = +prompt(taskTitle + "Ax^2 + Bx + C = 0. Введите B",	"2");
			var c = +prompt(taskTitle + "Ax^2 + Bx + C = 0. Введите C",	"1");
			var d = b * b - 4 * a * c;
			var x1, x2;

			if (d < 0) {
				alert("Уравнение не имеет решения в поле действительных чисел");
			} else {
				x1 = (-b + Math.sqrt(d)) / (2 * a);
				x2 = (-b - Math.sqrt(d)) / (2 * a);
				
				if (x1 == x2) {
					alert("x = " + x1);
				} else {
					alert("x1 = " + x1 + " x2 = " + x2);
				}
			}
			break;
		case 4:		//Задание 4
			var a = prompt(taskTitle + "Введите число", "0");
			if (a > 0) {
				a += 1;
			} else if (a < 0) {
				a -= 2;
			} else {
				a = 10;
			}
			alert("Я тут подумал, что вам больше подойдёт число " + a);
			break;
		case 5:		//Задание 5
			var a = +prompt(taskTitle + "Введите A",	"1");
			var b = +prompt(taskTitle + "Введите B",	"2");
			var c = +prompt(taskTitle + "Введите C",	"1");
			var res;

			if (a > b) {
				if (c > b) {	//b - min
					res = a + c;
				} else {	//c - min
					res = a + b;
				}
			} else			//a <= b
			{
				if (c > a) {	//a - min
					res = b + c;
				} else {	//c - min
					res = a + b;
				}
			}

			alert("Из чисел [" + a + "; " + b + "; " + c + "] сумма двух наибольших = " + res);
			break;
		case 6:		//Задание 6
			var a = +prompt(taskTitle + "Введите что-нибудь",	"");
			var res;

			if (a == 0) {
				res = "Нулевое число";
			} else {
				res = "Число ";
				if (a > 0) {
					res += "положительное ";
				} else {
					res += "отрицательное ";
				}
				if (a % 2 == 0) {
					res += "чётное";
				} else {
					res += "нечётное";
				}
			}

			alert(res);
			break;
		case 7:		//Задание 7
			var a = +prompt(taskTitle + "Введите A",	"1");
			var b = +prompt(taskTitle + "Введите B",	"2");

			alert(	"A = " + a +
					";\nB = " + b + ";\n" +
					(a > 2 && b <= 3 ? "С" : "Не с") +
					"правделивы неравенства A > 2 и B ≤ 3");
			break;
		case 8:		//Задание 8
			var a = +prompt(taskTitle + "Введите A",	"1");
			var b = +prompt(taskTitle + "Введите B",	"2");
			var c = +prompt(taskTitle + "Введите С",	"3");

			alert(	"A = " + a +
					";\nB = " + b +
					";\nC = " + c + "\n" +
					(a < b && b < c ? "С" : "Не с") +
					"правделиво неравенство A < B < C");
			break;
		case 9:		//Задание 9
			var a = +prompt(taskTitle + "Введите A",	"1");
			var b = +prompt(taskTitle + "Введите B",	"2");
			var c = +prompt(taskTitle + "Введите C",	"1");
			var d = +prompt(taskTitle + "Введите D",	"1");
			var num;

			if (b == a) {
				if (b == c) {
					num = 4;
				} else {
					num = 3;
				} 	
			} else {
				if (a == c) {
					num = 2;
				} else {
					num = 1;
				}
			}
			alert(taskTitle + "Из чисел [" + a + "; " + b + "; " + c + "; " + d + "] Отличается число №" + num);
			break;
		case 10:	//Задание 10
			var mark = +prompt(taskTitle + "Введите оценку",	"1");
			var res;
			switch (mark) {
				case 5:
					res = "отлично";
					break;
				case 4:
					res = "хорошо";
					break;
				case 3:
					res = "удоволетворительно";
					break;
				case 2:
					res = "неудоволетворительно";
					break;
				case 1:
					res = "плохо";
					break;
				default:
					res = "ошибка";
			}
			alert("Оценка \"" + mark + "\" это " + res);
			break;
		case 11:
			var month = +prompt(taskTitle + "Введите номер месяца", "1");
			var res = "Месяц №" + month + " - это ";
			switch (month) {
				case 3:
				case 4:
				case 5:
					res += "весна";
					break;
				case 6:
				case 7:
				case 8:
				case 9:
					res += "лето";
					break;
				case 10:
				case 10:
				case 11:
					res += "осень";
					break;
				case 12:
				case 1:
				case 2:
					res += "зима";
					break;
				default:
					res += "ненастоящий месяц";
			}
			alert(taskTitle + res);
			break;
		case 12:
			var op1;
			var op2;
			var res;
			var actNum;
			var correctResult = false;
			var errorText = "";
			var interfaceString = taskTitle + "\n1 - задать операнд 1\n2 - задать операнд 2\n3 - сложение\n4 - вычитание\n5 - умножение\n6 - деление\nОстальное - выход";
			var statusString = "";
			var resultString = "";
			var operationString = "";
			
			do {
				statusString = "op1 = " + op1 + "\nop2 = " + op2;
				actNum = +prompt(interfaceString + "\n\n" + statusString + "\n\n" + resultString,	"1");
				correctResult = false;
				errorText = "";
				
				switch (actNum) {
					case 1:		//Задать операнд 1
						op1 = +prompt(statusString + "\n\nВведите операнд 1", "");
						break;
					case 2:		//Задать операнд 2
						op2 = +prompt(statusString + "\n\nВведите операнд 2", "");
						break;
					case 3:		//Сложение
						operationString = " + ";
						if (!isNaN(op1) && op1 != undefined && !isNaN(op2) && op2 != undefined) {
							res = op1 + op2;
							correctResult = true;
						} else {
							errorText = "Некорректные операнды";
						}
						break;
					case 4:		//Вычитание
						operationString = " - ";
						if (!isNaN(op1) && op1 != undefined && !isNaN(op2) && op2 != undefined) {
							res = op1 - op2;
							correctResult = true;
						} else {
							errorText = "Некорректные операнды";
						}
						break;
					case 5:		//Умножение
						operationString = " * ";
						if (!isNaN(op1) && op1 != undefined && !isNaN(op2) && op2 != undefined) {
							res = op1 * op2;
							correctResult = true;
						} else {
							errorText = "Некорректные операнды";
						}
						break;
					case 6:		//Деление
						operationString = " / ";
						if (op2 == 0) {
							errorText = "Попытка деления на ноль";
							break;
						}
						if (!isNaN(op1) && op1 != undefined && !isNaN(op2) && op2 != undefined && op2 != 0) {
							res = op1 / op2;
							correctResult = true;
						} else {
							errorText = "Некорректные операнды";
						}
						break;
				}
				
				if (correctResult) {
					resultString = op1 + operationString + op2 + " = " + res;
				} else if (errorText != "") {
					resultString = "ОШИБКА: " + errorText;
				} else {
					resultString = "";
				}
				
			} while (!isNaN(actNum) && actNum > 0 && actNum <= 6);
			break;
	}
} while (!isNaN(taskNum) && taskNum > 0 && taskNum <= 12);

alert("Задания с номером " + taskNum + " не существует.\nРабота завершена.");