//EXAMPLE 1:
let ask1 ,
    ask2

function* gen() {
  ask1 = yield "2 + 2 = ?";

  console.log(`ask1 = ${ask1}, ask1 gets its value from LINE 3 with next(4)`); //prints  4

  ask2 = yield "3 * 3 = ?"

  console.log(`ask2 = ${ask2}, ask2 gets its value from LINE 5 with next(9)`); // prints 9
}

let generator = gen();

console.log( `LINE 1 => ${generator.next().value}` ); // prints "2 + 2 = ?"
console.log( `       ask1 = ${ask1}, ask1 will be undefined here`)

console.log( `LINE 3 => ${generator.next(4).value}` ); // prints "3 * 3 = ?"
console.log( `       ask2 = ${ask2}, ask2 will be undefined here`)

console.log( `LINE 5 => ${generator.next(9).done}` ); // prints true
