//const contactButton = document.querySelector(".contact-form button");
const form = document.querySelector(".contact-form");
const messageBox = document.querySelector(".form-message");  

const inputs = {

name:document.querySelector("#name"),
email:document.querySelector("#email"),
message:document.querySelector("#message")

};


function showMessage(text,color) { 
   messageBox.textContent = text;
   messageBox.style.color = color;
  
} 

function handleFormSubmit(event) {
  event.preventDefault();

  for(let key in inputs){
    
   if
    (inputs[key].value.trim()==="" ) 
      {
        showMessage("All fields are required","red");
         return;
      }

    }
   
  showMessage(
    `Thank you, ${inputs.name.value}! We received your message.`,"green"
  );

  form.reset();
}

form.addEventListener("submit",handleFormSubmit);

