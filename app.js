const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input"); // find input of #login-form







function onLoginSubmit(event){
    event.preventDefault();
    //default action that belongs to the event will not occur.
    console.log(event);
  
 }
 
 loginForm.addEventListener("submit",onLoginSubmit);

 