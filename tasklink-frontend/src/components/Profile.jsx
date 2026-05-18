// src/components/Profile.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
    const navigate = useNavigate();

    function handleLogout() {
        // Clear local storage or session if needed
        localStorage.removeItem('userId');
        navigate('/');
    }

    return (
        <div className="px-6 py-8 pb-24"> {/* Added pb-24 to fix the cut-off issue */}
            {/* Profile Header */}
            <div className="flex flex-col items-center mb-8">
                <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-3xl font-bold text-gray-400 border-4 border-white shadow-sm">
                    CL
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mt-4">Charlene Lugtu</h2>
                <p className="text-sm text-gray-400">Member since 2021</p>
            </div>

            {/* Verification Card */}
            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5 mb-8">
                <h3 className="text-md font-bold text-emerald-600 mb-3">Verification Status</h3>
                <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center">
                        <span className="text-emerald-800">Identity Verified:</span>
                        <span className="font-bold text-emerald-600">Complete</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-emerald-800">Background Check:</span>
                        <span className="font-bold text-emerald-600">Complete</span>
                    </div>
                </div>
            </div>

            {/* Account Settings */}
            <div className="space-y-4 mb-10">
                <h3 className="text-lg font-bold text-gray-900">Account Settings</h3>
                <button className="w-full bg-white p-4 rounded-xl border border-gray-100 text-left text-gray-700 font-medium shadow-sm hover:bg-gray-50 transition">
                    Edit Personal Info
                </button>
                <button className="w-full bg-white p-4 rounded-xl border border-gray-100 text-left text-gray-700 font-medium shadow-sm hover:bg-gray-50 transition">
                    Security & Password
                </button>
            </div>

            {/* Logout Button - Now fully visible */}
            <button 
                onClick={handleLogout}
                className="w-full bg-red-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-red-100 hover:bg-red-600 active:scale-[0.98] transition"
            >
                Log Out
            </button>
        </div>
    );
}