const mongodbConnection = require('./connection');

const listAllTasks = async () => {
    const db = await mongodbConnection();
    const dbTasks = await db.collection('tasks').find({}).toArray();
    return { tasks: dbTasks };
};

const insertNewTask = async (description, createdIn, taskStatus) => {
    const db = await mongodbConnection();
    const task = await db.collection('tasks').insertOne({ description, createdIn, taskStatus });
    // console.log(task);
    return { _id: task.insertedId, description, createdIn, taskStatus };
};

module.exports = {
    listAllTasks,
    insertNewTask,
    // removeTask,
    // updateTask,
};