// Quick overview

/*** concat ***/
var a = ['a', 'b', 'c'];
var b = ['x', 'y', 'z'];

var c = a.concat(b, true);
console.log(c); // c will be a+b+[true]

/** join ***/
console.log(a.join('|')); // a|b|c

/** pop, push, reverse, shift **/
console.log(a.pop()); // 'c'
console.log(a.push('red')); // 3, the length of the array
a.reverse();
console.log(a); // a is now ['red', 'b', 'a']
console.log(a.shift()) // removes 'red'. good for queues.
console.log(a.unshift('one', 'two')); // adds elements in FRONT. returns new array length
console.log(a);

/** slice and splice **/

// for SLICE, the 2nd number is the number of elements to remove
// new array, 1 element starting at 0. i.e. 'x'
console.log(b.slice(0,1)); // ['x']

// for SPLICE, the 2nd number is the index up to which to remove the element.
// the 2nd number is NOT included in the operation
// spliced array, elements from 2 up to (but not including) 3.
console.log(b.splice(2,3)); // ['z']

console.log(b); // b is affected only by the SPLICE.

process.exit(0);