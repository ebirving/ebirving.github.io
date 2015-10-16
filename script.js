var now = new Date();
console.log("Today is: " + now);

var nextWeek = new Date(now);
nextWeek.setDate(nextWeek.getDate() + 7);
console.log("One week from today is: " + nextWeek);

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var month = months[nextWeek.getMonth()];
var day = nextWeek.getDate();

document.getElementById('date').innerHTML = month + " " + day;
