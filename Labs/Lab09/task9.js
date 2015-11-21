var taskNum;
var taskTitle;

do {
	taskNum = +prompt("Ввести номер задания [1; 16]", "");
	taskTitle = "Задание " + taskNum + ".\n";

	switch (taskNum) {
		case 1:		//Задание 1
			var a = +prompt(taskTitle + "Ввести A", "1");
			var b = +prompt(taskTitle + "Ввести B", "-10");
			var i;
			var min = Math.min(a, b);
			var max = Math.max(a, b);
			var count = max - min + 1;
			var res = "[";
			for (i = min; i <= max; i++) {
				res += i + (i != max ? "; " : "]");
			}
			alert(taskTitle + "Между A = " + a + " и B = " + b + " находится " + count + " чисел:\n" + res);
			break;
		case 2:		//Задание 2
			var a = +prompt(taskTitle + "Ввести A", "1");
			var b = +prompt(taskTitle + "Ввести B", "-10");
			var i;
			var min = Math.min(a, b);
			var max = Math.max(a, b);
			var sum;
			for (i = min, sum = 0; i <= max; i++) {
				sum += i;
			}
			alert(taskTitle + "Сумма чисел между A = " + a + " и B = " + b + " = " + sum);
			break;
		case 3:		//Задание 3
			var n = +prompt(taskTitle + "Ввести N", "3");
			var inc = (n > 0 ? 1 : -1);
			res = 1;
			for (var i = inc; i != n + inc; i+= inc) {
				res *= i;
			}
			alert(taskTitle + n + "! = " + res);
			break;
		case 4:		//Задание 4
			var a = +prompt(taskTitle + "Ввести длину отрезка A", "1");
			var b = +prompt(taskTitle + "Ввести длину отрезка B", "10");
			var min = Math.min(a, b);
			var max = Math.max(a, b);
			var i = max;
			var count = 0;
			while ((i -= min) > min) {
				count++;
			}
			alert(taskTitle + "На отрезке " + (a > b ? "A" : "B") + "(" + max + ") можно разместить " + count + " отрезков " + (a < b ? "A" : "B") + "(" + min + ")\nОстанется отрезок длиной " + i);
			break;
		case 5:		//Задание 5
			var n = +prompt(taskTitle + "Ввести целое N > 1", "3");
			if (n >= 1) {
				var k = 0;
				while (3 * ++k <= n);	//Поизвращаемся :)
				alert(taskTitle + "min(K) [3*K > " + n + "] = " + k);
			} else {
				alert("Ну я-же просил больше единицы!");
			}
			break;
		case 6:		//Задание 6
			var n = +prompt(taskTitle + "Ввести целое N", "-1234");
			var x = Math.abs(n);
			var c;
			var res = "";
			while (x > 0) {
				c = x % 10;
				res = c + ", " + res;
				x = (x - c) / 10;
			}
			alert(taskTitle + "Число " + n + " состоит из цифр [" + res + "]");
			break;
		case 7:		//Задание 7
			var x = [];
			var i = 0;
			var buf;
			while (true) {
				buf = prompt(taskTitle + "Введите Х", "");
				if(isNaN(+buf) || buf == null) {
					break;
				}
				x[i] = +buf;
				i++;
			}
			alert(x);
			break;
		case 8:		//Задание 8
			var buf;
			do {
				buf = prompt(taskTitle + "Ввести число больше 100", "");
			} while (buf !== null && +buf <= 100);
			alert(taskTitle + "Цикл завершён на вводе \"" + buf + "\"");
			break;
		case 9:		//Задание 8
			var a = +prompt(taskTitle + "Ввести A", "1");
			var b = +prompt(taskTitle + "Ввести B", "5");
			var i, j;
			var min = Math.min(a, b);
			var max = Math.max(a, b);
			var res = "[";
			for (i = 0; i <= max - min; i++) {
				for (j = 0; j <= i; j++) {
					res += i + min + (j == i ? (i == max - min ? "]" : "; ") : ", ");
				}
			}
			alert(taskTitle + "A = " + a + "; B = " + b + "\n" + res);
			break;
		case 10:		//Задание 10
			var a = +prompt(taskTitle + "Ввести A", "2");
			var n = +prompt(taskTitle + "Ввести N", "5");
			alert(taskTitle + a + "^" + n + " = " + pow(a, n));
			break;
		case 11:		//Задание 11
			var x1 = +prompt(taskTitle + "Ввести x1", "1");
			var y1 = +prompt(taskTitle + "Ввести y1", "1");
			var x2 = +prompt(taskTitle + "Ввести x2", "5");
			var y2 = +prompt(taskTitle + "Ввести y2", "4");
			alert(taskTitle + "Периметр прямоугольника ()" + x1 + "; " + y1 + ")(" + x2 + "; " + y2 + ") = " + RectP(x1, y1, x2, y2));
			break;
		case 12:		//Задание 12
			var x = +prompt(taskTitle + "Ввести X", "1");
			var y = +prompt(taskTitle + "Ввести Y", "5");
			alert(taskTitle + "MinMax(" + x + ", " + y + ") = " + MinMax(x, y));
			break;
		case 13:		//Задание 13
			var x = +prompt(taskTitle + "Ввести X", "0");
			alert(taskTitle + "Sign(" + x + ") = " + Sign(x));
			break;
		case 14:		//Задание 14
			var x = +prompt(taskTitle + "Ввести X", "10");
			var y = +prompt(taskTitle + "Ввести Y", "5");
			var op = +prompt(taskTitle + "1 - вычитание\n2 - умножение\n3 - деление\nothes - сложение\nВвести номер операции", "1");
			alert(taskTitle + "Sign(" + x + ") = " + Sign(x));
			break;
		case 15:		//Задание 15
			var x = +prompt(taskTitle + "Ввести X", "12345");
			var n = +prompt(taskTitle + "Ввести N", "2");
			alert(taskTitle + x + "[" + n + "] = " + DigitN(x, n));
			break;
		case 16:
			var user = {};
			user.name = "Vasya";
			user.surname = "Petrov";
			alert("name:\t" + user.name + "\nsurname:\t" + user.surname);
			user.name = "Sergey";
			alert("name:\t" + user.name + "\nsurname:\t" + user.surname);
			delete user.name;
			alert("name:\t" + (user.name !== undefined ? user.name : "<отсутствует>") + "\nsurname:\t" + user.surname);
			break;
		default:
			alert("Задания с номером " + taskNum + " не существует.");
	}
} while (true);

function pow(x, n) {
	var i;
	var res = 1;
	//Если n > 0
	for (i = 1; i < n; i++) {
		res *= x;
	}
	//Если n < 0
	for (i = 0; i > n; i--) {
		res /= x;
	}
	return res;
}

//Периметр прямоугольника, заданного двумя углами
function RectP(x1, y1, x2, y2) {
	return (Math.abs(x1 - x2) + Math.abs(y1 - y2)) * 2;
}

//Возвращает min(x, y)
function MinMax(x, y) {
	return x > y ? y : x;
}

function Sign(x) {
	return x == 0 ? 0 : (x > 0 ? 1 : -1);
}

function Calc(a, b, op) {
	var res;
	switch (op) {
		case 1:
			res = a - b;
			break;
		case 2:
			res = a * b;
			break;
		case 3:
			res = a / b;
			break;
		default:
			res = a + b;
			break;
	}
	return res;
}

function DigitN(k, n) {
	var s = k.toString();
	return (n > s.length - 1 ? -1 : s[s.length - n]);
}