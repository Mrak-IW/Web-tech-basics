var userName = prompt("Хто ты?", "");
alert("А я тебя знаю! Ты - " + userName);
var ans = confirm(userName + ", ты меня уважаешь?");
if(ans)
{
	alert("Ура-а-а-а!!!");
} else
{
	alert("Злой ты, уйду я от тебя.");
}