const tasksModel = require('../models/tasksModel');

const listAllTasks = async () => {
    const tasks = await tasksModel.listAllTasks();
    return tasks;
};

const insertNewTask = async (description, createdIn, taskStatus) => {
    const insertedTask = await tasksModel.insertNewTask(description, createdIn, taskStatus);
    // console.log(insertedTask)
    return insertedTask;
    // return { tasks: insertedTask };
};

module.exports = {
    listAllTasks,
    insertNewTask,
    // removeTask,
    // updateTask,
};