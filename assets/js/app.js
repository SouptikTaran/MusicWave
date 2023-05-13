let greetid = document.getElementById('greeting-div');
var myDate = new Date();
var hrs = myDate.getHours();
var greet;
if (hrs < 12)
  greet = 'Good Morning';
else if (hrs >= 12 && hrs <= 17)
  greet = 'Good Afternoon';
else if (hrs >= 17 && hrs <= 24)
  greet = 'Good Evening';
greetid.innerHTML =greet + ', Alice.';

function clearvalue(value){
  value.placeholder = "";
}

// for(var i = 1; i<=2; i++){
//   var arrlist = document.getElementById(i);
//   console.log(arrlist);
//   arrlist.style.display = "none";
// };
// // console.log(arrlist);
// function showall(id){
//   console.log(id);
//   id.style.display = "none";
//   for(var i = 1; i<=2; i++){
//     var arrlist = document.getElementById(i);
//     // console.log(arrlist);
//     arrlist.style.display = "contents";
//   };
// }