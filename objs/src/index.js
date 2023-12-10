const div = document.getElementById("app");
console.log(this);
const person = {
  name: "max",
  age: 22,
  role: "developer",
  sayHello: function () {
    console.log(this);
  },
};

function printDetails() {
  console.log(this.document.title);
}

printDetails();

person.sayHello();

div.addEventListener("click", function () {
  console.dir(this);
});
