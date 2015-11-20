var taskNum;
var taskTitle;

do {
	taskNum = +prompt("Ввести номер задания [1; 16]", "");
	taskTitle = "Задание " + taskNum + ". ";

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
			alert(taskTitle + "\nМежду A = " + a + " и B = " + b + " находится " + count + " чисел:\n" + res);
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
			alert(taskTitle + "\nСумма чисел между A = " + a + " и B = " + b + " = " + sum);
			break;
		case 3:		//Задание 3
			var n = +prompt(taskTitle + "Ввести N", "3");
			var inc = (n > 0 ? 1 : -1);
			res = 1;
			for (var i = inc; i != n + inc; i+= inc) {
				res *= i;
			}
			alert(taskTitle + "\n" + n + "! = " + res);
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
			var res = "";
			while (x > 0) {
				res = (x % 10) + ", " + res;
				x = (x / 10).toFixed(0);
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
			} while (buf != null && +buf <= 100);
			alert(taskTitle + "Цикл завершён на вводе \"" + buf + "\"");
			break;
		
	}
} while (!isNaN(taskNum) && taskNum > 0 && taskNum <= 12);

alert("Задания с номером " + taskNum + " не существует.\nРабота завершена.");