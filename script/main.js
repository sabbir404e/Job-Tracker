let currentTab = "all";
const tabActive = ["btn-primary"];
const tabInactive = ["bg-transparent", "text-slate-700"];

const allContainer = document.getElementById("all-container");
const interviewContainer = document.getElementById("interview-container");
const rejectedContainer = document.getElementById("reject-container");
const emptyContainer = document.getElementById("empty-part");

console.log(allContainer, interviewContainer, rejectedContainer);

function switchTab(tab){
console.log(tab);
const tabs = ["all", "interview", "rejected"];
currentTab = tab;

for(const t of tabs){
    const tabName = document.getElementById("tab-"+t);
    if(t==tab){
        tabName.classList.remove(...tabInactive);
        tabName.classList.add(...tabActive);
    }
    else{
        tabName.classList.remove(...tabActive);
        tabName.classList.add(...tabInactive);
    }
}
  const pages = [allContainer, interviewContainer, rejectedContainer];
  for (const section of pages) {
    section.classList.add("hidden");
  }

emptyContainer.classList.add("hidden");

  if(tab === "all"){
    allContainer.classList.remove("hidden");
    if(allContainer.children.length < 1){
        emptyContainer.classList.remove("hidden");
    }
  }
  else if(tab === "interview"){
    interviewContainer.classList.remove("hidden");
    if(interviewContainer.children.length < 1){
        emptyContainer.classList.remove("hidden");
    }
  }
  else{
    rejectedContainer.classList.remove("hidden");
    if(rejectedContainer.children.length < 1){
        emptyContainer.classList.remove("hidden");
    }
  }
  updateSum();
  
}

//sum update
const totalSum = document.getElementById("sum-total");
const totalInterview = document.getElementById("sum-interview");
const totalRejected = document.getElementById("sum-rejected");
const totalAvailable = document.getElementById("available");

totalSum.innerText = allContainer.children.length; //total


switchTab(currentTab); //globally tab added


document.getElementById("jobs-container").addEventListener("click", function(event){
  
    const clickElement = event.target;
    const card = clickElement.closest(".card");
    const parent = card.parentNode;
    const status = card.querySelector(".status");

    if(clickElement.classList.contains("interview")){
        status.innerText = "Interviewed";
        interviewContainer.appendChild(card);
        // updateSum()
    }

    if(clickElement.classList.contains("rejected")){
        status.innerText = "Rejected";
        rejectedContainer.appendChild(card);
        // updateSum()
    }

    if(clickElement.classList.contains("delete")){
        parent.removeChild(card);
        // updateSum()
    }
    updateSum()

});


function updateSum(){

    const counts = {
        all : allContainer.children.length,
        interview : interviewContainer.children.length,
        rejected : rejectedContainer.children.length,
    };

    totalSum.innerText = counts.all;
    totalInterview.innerText = counts.interview;
    totalRejected.innerText = counts.rejected;
    totalAvailable.innerText = counts[currentTab];

    if(counts[currentTab] < 1){
        emptyContainer.classList.remove("hidden");
    }
    else{
         emptyContainer.classList.add("hidden");
    }
}

updateSum();


