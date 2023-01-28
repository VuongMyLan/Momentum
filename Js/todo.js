const toDoForm = document.getElementById('todo-form');
const toDoList = document.getElementById('todo-list');
const toDoInput = toDoForm.querySelector('input');
const button = document.createElement('button');
const TODOS = 'todos';

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS, JSON.stringify(toDos));
}

function paintToDo(newToDo) {
    const li = document.createElement('li');
    li.id = newToDo.id;
    const span = document.createElement('span');
    span.innerText = newToDo.text;
    const button = document.createElement('button');
    button.innerText = '❌';
    button.addEventListener('click', deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    console.log(toDoInput.value);
    const newToDo = toDoInput.value;
    toDoInput.value = '';
    const newToDoObj = {
        id: Date.now(),
        text: newToDo,
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    console.log(li.id);
    li.remove();
    toDos = toDos.filter((e) => e.id !== parseInt(li.id));
    saveToDos();
}

const savedToDos = localStorage.getItem(TODOS);
if (savedToDos !== null) {
    const parseToDos = JSON.parse(savedToDos);
    toDos = parseToDos;
    parseToDos.forEach((element) => {
        paintToDo(element);
    });
}

toDoForm.addEventListener('submit', handleToDoSubmit);
