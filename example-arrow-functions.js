var names = ['Anderw', 'Ranjan', 'Anil'];

// names.forEach(function(name) {
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });

// names.forEach((name) => console.log(name));

// var person ={
//   name: 'Ranjan',
//   greet: function() {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     });
//
//   }
// }
//
// person.greet();

// challenge area
function add (a, b) {
  return a + b;
}

// addstatement
var statementAdd = (a, b) => {
  return a +b
}

// addExpression
var expressionAdd = (a, b) => (a + b);
console.log(add(1, 3));
console.log(add(9, 0));

console.log('statementAdd: ', statementAdd(1, 3));
console.log('expressionAdd: ', expressionAdd(9, 0));
