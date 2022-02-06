var names = prompt("Enter names:");

var arr = names.split(', ');

for (var index in arr)
{
     console.log("<li>" + (+index+1) + " " + arr[index] + "</li>"); // Alex, Vasa, Pitya, Ann, Oleg
}