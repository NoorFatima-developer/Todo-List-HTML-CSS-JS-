// Javascript sy hum jis input "value" ko laingy osko mai yahan pr b leskti o .value krk or nichy 1 aleda sy variable bana k b krskti o..its totally
// depends on me...

// I can do like this:
// const inputField = document.querySelector(".input-todo").value;

// Target DOM elements:
const inputField = document.querySelector("#input_box")
const addButton = document.querySelector("#input-btn");
const ul = document.querySelector(".ul-list")

// log to check k Jin elements ko target kea hai wo target hoey b hain ya nahi...
console.log(inputField, addButton, ul);


// Jesy hi button pr click hoga input m jo b user value likhyga wo js m jygi like this:

addButton.addEventListener("click", function(){
    // Get value of the input field:
    const todotext = inputField.value.trim();       //trim removes extra spaces...
    if(todotext === ""){
        alert("Please enter a todo");
        return;
    }

    // List of todos.jo ul m append o gi:
    const li = document.createElement("li");

    li.textContent = todotext;
    ul.appendChild(li);

    // Aghr m line 23, 24 ko append sy krti tu krskti thie lkin better yhi hota k elment node klye appendChil e use kry..
    // lkin append ko b krskty thy like this:

    // li.append(todotext)
    // ul.append(li)

    // Ab 1 dfa value add hogi phr osko clear krygy ta k new value add krsky user:

    inputField.value = "";

})

