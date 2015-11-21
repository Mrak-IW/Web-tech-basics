var arr = [];
arr[0] = 2;
arr[1] = "Любая строка";
arr[2] = true;
arr[3] = null;

alert("В массиве " + arr.length + " элемента.");
alert("Массив целиком: [" + arr + "]");

arr[4] = prompt("Юзер, введи что-нибудь хорошее","");

alert("Мила Йовович: " + arr[4]);