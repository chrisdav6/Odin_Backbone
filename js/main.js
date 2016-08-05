var Person = function(config) {
	this.name = config.name;
	this.age = config.age;
	this.occupation = config.occupation;
};

Person.prototype.work = function() {
	return this.name + " is working.";
};

var person1 = new Person({
	name: "Chris Davis",
	age: 40,
	occupation: "Software Developer"
})