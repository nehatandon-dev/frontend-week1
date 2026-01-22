//const contactButton = document.querySelector(".contact-form button");
const form = document.querySelector(".contact-form");
const messageBox = document.querySelector(".form-message");   
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");


function showMessage(text,color) { 
   messageBox.textContent = text;
   messageBox.style.color = color;
  
} 

function handleFormSubmit(event) {
  event.preventDefault();

  if
  (nameInput.value.trim()==="" ||
   emailInput.value.trim()==="" || 
   messageInput.value.trim()==="") 
   {

    showMessage("All fields are required","red");
    return;
  }

  
  showMessage(
    `Thank you, ${nameInput.value}! We received your message.`,"green"
  );

  form.reset();
}

form.addEventListener("submit",handleFormSubmit);

