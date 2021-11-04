import React, { useState, useEffect } from 'react';

function TasksList() {
    const [tasks, setTasks] = useState([])

    // UseEffect used to consume the API 
    useEffect(() => {
        fetch('http://localhost:3001/tasks')
            .then((data) => data.json())
            .then((tasks) => setTasks(tasks))
            .catch((e) => {
                console.log('API not found')
            })
    }, []);

    return (
        <div>
            <h1>EBYTR Tasks Controller</h1>
            <ul>
                {tasks.map((p) => (
                    <li key={p.id}>Task: {p.description} | Creation Date: {p.createdIn} | Status: {p.status} </li>
                ))}
            </ul>
        </div>
    );
}

export default TasksList;
