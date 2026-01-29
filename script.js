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

//Creating Arrays for Technical skills

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

//Creating Aarray of Objects for Projects

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
