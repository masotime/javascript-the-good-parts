// just one file for sorting

var n = [4,8,15,16,23,42];
n.sort();

console.log(n); // will be lexicographically sorted

n.sort(function(a,b) {
	// <0, when a < b
	// =0, when a = b
	// >0, when a > b
	return a-b;
});

console.log(n); // now correctly sorted.

n = n.concat(['bb', 'a', 'aa']);
n.reverse();

n.sort(function(a,b) {
	if (a === b) return 0; // brainless
	if (typeof a === typeof b) {
		return a < b ? a : b; // "type-safe" comparison
	};

	// "number" versus "string". because "n" < "s", numbers
	// will be in front of the resultant array
	return typeof a < typeof b ? -1 : 1;
})

console.log(n);



// now we attempt sorting of objects

var genericCompare = function(left, right) {
	if (left === right) return 0;
	if (typeof left === typeof right) return left < right ? -1 : 1;
	return typeof left < typeof right ? -1 : 1;
}

var by = function (property) {
	return function(a,b) {
		if (typeof a === 'object' && typeof b === 'object' && a && b) {
			return genericCompare(a[property], b[property]);
		} else {
			throw {
				name: 'Error',
				message: 'All elements in the array must be objects to sort by '+property
			}
		}
	}
}

var s = [
	{first: 'Joe', last: 'Besser'},
	{first: 'Moe', last: 'Howard'},
	{first: 'Joe', last: 'DeRita'},
	{first: 'Shemp', last: 'Howard'},
	{first: 'Larry', last: 'Fine'},
	{first: 'Curly', last: 'Howard'}
];

s.sort(by('first'));
s.sort(by('last'));
console.log(s);

// we add a tiebreaker feature

var by2 = function(property, tiebreaker) {
	return function(a,b) {
		if (typeof a === 'object' && typeof b === 'object' && a && b) {
			// this is where it is different
			var result = genericCompare(a[property], b[property]);
			return (tiebreaker && result === 0) ? tiebreaker(a, b) : result;
		} else {
			throw {
				name: 'Error',
				message: 'All elements in the array must be objects to sort by '+property
			}
		}
	}

}

s.sort(by2('first', by2('last')));

console.log(s);

process.exit(0);