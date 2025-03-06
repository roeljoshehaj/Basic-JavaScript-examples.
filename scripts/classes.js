document.write("<h2>Classes Example</h2>");

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    }
}

const person1 = new Person("Roeljo", 20);
document.write("<p>Introduction: " + person1.introduce() + "</p>");
