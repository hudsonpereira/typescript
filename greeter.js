var Student = (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = [firstName, middleInitial, lastName].join(" ");
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Hudson", "A", "Pereira");
// {
// firstName: "Hudson",
// lastName: "Pereira"
// };
document.body.innerHTML = greeter(user);
