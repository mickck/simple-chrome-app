const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input"); 
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME ="hidden";
const USERNAME_KEY ="username";

function onLoginSubmit(event){
    event.preventDefault();
    //default action that belongs to the event will not occur. this time when I dont'put preeventDefault and press submit, the website do refresh itselfts automatically.
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    // put username to "username"(key)
    console.log(username);

    loginForm.classList.add(HIDDEN_CLASSNAME); 
    // add class hidden to #login-form it hide form after click a button
  console.log(loginForm);
  //check class hidden w/ loginForm
  paintGreetings(username); //username comes from the login-form/input.value
  }
 
 function paintGreetings(username){
  greeting.innerText = `Hello ${username} `;
  greeting.classList.remove(HIDDEN_CLASSNAME);
 }

 loginForm.addEventListener("submit",onLoginSubmit);


 const savedUsername = localStorage.getItem(USERNAME_KEY);

 if(savedUsername=== null){
   // show the form
   loginForm.classList.remove(HIDDEN_CLASSNAME); 
   //loginForm.addEventListener("submit", onLoginSubmit);
 }else{
  paintGreetings(savedUsername);// username comes from the Localstorage
  // show the greeting
 }