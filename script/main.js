let currentTab = "all";
const tabActive = ["btn-primary"];
const tabInactive = ["bg-transparent", "text-slate-700"];

function switchTab(tab){
console.log(tab);
const tabs = ["all", "interview", "rejected"];

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
}
switchTab(currentTab); //globally tab added

