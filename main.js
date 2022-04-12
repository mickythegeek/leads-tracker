let myLeads = [];

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");

const ulEl = document.getElementById("ul-el");

// console.log(ulEl);

inputBtn.addEventListener("click", () => {
  myLeads.push(inputEl.value);
  renderLeads();
  inputEl.value = "";
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += "<li>" + myLeads[i] + "</li>";
    console.log(listItems);
  }
  ulEl.innerHTML = listItems;
}
