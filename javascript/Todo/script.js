document.getElementById("addBtn").addEventListener("click", () => {
  let todoInput = document.getElementById("todoInput");
  let newTodo = document.createElement("div");
  newTodo.classList.add("singleTodo");
  newTodo.innerHTML = `
    <input type="checkbox" name="" id="">
    <h2>${todoInput.value}</h2>
    <button class="deleteBtn">Delete</button>
  `;
  document.querySelector(".allTodo").appendChild(newTodo);
  todoInput.value = "";
});

document.getElementById("deleteBtn").addEventListener("click", () => {
  document.querySelector(".singleTodo").remove();
});
