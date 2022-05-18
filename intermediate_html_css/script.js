const name_input = document.querySelector("#username");
const greetMeButton = document.querySelector(".greet-btn");
const greetingOutput = document.querySelector(".greeting");

greetMeButton.addEventListener("click", (event) => {
  greetingOutput.innerText = `Hello ${name_input.value}`;
});
