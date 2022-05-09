const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input"); // find input of #login-form
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME ="hidden";

function onLoginSubmit(event){
    event.preventDefault();
    //default action that belongs to the event will not occur. this time when I dont'put preeventDefault and press submit, the website do refresh itselfts automatically.
    const userName = loginInput.value;
    localStorage.setItem("username",userName);
    // put username to "username"(key)
    console.log(userName);

    loginForm.classList.add(HIDDEN_CLASSNAME); 
    // add class hidden to #login-form it hide form after click a button
  console.log(loginForm);
  //check class hidden w/ loginForm
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello  +${userName} `;

 }
 
 loginForm.addEventListener("submit",onLoginSubmit);

 