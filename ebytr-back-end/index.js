const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
// const fs = require('fs').promises

const tasksController = require('./controllers/tasksController');

const app = express()
app.use(bodyParser.json());

app.use(cors())

const PORT = 3001

app.get('/tasks', tasksController.listAllTasks);
app.post('/tasks', tasksController.insertNewTask);

// This endpoint will return the complete list of tasks:
// app.get('/tasks', async (req, res) => {
//     try {
//         const dbData = await fs.readFile('./dbTasks.json')
//         res.status(200).json(JSON.parse(dbData))
//     } catch (error) {
//         res.status(400).json({ message: "API connection failed" })
//     }
// })

app.listen(PORT, () => console.log(`Server conected to port ${PORT}`));