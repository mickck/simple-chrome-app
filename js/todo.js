const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
//same   const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

function saveTodos(){
    localStorage.setItem("todos",JSON.stringify(toDos));
    //JSON.stringify : make a string everything in 
}

function deleteTodo(event){
    const li =event.target.parentElement;
    //event == value, event.taget == button, event.target.parentElement == button's li
    li.remove();
}

function paintTodo(newTodo){
const li = document.createElement("li");
const span = document.createElement("span");
const button  =document.createElement("button");
li.appendChild(span);
li.appendChild(button);
span.innerText=newTodo;
button.innerText="❌";
button.addEventListener("click",deleteTodo);
toDoList.appendChild(li);

}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value; 
    // put the todoInputs data to newTodo and delete words in the todoform; 
    toDoInput.value="";
    toDos.push(newTodo);
    paintTodo(newTodo);
    saveTodos();
};

toDoForm.addEventListener("submit", handleToDoSubmit);
