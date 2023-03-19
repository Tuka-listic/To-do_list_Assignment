// Create a simple todo list that has the following functionalities

/**
 * add a new item to the todo list
 * remove an item in the todo list
 * 
    some further requirements:
    - the input field must be reset when the add button is clicked on
    - the todo list must show the most recent first 
 */

   

    // to store a to-do list
    // const addButton = document.getElementByI("add-button");
    // const inputField = document.getElementById("new-task");
    // const uList = document.getElementById("incomplete-tasks");

    // To check if input is empty

    document.querySelector('#add-button').onclick = function(){
     if (document.querySelector('.new-container input').value.length == 0){alert("Must input a task!!!")
     } 

     // To add an item to toDoList
     
     else {
      document.querySelector('#incomplete-tasks').innerHTML += `
      <li class="item">
        <p>${document.querySelector('.new-container input').value}</p>
        <button class="edit-button">Edit</button>
        <button class="delete-button">Delete</button>
     </li>
      `;

      // To reset input view to empty

      document.querySelector('input').value = "";
      
      //
      var value1 = document.querySelector('input').value;

 // To edit an item on toDoList

 var edit_current_tasks = document.querySelectorAll(".edit-button",);
 for(var i=0; i< edit_current_tasks.length; i++){
  edit_current_tasks[i].onclick = function(){
   this.parentNode.value()==value1;
  }
 }

    // To remove an item from toDoList

    var delete_current_tasks = document.querySelectorAll(".delete-button",);
    for(var i=0; i< delete_current_tasks.length; i++){
     delete_current_tasks[i].onclick = function(){
      this.parentNode.remove();
     }
    }
   }
  }




// Using localStorage to store the todo list
const input = document.querySelector("input"),
h2 = document.querySelector("h2");
h2.innerHTML = localStorage.getItem("task")
input.onclick("task", display);

function display() {
   localStorage.setItem("task".input.value);
   h2.innerHTML = localStorage.getItem("task")
}

// var O = {x: 10};
// localStorage.setItem("0", 0);
// console.log(localStorage.getItem("0"));
