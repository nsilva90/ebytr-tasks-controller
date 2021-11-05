import React, { useState, useEffect } from 'react';
import api from "../services/api";

function TasksList() {
    const [tasks, setTasks] = useState([])
    console.log(tasks)

    useEffect(() => {
        api.get("/")
            .then(({ data }) => setTasks(data.tasks))
            .catch((e) => {
                console.log(e)
            })
    }, []);

    return (
        <div>
            <h1 className="title">EBYTR Tasks Controller</h1>
            <ul>
                {tasks.map((p) => (
                    <li className="lineTask" key={p._id}>Task: {p.description} | Creation Date: {p.createdIn} | Status: {p.taskStatus} </li>
                ))}
            </ul>
        </div>
    );
}

export default TasksList;
