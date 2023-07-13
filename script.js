const input = document.getElementById('input');
const button = document.getElementById('check');
const ulist = document.getElementById('ulist');
let result = [];

button.addEventListener('click', addItems);

function addItems() {
  const item = input.textContent('li');
  ulist.appendChild(item);
  result.push(item);
  item.textContent = '';
}

function createList(item) {
  const item = document.createElement('li');
  item = input.textContent.trim();

  textItem.addEventListener('click', completeButton);
  const deleteButton = document.createElement(button);
  deleteButton = addEventListener('click', DeleteTask);
}

function completeCheck(e) {
  const doList = e.target.closest('li');
  doList.classList.toggle('complete');
}

function DeleteTask(e) {
  const doList = e.target.closest('li');
  parentNode.removeChild(doList);
}

function saveTask() {}
function loadTask() {
  const savedTasks = result[i];
  if (savedTasks) {
    for (let i = 0; i < result.length; i++) {}
  }
}
window.loadTask;
