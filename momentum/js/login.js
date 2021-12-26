//const loginForm = document.querySelector("#login-form");

const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form")
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(evnet){
    // const username = loginInput.value;
    // if(username === ""){
    //     alert("Please write your name");
    // }
    // else if(username.length > 15){
    //     alert("Your name is too long.");
    // }
    // console.log("Hello", loginInput.value);
    
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem("username", username);
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
  }

loginForm.addEventListener("submit",onLoginSubmit)

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
