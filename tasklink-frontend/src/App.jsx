// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importing Page Components mapping to System Features
import Login from './components/Login';
import MainLayout from './components/MainLayout';
import Home from './components/Home';
import PostTask from './components/PostTask';
import MyTasks from './components/MyTasks';
import Wallet from './components/Wallet';
import Profile from './components/Profile';
import Chat from './components/Chat';

/**
 * REQ-01: Standard Function Declarations used for Professor preference.
 * This file serves as the main entry point for the Presentation Layer.
 */
export default function App() {
    return (
        <Router>
            <Routes>
                {/* Initial Entry Point: Account Management (Process 1.0) */}
                <Route path="/" element={<Login />} />
                
                {/* Protected Application Hub: Nested within MainLayout Frame */}
                <Route element={<MainLayout />}>
                    
                    {/* REQ-02 & REQ-03: Geofenced Task Browsing (Process 2.0) */}
                    <Route path="/home" element={<Home />} />
                    
                    {/* REQ-02: Local Task Posting */}
                    <Route path="/post" element={<PostTask />} />
                    
                    {/* REQ-03 & REQ-05: Task Inventory and Completion Review (Process 4.0) */}
                    <Route path="/tasks" element={<MyTasks />} />
                    
                    {/* Wallet and Financial Status (Part of Process 1.0) */}
                    <Route path="/wallet" element={<Wallet />} />
                    
                    {/* User Verification & Profile Management (Process 1.0) */}
                    <Route path="/profile" element={<Profile />} />
                    
                    {/* REQ-04: Real-time Messaging & Coordination (Process 3.0) */}
                    {/* Dynamically routes based on the unique Task ID for coordination */}
                    <Route path="/chat/:taskId" element={<Chat />} />
                    
                </Route>
            </Routes>
        </Router>
    );
}