var arr = ["Джаз", "Блюз"];
alert("Массив = [" + arr + "]");
arr.push("Рок-н-Ролл");
alert("Массив = [" + arr + "]");
arr[arr.length - 2] = "Классика";
alert("Массив = [" + arr + "]");
alert("Первое значение БЫЛО... " + arr.shift());
alert("Массив = [" + arr + "]");
arr.unshift("Рэп", "Регги");
alert("Массив = [" + arr + "]");