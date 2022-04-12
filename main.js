let myLeads = ["facebookleads.com", "getthoseleads.com", "genuineleads.com"];

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");

const ulEl = document.getElementById("ul-el");

// console.log(ulEl);

inputBtn.addEventListener("click", () => {
  myLeads.push(inputEl.value);
  console.log(myLeads);
});





for (let i = 0; i < myLeads.length; i++) {
  ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
}
