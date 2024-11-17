const inputField = document.querySelector("#input_box")
const addButton = document.querySelector("#input-btn");
const ul = document.querySelector(".ul-list")
let userArray = [];

const objStr = localStorage.getItem("users");
if(objStr!=null){
    userArray  = JSON.parse(objStr)
}

addButton.onclick = () => {
    const name = inputField.value.trim();
    userArray.push({"names": name})
        saveInfo(userArray)
        inputField.value = "";
}   


function saveInfo(arr){
    let str = JSON.stringify(arr);
    localStorage.setItem("users", str)
}

function DisplayInfo(){

}

function EditInfo(){

}

function DeleteInfo(){

}