let arrayTodos = localStorage.getItem("array")
  ? JSON.parse(localStorage.getItem("array"))
  : [];

document.querySelector("#addInput").addEventListener("change", (e) => {
    arrayTodos.unshift(e.target.value);
    e.target.value = "";
    localStorage.setItem("array", JSON.stringify(arrayTodos));
    render();
});

function deleteTodos(index) {
    arrayTodos.splice(index, 1);
    localStorage.setItem("array", JSON.stringify(arrayTodos));
    render();
}

function editTodos(index) {
  const y = document.querySelectorAll(".textInput");
  const z = document.querySelectorAll(".pInput");
  y[index].style.display = "block";
  if (
    y[index].addEventListener("change", (e) => {
      arrayTodos[index] = e.target.value;
      localStorage.setItem("array", JSON.stringify(arrayTodos));
      z[index].innerHTML = e.target.value;
      y[index].style.display = "none";
    })
  );
}

document.querySelector("#searchInput").addEventListener("input", (e) => {
    let x = [];
    arrayTodos = JSON.parse(localStorage.getItem("array"));
    arrayTodos.map((todo) => {
      if (todo.startsWith(e.target.value)) {
        x.push(todo);
      }
      arrayTodos = x;
      render();
    });
  });

function render() {
  let x = document.querySelector(".appendTodos");
  x.innerHTML = "";
  arrayTodos.map((todo, index) => {
    let y = document.createElement("div");
    y.classList.add("todo");
    if (todo !== " ") {
      y.innerHTML = `<input type="text" class="textInput" value=${todo}>
      <p class="pInput">${todo}</p>
      <i class="fa fa-trash" id="trash" onclick="deleteTodos(${index})" ></i>
      <i class="fa fa-edit" id="edit" onclick="editTodos(${index})"></i>`;
      x.appendChild(y);
    }
  });
}

render();
