const inputField = document.querySelector("#input_box")
const addButton = document.querySelector("#input-btn");
const ul = document.querySelector(".ul-list")
const completedCounter = document.querySelector(".completed-counter");
const uncompletedCounter = document.querySelector(".uncompleted-counter");

let userArray = [];
let edit_id = null;


const objStr = localStorage.getItem("users");
if(objStr!=null){
    userArray  = JSON.parse(objStr)
}

addButton.onclick = () => {
    const name = inputField.value.trim();

    if(edit_id!=null){
        //edit
        userArray.splice(edit_id, 1,{"names": name});
        edit_id = null;
    }else{
        //insert
        if(name == ""){
        alert("Please Enter a Name");
        return;
        }else
         userArray.push({"names": name})
    }

    saveInfo(userArray); // Save data and update UI
    inputField.value = ""; // Clear input field
    addButton.innerText = "Add"
}   

function saveInfo(arr){
    let str = JSON.stringify(arr);
    localStorage.setItem("users", str);
    DisplayInfo()

}

function DisplayInfo(){
    let statement = '';
    userArray.forEach((user, i) => {
        statement += `
        <li>
        <input 
                type="checkbox" 
                ${user.completed ? "checked" : ""}
                onclick="toggleTaskStatus(${i})"
            />
        ${user.names}
        <button onclick="EditInfo(${i})" class = "edit">Edit</button>
        <button onclick="DeleteInfo(${i})" class = "delete">Delete</button>
        </li>
        `
    })
    ul.innerHTML = statement
    updateCounters();
}

function EditInfo(id){
    edit_id = id;
    inputField.value = userArray[id].names;
    addButton.innerText = "Update"
}

function DeleteInfo(id){
    userArray.splice(id, 1)
    saveInfo(userArray);
}

function updateCounters() {
    const completedTasks = userArray.filter((task) => task.completed).length;
    const UncompletedTasks = userArray.length - completedTasks;

    completedCounter.innerText = completedTasks;
    uncompletedCounter.innerText = UncompletedTasks;
}

function toggleTaskStatus(index) {
    const task = userArray[index];
    task.completed = !task.completed; // Switch the status
    saveInfo(userArray); // Save data and update UI
    updateCounters();      // Update counters based on updated status
}
