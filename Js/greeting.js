const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');
const HIDDEN_CLASSNAME = 'hidden';
const USERNAME = 'username';
submitBtnClick = (event) => {
    event.preventDefault();
    const userName = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreeting(userName);
    localStorage.setItem(USERNAME, userName);
};

paintGreeting = (username) => {
    greeting.innerText = `Hello ${username} !`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
};

const savedUserName = localStorage.getItem(USERNAME);
console.log('username', savedUserName);
if (savedUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', submitBtnClick);
} else {
    paintGreeting(savedUserName);
}
