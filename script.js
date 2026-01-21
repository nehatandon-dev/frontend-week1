//const contactButton = document.querySelector(".contact-form button");
const form = document.querySelector(".contact-form");
const messageBox = document.querySelector(".form-message");   
const nameInput = document.querySelector("#name");

form.addEventListener("submit", function(event){
  event.preventDefault();

  messageBox.textContent = `Thank you, ${nameInput.value}! Your message has been sent.`;
  form.reset();
});
