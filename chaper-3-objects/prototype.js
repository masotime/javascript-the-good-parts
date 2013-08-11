// prototype madness

// every object is linked to a PROTOTYPE OBJECT. that's usually
// the "prototype" property of some other object. if you create
// it via {}, then it is linked to Object.prototype.

/** DEFINE NEW method "create" on Object **/
if (typeof Object.create !== 'function') {
	Object.create = function(o) {
		var F = function() {}; // constructor
		F.prototype = o; // inheritance

		// creates a new object that inherits from o
		// all properties in o.prototype will be available
		// to this new object
		return new F(); 
	}
} else {
	console.log('Object.create already exists!');
}

// testing
var stooge = {
	"first-name": "Jerome",
	"last-name": "Howard",
	"middle-name": "Lester",
	"nickname": "Curly"
}

var another_stooge = Object.create(stooge);

// now if we try to check the first-name
console.log('\n# Delegation\n');
console.log(another_stooge["first-name"]); // will be "Jerome"

// if we update it
another_stooge["first-name"] = "Harry";
console.log(another_stooge["first-name"]); // will be "Harry"
console.log(stooge["first-name"]); // will still be "Jerome"

// if we add a NEW property to the original stooge
console.log('\n# Inheritance\n');

console.log(another_stooge["profession"]); // undefined
stooge["profession"] = "actor";
console.log(another_stooge["profession"]); // "actor", runtime inheritance

// reflection
console.log('\n# Reflection\n');
console.log(typeof stooge.toString); // in Object.prototype, so defined
console.log(typeof stooge.constructor); // in Object.prototye, so defined

// does it belong to parent or itself?
console.log(another_stooge.hasOwnProperty("first-name")); // true
console.log(another_stooge.hasOwnProperty("profession")); // false as it is from stooge

// other stuff
console.log('\n# Other stuff\n');
for (key in another_stooge) {
	console.log("another_stooge has "+key);
}

console.log(another_stooge["first-name"]); // "Harry"
delete another_stooge["first-name"];
console.log(another_stooge["first-name"]); // reverts back to "Jerome"

process.exit(0);