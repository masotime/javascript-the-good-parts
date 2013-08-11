// some obscure basics

var obj = {
	"color": "red",
	"font-size": "2em"
}

// we can have defaults using ||
var family = obj["font-family"] || "Helvetica Neue";
console.log(family);

// we can have simple null checking using &&
obj["font-family"] = "Garamond";
if (obj && obj["font-family"] && obj["font-family"].type) {
	console.log("Font family is of type "+obj["font-family"].type);
} else {
	console.log("Font family has no type");
}

// everything is by reference
obj["font-family"] = {"name": "Garamond"};
var familyRef = obj["font-family"];
familyRef.type = "Web Font";
console.log(obj["font-family"].type);

// but assignment does NOT override the reference
familyRef = { "fruit": "pineapple"};
console.log(obj["font-family"].fruit);

process.exit(0);