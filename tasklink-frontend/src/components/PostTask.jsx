// src/components/PostTask.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function PostTask() {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const [budget, setBudget] = useState('');
    const [statusMessage, setStatusMessage] = useState({ text: '', type: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    function handleTitleChange(event) { setTitle(event.target.value); }
    function handleDetailsChange(event) { setDetails(event.target.value); }
    function handleBudgetChange(event) { setBudget(event.target.value); }

    async function handlePostTask(event) {
        event.preventDefault();
        setIsSubmitting(true);
        setStatusMessage({ text: '', type: '' });
        
        try {
            const response = await axios.post('http://localhost:3000/api/tasks/create', {
                poster_id: 1, 
                title: title,
                price: budget 
                // Note: Removed 'description' to prevent the 500 error unless you added it to your DB
            });

            if (response.data.status === "success") {
                setStatusMessage({ text: 'Task Posted Successfully!', type: 'success' });
                setTimeout(() => {
                    navigate('/home');
                }, 1500);
            }
        } catch (error) {
            console.error("Error posting task:", error);
            setStatusMessage({ text: 'Failed to post task. Check if the server is running.', type: 'error' });
            setIsSubmitting(false);
        }
    }

    return (
        <div className="page p-4 bg-white w-full h-full pb-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">List a New Task</h2>
            
            {statusMessage.text && (
                <div id="status-message" className={`p-4 mb-6 rounded-lg font-medium text-center ${statusMessage.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {statusMessage.text}
                </div>
            )}

            <form id="post-task-form" onSubmit={handlePostTask}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Task Title</label>
                    {/* ADDED: id="task-title-input" */}
                    <input id="task-title-input" type="text" value={title} onChange={handleTitleChange} required className="w-full p-3 border border-gray-300 rounded-lg outline-none" placeholder="e.g., Grocery Shopping" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Details</label>
                    {/* ADDED: id="task-details-input" */}
                    <textarea id="task-details-input" value={details} onChange={handleDetailsChange} required rows="4" className="w-full p-3 border border-gray-300 rounded-lg outline-none" placeholder="Describe the task..."></textarea>
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Budget (₱)</label>
                    {/* ADDED: id="task-budget-input" */}
                    <input id="task-budget-input" type="number" value={budget} onChange={handleBudgetChange} required className="w-full p-3 border border-gray-300 rounded-lg outline-none" placeholder="150" />
                </div>

                {/* ADDED: id="submit-task-btn" */}
                <button 
                    id="submit-task-btn"
                    type="submit" 
                    disabled={isSubmitting}
                    className={`w-full text-white font-semibold p-3 rounded-xl shadow-lg transition ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-task-primary hover:opacity-90'}`}
                >
                    {isSubmitting ? 'Posting...' : 'Post Task Listing'}
                </button>
            </form>
        </div>
    );
}