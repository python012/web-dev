var userFirstName = prompt("What's your first name?");
var userLastName = prompt("What's your last name?");
console.log("Your full name is " + userFirstName + " " + userLastName);
var userAge = prompt("How old are you?");
console.log("Your age is " + userAge);


function f(num) {
  if (num == 0) {
    return 1;
  } else {
    for (var i=num; i>1; i--) {
      num = num * (i-1);
    }
    return num;
  }
}