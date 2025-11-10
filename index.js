
let myLeads = []; 
let inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");  
let resetBtn = document.getElementById("reset-btn");
const tabBtn = document.getElementById("save-tab"); 

resetBtn.addEventListener("click", function() {
  localStorage.clear();
  myLeads = [];
  renderLeads();
});


let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") );

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  renderLeads();
}



inputBtn.addEventListener("click", function(){
  
  myLeads.push(inputEl.value);
  
  inputEl.value = "";
  
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  
  renderLeads();
  
}); 

tabBtn.addEventListener("click", function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderLeads();
  })
});

function renderLeads() {
  let listItems = "";
  for(let i = 0; i < myLeads.length; i++) {
    listItems += `
      <li>
        <a href="${myLeads[i]}" target="_blank">
        ${myLeads[i]}
        </a>
      </li>
      `; 
  }
  ulEl.innerHTML = listItems;
}














// const baseprice = 520;
// const discount = 20;
// let shippingCost = 12;
// let shippingTime = "5-12 days";

// shippingCost = 15;
// shippingTime = "7-14 days";

// const fullPrice = baseprice - discount + shippingCost;


// console.log("Total Price: " + fullPrice + ". It will arrive in " + shippingTime);