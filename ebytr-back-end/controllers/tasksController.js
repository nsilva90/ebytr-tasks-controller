const tasksService = require('../services/tasksService');

const listAllTasks = async (_req, res) => {
    const tasks = await tasksService.listAllTasks();
    res.status(200).json(tasks);
};

const insertNewTask = async (req, res) => {
    const { description, createdIn, taskStatus } = req.body;
    const insertedTask = await tasksService.insertNewTask(description, createdIn, taskStatus);
    return res.status(201).json(insertedTask);
};

module.exports = {
    listAllTasks,
    insertNewTask,
    // removeTask,
    // updateTask,
};