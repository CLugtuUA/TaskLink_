import { useState, useEffect } from 'react';
import api from '../api';

export default function TaskList() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(function() {
        async function fetchTasks() {
            try {
                // Adjust the location parameter as needed
                const response = await api.get('/tasks/nearby?location=San Fernando');
                setTasks(response.data.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch tasks. Make sure the backend is running.');
                setLoading(false);
            }
        }

        fetchTasks();
    }, []);

    if (loading) return <p>Loading available tasks...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="task-list">
            <h2>Local Tasks in San Fernando</h2>
            {tasks.length === 0 ? (
                <p>No open tasks available right now.</p>
            ) : (
                <ul>
                    {tasks.map(function(task) {
                        return (
                            <li key={task.task_id} style={{ border: '1px solid #ccc', margin: '10px 0', padding: '10px' }}>
                                <h3>{task.title}</h3>
                                <p>Price: ₱{task.price}</p>
                                <button>Accept Task</button>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
}