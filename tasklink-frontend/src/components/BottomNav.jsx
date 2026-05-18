// src/components/BottomNav.jsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function BottomNav() {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <nav className="bg-white border-t border-gray-100 p-3 flex justify-around fixed bottom-0 w-full max-w-[400px] z-50">
            
            {/* Home */}
            <button id="nav-home-btn" onClick={function() { navigate('/home'); }} className={`flex flex-col items-center ${location.pathname === '/home' ? 'text-task-primary' : 'text-gray-400'}`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                <span className="text-[10px] mt-1 font-bold">Home</span>
            </button>

            {/* Post */}
            <button id="nav-post-btn" onClick={function() { navigate('/post'); }} className={`flex flex-col items-center ${location.pathname === '/post' ? 'text-task-primary' : 'text-gray-400'}`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
                <span className="text-[10px] mt-1 font-bold">Post</span>
            </button>

            {/* Tasks */}
            <button id="nav-tasks-btn" onClick={function() { navigate('/tasks'); }} className={`flex flex-col items-center ${location.pathname === '/tasks' ? 'text-task-primary' : 'text-gray-400'}`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
                <span className="text-[10px] mt-1 font-bold">Tasks</span>
            </button>

            {/* Wallet */}
            <button id="nav-wallet-btn" onClick={function() { navigate('/wallet'); }} className={`flex flex-col items-center ${location.pathname === '/wallet' ? 'text-task-primary' : 'text-gray-400'}`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                <span className="text-[10px] mt-1 font-bold">Wallet</span>
            </button>

            {/* Profile */}
            <button id="nav-profile-btn" onClick={function() { navigate('/profile'); }} className={`flex flex-col items-center ${location.pathname === '/profile' ? 'text-task-primary' : 'text-gray-400'}`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                <span className="text-[10px] mt-1 font-bold">Profile</span>
            </button>
            
        </nav>
    );
}