import React, { useState, useEffect } from 'react';

function TasksList() {
    const [tasks, setTasks] = useState([])

    // UseEffect usado para consumir a API 
    useEffect(() => {
        fetch('http://localhost:3001/tasks')
            .then((data) => data.json())
            .then((tasks) => setTasks(tasks))
            .catch((e) => {
                console.log('API not found')
            })
    });

    return (
        <div>
            <p>TasksList component working!</p>
            <ul>
                {tasks.map((p) => (
                    <li>Task: {p.description} | Creation Date: {p.createdIn} | Status: {p.status} </li>
                ))}
            </ul>
        </div>
    );
}

export default TasksList;
