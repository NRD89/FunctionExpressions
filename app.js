//fuction statement (hoisted)
greet();

function greet() {
  console.log('hi');
}
//anonymous function expression (not hoisted)

var anonymousGreet = function() {
  console.log('hi');
}

anonymousGreet();
//function expression that passes as a parameter to another function
function log(a) {
  a();
}

log(function() {
  console.log('hi');
});
