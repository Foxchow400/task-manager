var create = document.getElementById("createTask");
var taskListElement = document.getElementById("taskList");
var titleQuery;
var descQuery;
var descInput
var taskList = [];

function startTask() {
    create.innerHTML = 
    "<form>" +
    "<label for='titleQuery'>Title</label>" +
    "<input id='titleQuery' type='text' name='text'>" +
    "<label for='description'>Description</label>" +
    "<input id='description' type='text' name='text'>" +
    "</form>" +
    "<button type='button' onClick='createTask()'>Create</button>" 
};
startTask();

function createTask() {
    titleInput = document.getElementById("titleQuery").value;
    descInput = document.getElementById("description").value;
    taskList.push([titleInput, descInput])
    console.log(taskList);
    taskListElement.innerHTML = taskList.toString();
    // document.getElementById("titleQuery").value = "";
    // document.getElementById("description").value = "";
};
