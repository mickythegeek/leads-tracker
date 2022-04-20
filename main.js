let myLeads = [];

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
const ulEl = document.getElementById("ul-el");

// Get the leads from LocalStorage
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

// Check if leadsFromLocalStorage is truthy
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `<li>
              <a target = '_blank' href = '${leads[i]}'>
                ${leads[i]} 
              </a>
          </li>`;
  }
  ulEl.innerHTML = listItems;
}

// When the Save Input button is clicked
inputBtn.addEventListener("click", () => {
  myLeads.push(inputEl.value);
  inputEl.value = "";

  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
});

deleteBtn.addEventListener("dblclick", () => {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});
