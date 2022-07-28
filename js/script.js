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
    var taskListStr = "";
    var taskListCopy = taskList;
    console.log(taskListCopy.length);
    //this if statement uses the i variable as an index to make new tasks with unique id's, this also updates the title and description data.
    if (taskListCopy.length == 1) {
        //this if statement first executes the exception for the event i = 0 (the index is zero, if we tell it to be 0 - 1 it will not work because it is a negative) 
        currentTask = taskListCopy[0];
        taskListStr += "<div class='card'><input type='text' id='0' class='t' onkeydown='updateTitleValue(event)' value='" +  currentTask[0] + "'><button id='0' onClick='deleteItem(0)'>x</button><input type='text' class='d' onkeydown='updateDescValue(event)' value='" +  currentTask[1] + "'></div>";
    } else {
        //this for loop defines what happens the rest of the time, when i > 0 (if i is greater than zero then subtracting one is fine)
        for (i = 0; i < taskListCopy.length; i++) {
            currentTask = taskListCopy[i];
            console.log(currentTask);
            taskListStr += "<div class='card'><input type='text' id='" + i +
            "' class='t' onkeydown='updateTitleValue(event)' value='" +  currentTask[0] +
            "'><button id='" + i +
            "' onClick='deleteItem(" + i +
            ")'>x</button><input type='text' class='d " + i + "' desc='test' onkeydown='updateDescValue(event)' value='" +
            currentTask[1] + "'></div>";
        };
    };
    taskListElement.innerHTML = taskListStr;
}


//function that sets the value of the current title array input based on the button id
function updateTitleValue(event) {
    if (event.key === "Enter") {
        taskList[event.target.id][0] = event.target.value;
        updateTaskList(taskList);
    }
}
//function that sets the value of the current description array input based on the button id
function updateDescValue(event) {
    if (event.key === "Enter") {
        console.log(event);
        console.log(document.getElementByDesc)
        console.log(taskList[event.target.desc]);
        taskList[document.getElementsByClassName(i)][1] = event.target.value;
        updateTaskList(taskList);
    }
}

function deleteItem(index) {
    //find out which button called it, then delete that button

    console.log(index);

    taskList.splice(index, 1);
    updateTaskList(taskList);

    console.log(taskList);
}

