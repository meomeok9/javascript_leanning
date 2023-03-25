'use strict';
const cl = something => console.log(something);
const dgEBI = x => document.getElementById(x);
const todoList = dgEBI('todo-list');

const btnAdd = dgEBI('btn-add');
const inputTask = dgEBI('input-task');

class Task {
  constructor(task) {
    this.task = task;
    this.owner = getCurrentUser();
    this.isDone = false;
  }
}
const getAllUserTasks = function () {
  //check login
  if (getCurrentUser() === null) {
    alert('You must login to use this function !');
    return;
  }
  const usertasks = JSON.parse(localStorage.getItem(getCurrentUser().userName));
  //check null of user arr
  if (usertasks != null) return usertasks;
  return [];
};

const isDuplicateUserTask = function () {
  const allUserTask = getAllUserTasks();
  //if nothing in arr then cant not be duplicate
  if (allUserTask.length === 0) return false;
  
  const [taask] = allUserTask.filter(
    t => t.task === inputTask.value
  );
  // check all tasks where input task = userdata tasks , mean duplicate is true
  if (taask != undefined) return true;

  return false;
};

const renderTaskList = function () {
  todoList.innerText = '';
  const allTask = getAllUserTasks();
  // insert to html when exits value in arr
  if (allTask != null)
    allTask.forEach(t => {
      let list = `<li class ="item">${t.task}<span class="close">x</span></li>`;
      if(t.isDone===true)
        list =`<li class ="item checked">${t.task}<span class="close">x</span></li>`;
      todoList.insertAdjacentHTML('afterbegin', list);
    });
};

const addTask = function () {
  //validate
  if (inputTask.value === '') {
    alert('Input task cant blank!');
  }
  if(isDuplicateUserTask()){
    alert('Task already exists');
    return;
  }
  //add task to arr and save to local
  if (inputTask.value != '') {
    const userTasks = getAllUserTasks();
    const userTask = new Task(inputTask.value);
    userTasks.push(userTask);
    localStorage.setItem(getCurrentUser().userName, JSON.stringify(userTasks));
    alert('Sucsess to Register task!');
    renderTaskList();
    inputTask.value = '';
  }
};

function deleteTaskFromStorage(task) {
  const allTasks = getAllUserTasks();
  localStorage.setItem(
    getCurrentUser().userName, // this is key
    JSON.stringify(allTasks.filter(t => t.task !== task)) //new arr within task that contains
  );
  renderTaskList();
}
const todoFunction = function (e) {
  //if close button clicked then delete its in localstorage then reload tasklist
  if (e.target.classList.contains('close')) {
    const thisTask = e.target.closest('.item');
    if (confirm('Are you sure delete this task?'))
      deleteTaskFromStorage(thisTask.textContent.slice(0, -1));
    renderTaskList();
  }
  //if not click on x-button on container add 'checked' class to selected then save to local 
  if (!e.target.classList.contains('close')) {
    const target = e.target;
    target.classList.toggle('checked');
    //cl(target.textContent.slice(0,-1));
    const allTasks = getAllUserTasks();
    const thisTask2 = allTasks[allTasks.findIndex(t=> t.task ===target.textContent.slice(0,-1))];
    thisTask2.isDone = !thisTask2.isDone; // true false switch
    localStorage.setItem(
       getCurrentUser().userName,
       JSON.stringify(allTasks)
     );
     renderTaskList();
     
  }
};

document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    addTask();
  }
});
todoList.addEventListener('click', todoFunction);
renderTaskList();
btnAdd.addEventListener('click', addTask);
