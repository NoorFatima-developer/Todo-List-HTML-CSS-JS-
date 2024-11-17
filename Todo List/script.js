// Javascript sy hum jis input "value" ko laingy osko mai yahan pr b leskti o .value krk or nichy 1 aleda sy variable bana k b krskti o..its totally
// depends on me...
// I can do like this:
// const inputFieldE = document.querySelector(".input-todo").value;

// Target DOM elements:
const inputFieldE = document.querySelector("#input_box")
const addButton = document.querySelector("#input-btn");
const ul = document.querySelector(".ul-list")

// log to check k Jin elements ko target kea hai wo target hoey b hain ya nahi...
console.log(inputFieldE, addButton, ul);

// Jesy hi button pr click hoga input m jo b user value likhyga wo js m jygi like this:

addButton.addEventListener("click", function(){
    // Get value of the input field:
    const todotext = inputFieldE.value.trim();       //trim removes extra spaces...
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

    inputFieldE.value = "";

    // *******Delete Button ******************

    // i---Create delete button in this list...
    const deletebutton = document.createElement("button")   //button yahan pr eementnode hai..
    // Give name to button
    deletebutton.textContent = "Delete";                    //delete yahan pr text node hai...
    // // Append button ta k  list mai mjy show ho..
    li.appendChild(deletebutton);

    // ***Ab ye jo meny oper button ka name rkha or append child kea isko m append sy b krskti thie like below:
    // deletebutton.append("delete");
    // li.appendChild(deletebutton);***

    // Add classList ta k m osko style krskon..
    deletebutton.classList.add("delete-btn");

    deletebutton.addEventListener("click", () =>{
        li.remove();
    })


    // *******Edit Button******************

     // ii---create edit button ****************
     const editbutton = document.createElement("button")
     // give name to button
     editbutton.textContent = "Edit"; 
     // append button ta k add pr click krny pr mjy show ho..
     li.appendChild(editbutton);
     // Add classList ta k m osko style krsko
     editbutton.classList.add("edit-btn")

     editbutton.addEventListener("click", () =>{
        const inputFieldE = document.createElement("input")  //element node
        inputFieldE.type = "text";
        inputFieldE.value = li.firstChild.textContent.trim()
        inputFieldE.classList.add("input-field")


         // Save button banaogi jo k updated text ko save kryga
         const saveButton = document.createElement("button");
         saveButton.textContent = "Saved";
         saveButton.classList.add("save-btn");
 
         li.textContent = "";
         li.appendChild(saveButton);
         li.appendChild(inputFieldE);
 
         saveButton.addEventListener("click", () =>{
                 const updatedtext = inputFieldE.value;
                 if(updatedtext !== ""){
                     li.textContent = updatedtext;
                     li.appendChild(editbutton);
                     li.appendChild(deletebutton);
                 }
                 else
                 {
                     alert("Task cannot be completed")
                 }
         })
        //  container jis k andr input-field or save buttons ajye...

        const editcontainer = document.createElement("div");
        editcontainer.classList.add("edit-container");

        editcontainer.appendChild(inputFieldE);
        editcontainer.appendChild(saveButton);
        li.appendChild(editcontainer);

       
     });

   

})


