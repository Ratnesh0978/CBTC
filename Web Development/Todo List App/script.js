const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("listcontainer");

const addtask = ()=>{
    if(inputbox.value === ''){
        alert("Please must write your task!");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let cross = document.createElement("span");
        cross.innerHTML = "x";
        li.appendChild(cross);
    }
    inputbox.value = '';
    saveData();
}

listcontainer.addEventListener('click', (e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

const saveData = ()=>{
    localStorage.setItem("data", listcontainer.innerHTML);
}

const showTask = ()=>{
    listcontainer.innerHTML = localStorage.getItem("data");
}

showTask();