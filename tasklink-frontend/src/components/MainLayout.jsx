// src/components/MainLayout.jsx
import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import BottomNav from './BottomNav';

export default function MainLayout() {
    const location = useLocation();
    const navigate = useNavigate();

    const titles = {
        '/home': 'Home',
        '/post': 'Post a Task',
        '/tasks': 'My Tasks',
        '/wallet': 'My Wallet',
        '/profile': 'Profile'
    };

    const currentTitle = titles[location.pathname] || 'TaskLink';
    const isSubPage = location.pathname.startsWith('/chat') || location.pathname === '/post';

    return (
        <div id="app-container" className="flex flex-col bg-white">
            {/* OFFICIAL HEADER: Single & Persistent */}
            <header id="app-header" className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between shrink-0 z-30">
                <div className="flex items-center gap-3">
                    {isSubPage && (
                        <button onClick={function() { navigate(-1); }} className="text-gray-400">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                    )}
                    <h1 className="text-lg font-bold text-gray-900">{currentTitle}</h1>
                </div>

                {/* Official Action Icons */}
                <div className="flex gap-4">
                    <button onClick={function() { navigate('/chat/active'); }} className="text-gray-400">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                    </button>
                    <div className="relative cursor-pointer">
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                        <span className="absolute top-0.5 right-0.5 w-2 h-2 bg-red-500 border-2 border-white rounded-full"></span>
                    </div>
                </div>
            </header>

            {/* Content Area */}
            <main id="app-content" className="flex-1 overflow-y-auto bg-gray-50">
                <Outlet /> 
            </main>

            <BottomNav />
        </div>
    );
}