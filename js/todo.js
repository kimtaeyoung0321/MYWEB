const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");
const TODOS_KEY = "toDos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  /*console.log(newTodo);*/
  const newTodoObject = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObject);
  paintToDo(newTodoObject);
  saveToDos();
}

function paintToDo(newtoDo) {
  const todoLi = document.createElement("li");
  todoLi.id = newtoDo.id;
  /*console.log(typeof todoLi.id);*/
  const todoLiSpan = document.createElement("span");
  const button = document.createElement("button");
  todoLiSpan.innerText = newtoDo.text;
  button.innerText = "Clear";
  button.addEventListener("click", DeleteTodolistButton);
  todoLi.appendChild(todoLiSpan);
  todoLi.appendChild(button);
  todoList.appendChild(todoLi);
}

function DeleteTodolistButton(event) {
  const li = event.target.parentElement;
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
  li.remove();
  saveToDos();
}

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(
    paintToDo
  ); /*  paintTodo({text: "a", id: 1675616845~~ })   paintTodo(text: "b", id: 1641684~~)  .......  */
}

todoForm.addEventListener("submit", handleTodoSubmit);
