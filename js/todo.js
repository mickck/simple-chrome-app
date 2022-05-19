const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
//same   const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");


function paintTodo(newTodo){
const li = document.createElement("li");
const span = document.createElement("span");

li.appendChild(span);
span.innerText=newTodo;
toDoList.appendChild(li);

}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value; 
    // put the todoInputs data to newTodo and delete words in the todoform; 
    toDoInput.value="";
    paintTodo(newTodo);
    
};

toDoForm.addEventListener("submit", handleToDoSubmit);