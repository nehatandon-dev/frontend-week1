/*
Contact Form Logic
  -Handles form submission
  -Saves user data to localStorage
  -Retrieves saved data on page load
  -Displays confirmation message
*/


document.addEventListener("DOMContentLoaded", () => {

const entriesContainer = document.getElementById("savedEntries");
const form = document.querySelector(".contact-form");
const messageBox = document.querySelector(".form-message");
const savedMsg = document.getElementById("savedMsg");
const clearAllBtn = document.getElementById("clearAllBtn");

const inputs = {
name:document.querySelector("#name"),
email:document.querySelector("#email"),
message:document.querySelector("#message")

};

function showMessage(text,color) { 
   messageBox.textContent = text;
   messageBox.style.color = color;
  
} 
//=======FORM SUBMISSION HANDLER SHOWING MESSAGE ON SUBMISSION=========

/*function handleFormSubmit(event) {
  event.preventDefault();

  for(let key in inputs){
    
   if
    (inputs[key].value.trim()==="" ) 
      {
        showMessage("All fields are required","red");
         return;
      }
      const submitBtn = form.querySelector("button");
      submitBtn.disabled =true; 
      const emailPattern = /^[^\s@]+\.[^\s@]+$/;
      if(!emailPattern.test(inputs.email.value)) {
        alert("please enter a valid email address.");
        
        setTimeout(() => {
          submitBtn.disabled = false;
        }, 1000);
      }
    }
   
  

};

form.addEventListener("submit",handleFormSubmit);*/

//======== RENDER TECHNICAL SKILLS LIST ITEMS========

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
//=======
function getStoredData() {
  return JSON.parse(localStorage.getItem("contactData")) || [];
}

function setStoredData(data){
  localStorage.setItem("contactData", JSON.stringify(data));
}

 //===========RENDERING ENTRIES============

    function renderEntries() {
    
    const data = getStoredData();
    if (data.length === 0) {
      entriesContainer.textContent = "No saved entries";
      return;
    }
    entriesContainer.innerHTML="";

    if(data.length===0) {
      entriesContainer.textContent ="No messages submitted yet.";
      return;
    }

    data.forEach((entry, index) => {
      const div = document.createElement("div");

      div.innerHTML = `<span>${index + 1},${entry.name }</span>;
      <button class="delete-btn" data-index="${index}">Delete</button>`;

      entriesContainer.appendChild(div);
      
    });
   
  }

//=======SAVE  FORM ENTRIES DATA TO LOCALSTORAGE AND UPDATE UI======

form.addEventListener('submit',function (e) {
  e.preventDefault();

  if(
    !inputs.name.value.trim() ||
    !inputs.email.value.trim() ||
    !inputs.message.value.trim()
  )
  {
  showMessage("All fields are required!" ,"red");
  return;
}
    
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if(!emailPattern.test(inputs.email.value)) {
        alert("Please enter a valid email address!");
        return;
      }

  const formData = {
    name:inputs.name.value.trim(),
    email:inputs.email.value.trim(),
    message:inputs.message.value.trim()
  }; 
  const data = getStoredData();
  data.push(formData);
  setStoredData(data);

  const submitBtn =form.querySelector("button");
  submitBtn.disabled = true;

  setTimeout(() => {
    submitBtn.disabled = false;
  },1000);
  showMessage(
    `Thank you, ${inputs.name.value}! We received your message.`,"green"
  );

  renderEntries();
  form.reset();

 });

  //============REMOVE A SINGLE ENTRY BY INDEX======== 

  entriesContainer.addEventListener("click", function (e) {
    const btn = e.target.closest(".delete-btn");
    if(!btn) return;
      
      if (!confirm("Delete all messages?"))
        return;

      const index = Number(btn.dataset.index);
      const data = getStoredData();

      data.splice(index, 1);
      setStoredData(data);
       renderEntries();
     
});

 //========== REMOVE ALL ENTRIES FROM LOCALSTORAGE USING CONFIRMATION MESSAGE=======

 /*const clearBtn = document.getElementById("clearDataBtn");

 clearBtn.addEventListener("click",() =>{
  if (!confirm("Delete all messages?"))
    return;
  localStorage.removeItem("contactData");

  savedMsg.textContent = "Saved data cleared";
  savedMsg.style.color = "red";

  form.reset();
 })*/

 //========REMOVE ALL ENTRIES IN SINGLE CLICK USING CONFIRMATION MESSAGE==========

 clearAllBtn .addEventListener("click", () => {
  if (!confirm("Delete all messages?"))
    return;
  localStorage.removeItem("contactData");

  renderEntries();
 });
 
});

