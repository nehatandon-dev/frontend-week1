//const contactButton = document.querySelector(".contact-form button");
const form = document.querySelector(".contact-form");
const messageBox = document.querySelector(".form-message");   
const nameInput = document.querySelector("#name");

function showSuccessMessage(nameInput){ 
   messageBox.textContent = `Thank you, ${nameInput}! Your message has been sent.`;
  
};

function handleFormSubmit(event){
  event.preventDefault();

  if(nameInput.value.trim()===""){
    messageBox.textContent = "Please enter your name";
    return;
  }

  showSuccessMessage(nameInput.value);

  form.reset();
}

form.addEventListener("submit",handleFormSubmit);

