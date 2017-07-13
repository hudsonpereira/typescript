class Student {
  fullName: string

  constructor(public firstName, public middleInitial, public lastName) {
    this.fullName = [firstName, middleInitial, lastName].join(" ")
  }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

var user = new Student("Hudson", "A", "Pereira")
// {
  // firstName: "Hudson",
  // lastName: "Pereira"
// };

document.body.innerHTML = greeter(user);
