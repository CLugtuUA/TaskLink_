// src/components/Home.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
    const [tasks, setTasks] = useState([]);

    useEffect(function() {
        async function fetchTasks() {
            try {
                const response = await axios.get('http://localhost:3000/api/tasks/nearby?location=San Fernando');
                setTasks(response.data.data);
            } catch (error) {
                console.error("Error fetching tasks:", error);
            }
        }
        fetchTasks();
    }, []);

    return (
        <div className="px-6 py-6 pb-24"> {/* Added pb-24 to ensure bottom content clears the nav */}
            <h2 className="text-2xl font-black text-gray-900 mb-6">Your Task Hub</h2>

            {/* Your Active Request Section */}
            <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-lg font-bold text-task-primary">Your Active Request</h3>
                    <span className="bg-blue-50 text-task-primary text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">3 Bids</span>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-50 transition active:scale-[0.98] cursor-pointer">
                    <h4 className="text-lg font-bold text-gray-800">Pick up my dry cleaning</h4>
                    <p className="text-sm text-gray-400 mt-1">Due by 5 PM, 2 miles away.</p>
                    <div className="mt-4 flex justify-between items-end">
                        <span className="text-2xl font-black text-emerald-500">$15-20</span>
                        <button className="text-task-primary text-xs font-bold hover:underline">View Bids →</button>
                    </div>
                </div>
            </div>

            {/* Tasks Near You Feed */}
            <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Tasks Near You</h3>
                <div className="space-y-4">
                    {tasks.length > 0 ? tasks.map(function(task) {
                        return (
                            <div key={task.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-50">
                                <h4 className="text-lg font-bold text-gray-800">{task.title}</h4>
                                <p className="text-sm text-gray-400 mt-1">
                                    {task.description || "Daily task, nearby your location."}
                                </p>
                                <div className="mt-4 flex justify-between items-center">
                                    <span className="text-2xl font-black text-emerald-500">₱{task.price}</span>
                                    
                                    {/* CRITICAL FIX: Unique ID dynamically generated using task.id */}
                                    <button 
                                        id={`view-task-${task.id}`} 
                                        className="bg-task-primary text-white text-xs font-bold px-6 py-2.5 rounded-full shadow-lg shadow-indigo-100 transition active:scale-95"
                                    >
                                        View Task
                                    </button>
                                </div>
                            </div>
                        );
                    }) : (
                        <div className="text-center py-10">
                            <p className="text-gray-400 italic">No tasks nearby right now.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}