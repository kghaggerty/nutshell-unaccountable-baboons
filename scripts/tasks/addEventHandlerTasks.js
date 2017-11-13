//Author: Erin

//Purpose: This page will add event listener to tasks add/update task button to post a task

const taskFactory = require("./createNewTask")
const addTask = require("./saveTaskToDb")


//Grab "task__button" via query selector and assign to variable
const taskButton = document.querySelector(".task__button")

//add event listener to the task button
taskButton.addEventListener("click", (inputTask) => {

    //Verify the button is working by logging to console
    console.log("You added/updated a task");

    //Create list of const for input of task
    const completionDate = document.querySelector("input[name='completion']").value
    const taskName = document.querySelector("input[name='taskname']").value
    const newTask = taskFactory(taskName, completionDate)

    //add new task to local storage
    addTask(newTask) //need to create an add task module
})


module.exports = taskButton.addEventListener