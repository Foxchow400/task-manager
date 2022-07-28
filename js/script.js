var create = document.getElementById("createTask");
var taskListElement = document.getElementById("taskList");
var makeId = document.getElementById;
var printCount;
var taskList = [];

function startTask() {
    create.innerHTML = 
    "<form>" +
    "<label for='titleQuery'>Title</label>" +
    "<input id='titleQuery' type='text' name='text'>" +
    "<br>" +
    "<label for='description'>Description</label>" +
    "<input id='description' type='text' name='text'>" +
    "</form>" +
    "<button type='button' onClick='createTask()'>Create</button>" 
};
startTask();

function createTask() {
    var titleInput = document.getElementById("titleQuery").value;
    var descInput = document.getElementById("description").value;
    var taskListCopy = taskList;
    if (titleInput.length > 0) {
        taskListCopy.push([titleInput, descInput]);
        taskList = taskListCopy;
        updateTaskList(taskListCopy);
        document.getElementById("titleQuery").value = "";
        document.getElementById("description").value = "";
        console.log(taskList);
    };
};

function updateTaskList(taskList) {
    //update the button ids to make them match the array
    //display each item in the array    
    var arrayResult = [];
    var taskListStr = "";
    var taskListCopy = taskList;
    console.log(taskListCopy.length);
    if (taskListCopy.length == 1) {
        arrayResult = taskListCopy[0];
        taskListStr += "<div class='card'><h2>" +  arrayResult[0] + "</h2><button id='0' onClick='deleteItem(0)'>x</button><p class='desc'>" + arrayResult[1] + "</p></div>";
    } else {
        for (i = 0; i < taskListCopy.length; i++) {
            arrayResult = taskListCopy[i];
            taskListStr += "<div class='card'><h2>" +  arrayResult[0] + "</h2><button id='0' onClick='deleteItem(" + i + ")'>x</button><p class='desc'>" + arrayResult[1] + "</p></div>";
        };
    };
    taskListElement.innerHTML = taskListStr;
}


function deleteItem(index) {
    //find out which button called it, then delete that button

    console.log(index);

    taskList.splice(index, 1);
    updateTaskList(taskList);

    console.log(taskList);
}

