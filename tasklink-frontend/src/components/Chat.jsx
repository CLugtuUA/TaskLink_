// src/components/Chat.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Chat() {
    const { taskId } = useParams();
    
    const [messages, setMessages] = useState([
        { id: 1, sender: 'other', text: 'Hi! I am near the location and can take this task.' }
    ]);
    const [newMessage, setNewMessage] = useState('');
    const [isSending, setIsSending] = useState(false);
    
    // Selenium-friendly state for on-screen errors
    const [errorMessage, setErrorMessage] = useState(''); 

    function handleInputChange(event) {
        setNewMessage(event.target.value);
        setErrorMessage(''); // Clear error when user starts typing again
    }

    async function handleSendMessage(event) {
        event.preventDefault();
        
        // FIXED: Trigger the exact error message required by Lab 08 Rubric for TC05
        if (!newMessage.trim()) {
            setErrorMessage("Incomplete message data");
            return;
        }

        setIsSending(true);
        setErrorMessage(''); // Clear old errors
        
        try {
            await axios.post('http://localhost:3000/api/messages/send', {
                sender_id: 1,    
                receiver_id: 1,  
                content: newMessage
            });

            setMessages(function(prevMessages) {
                return [...prevMessages, { id: Date.now(), sender: 'me', text: newMessage }];
            });
            
            setNewMessage('');
            
        } catch (error) {
            console.error("Error sending message:", error);
            setErrorMessage("Failed to send message. Please try again.");
        } finally {
            setIsSending(false);
        }
    }

    return (
        <div className="flex flex-col h-full pb-20 bg-gray-50"> 
            {/* Chat Header */}
            <div className="p-4 bg-white border-b border-gray-100 shadow-sm shrink-0">
                <h2 className="text-lg font-bold text-gray-900">Task Coordination</h2>
                <p className="text-xs text-task-primary font-semibold">Active Match</p>
            </div>

            {/* Message History Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map(function(msg) {
                    return (
                        <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-sm shadow-sm ${msg.sender === 'me' ? 'bg-task-primary text-white rounded-br-none' : 'bg-white text-gray-800 border border-gray-100 rounded-bl-none'}`}>
                                {msg.text}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Selenium-Friendly Error Display */}
            {errorMessage && (
                <div id="chat-error-msg" className="mx-4 mb-2 p-2 bg-red-100 text-red-700 text-xs font-bold rounded-lg text-center">
                    {errorMessage}
                </div>
            )}

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-100 shrink-0">
                <form onSubmit={handleSendMessage} className="flex gap-2 items-center">
                    
                    <input
                        id="chat-message-input"
                        type="text"
                        value={newMessage}
                        onChange={handleInputChange}
                        placeholder="Type your message..."
                        className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-4 py-2.5 text-sm outline-none focus:border-task-primary focus:ring-1 focus:ring-task-primary"
                    />
                    
                    <button
                        id="chat-send-btn"
                        type="submit"
                        disabled={isSending}
                        className="bg-task-primary text-white p-3 rounded-full shadow-md hover:bg-task-primary/90 transition disabled:opacity-50"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                    </button>

                </form>
            </div>
        </div>
    );
}