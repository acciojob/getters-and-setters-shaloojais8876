//complete this code
class Person {
	constructor(name,age){
	this.name : name;
	this.age : age;
}
	get name(){
		return $this._name;
	}
	set age(age){
		this._age = age;
	}
}

class Student extends Person {
	study(){
		console.log(`${this._name} is studying`);
	}
}

class Teacher extends Person {
	teach(){
		console.log(`${this._name} is teaching`);
	}
}
const.person = new Person("lucifer", 34);
console.log(person.name);
console.log(person.age);

const student = new Student("Morningstar");
const teacher = new Teacher("chloe");



// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
