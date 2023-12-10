const input = document.querySelector("#name");
console.log(input);

input.addEventListener("input", (e) =>
  console.log(e.target.validity.patternMismatch)
);

const form = document.querySelector("form");

form.addEventListener("input", () => {
  console.log("input event");
});
