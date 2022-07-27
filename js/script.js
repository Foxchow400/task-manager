var create = document.getElementById("createTask");
var taskListElement = document.getElementById("taskList");
var printResult
var titleQuery;
var descQuery;
var descInput;
var taskList = [];
var taskListLength = taskList.length;
var count = 0;
var arrayResult;

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
    count = count + 1 
    console.log(count);
    titleInput = document.getElementById("titleQuery").value;
    descInput = document.getElementById("description").value;
    taskList.push([titleInput, descInput]);
    console.log(taskList);
    // taskListElement.innerHTML = taskList[0] + taskList[1];
    formatTask();
    // document.getElementById("titleQuery").value = "";
    // document.getElementById("description").value = "";
};

function formatTask() {
    //make a loop that prints the results from the array    
    //updates the arrayResults variable so that it can be used to update the html correctly 
    arrayResult = taskList[count - 1];
    //updates the section innerHTML and uses tags so it displays correctly
    document.getElementById("taskList").innerHTML += "<p>" + arrayResult + "</p>"

}
