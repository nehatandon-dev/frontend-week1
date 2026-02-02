/*
Contact Form Logic
  -Handles form submission
  -Saves user data to localStorage
  -Retrieves saved data on page load
  -Displays confirmation message
*/


document.addEventListener("DOMContentLoaded", () => {

const form = document.querySelector(".contact-form");
const messageBox = document.querySelector(".form-message");
const savedMsg = document.getElementById("savedMsg");

const inputs = {
name:document.querySelector("#name"),
email:document.querySelector("#email"),
message:document.querySelector("#message")

};

function showMessage(text,color) { 
   messageBox.textContent = text;
   messageBox.style.color = color;
  
} 
//=======FORM SUBMISSION=========

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

};

form.addEventListener("submit",handleFormSubmit);

//======== TECHNICAL SKILLS LIST========

const skills = ["HTML","CSS3","JavaScript(ES6+)"];
const tools = ["Git","REST API","JSON","LocalStorage"];
const basics = ["Data Structure","OOP Basics"];
const softSkills = ["Communication","Teamwork"];

function renderList(items,elementId){

const list = document.getElementById(elementId);

items.forEach(item => {

const li = document.createElement("li");
li.textContent = item;
list.appendChild(li);

});

}
renderList(skills,"skills-list");
renderList(tools,"tools-list");
renderList(basics,"basics-list");
renderList(softSkills,"softSkills-list");

//=======PROJECT ELEMENTS==========

const projects = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio using HTML, CSS, JS",
    tech: "HTML, CSS, JavaScript"
  },
  {
    title: "Form Validation",
    description: "Contact form with validation",
    tech: "JavaScript"
  }

];

function renderProjects(projects) {
  const grid = document.getElementById("projectsGrid");

  projects.forEach(project => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
    <h3>${project.title}</h3>

    <p>
      <strong>Description:</strong>
      ${project.description}
    </p>
    <p class = "tech">
      <strong>Tech:</strong>
      <small>${project.tech}</small>
    </p>
    `;

    grid.appendChild(card);
  });
}

renderProjects(projects);

//=======SAVE ENTRIES IN LOCALSTORAGE======

form.addEventListener('submit',function (e) {
  e.preventDefault();
    
  const formData = {
    name:inputs.name.value.trim(),
    email:inputs.email.value.trim(),
    message:inputs.message.value.trim()
  }; 

  let storedData = JSON.parse(localStorage.getItem("contactData")) || [];

  if (!Array.isArray(storedData)) {
    storedData = [];
  }
  
  storedData.push(formData);
  localStorage.setItem("contactData" , JSON.stringify(storedData));
  
  console.log("saving:" , JSON.stringify(formData));
  
  form.reset();

  //===========RENDERING ENTRIES============

  const entriesContainer = document.getElementById("savedEntries");

  function renderEntries() {
    entriesContainer.innerHTML = "";

    const data = JSON.parse(localStorage.getItem("contactData")) ||[];
    if (data.length === 0) {
      entriesContainer.textContent = "No saved entries";
      return;
    }

    data.forEach((entry, index) => {
      const div = document.createElement("div");
      div.textContent = `${index + 1},${entry.name}`;
      entriesContainer.appendChild(div);

    });
  }
  renderEntries();

});
 //==========CLEAR DATA BUTTON=======

 const clearBtn = document.getElementById("clearDataBtn");

 clearBtn.addEventListener("click",() =>{
  localStorage.removeItem("contactData");

  savedMsg.textContent = "Saved data cleared";
  savedMsg.style.color = "red";

  form.reset();
 })
});
