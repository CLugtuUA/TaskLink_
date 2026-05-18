// src/components/Wallet.jsx
import React, { useState } from 'react';

export default function Wallet() {
    // This state controls which tab is currently active
    const [activeTab, setActiveTab] = useState('history');

    return (
        <div className="page p-4 bg-white w-full h-full">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">My Wallet</h2>

            <div className="bg-task-primary text-white p-6 rounded-xl shadow-lg mb-6">
                <p className="text-sm opacity-80">Available Balance</p>
                <p className="text-4xl font-extrabold mt-1">₱1,234.50</p>
            </div>

            {/* Tab Navigation */}
            <div className="flex bg-gray-100 rounded-full p-1 mb-6 text-sm font-medium">
                <button onClick={() => setActiveTab('history')} className={`flex-1 p-2 rounded-full transition ${activeTab === 'history' ? 'bg-task-primary text-white' : 'text-gray-700 hover:text-task-primary'}`}>History</button>
                <button onClick={() => setActiveTab('withdrawal')} className={`flex-1 p-2 rounded-full transition ${activeTab === 'withdrawal' ? 'bg-task-primary text-white' : 'text-gray-700 hover:text-task-primary'}`}>Withdrawal</button>
                <button onClick={() => setActiveTab('methods')} className={`flex-1 p-2 rounded-full transition ${activeTab === 'methods' ? 'bg-task-primary text-white' : 'text-gray-700 hover:text-task-primary'}`}>Methods</button>
            </div>

            {/* Tab Content */}
            {activeTab === 'history' && (
                <div className="space-y-3 animate-fade-in">
                    <h3 className="font-semibold text-gray-800">Recent Transactions</h3>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="text-gray-700">Task: Couch Move (Payout)</span>
                        <span className="font-bold text-task-secondary">+₱760.00</span>
                    </div>
                </div>
            )}

            {activeTab === 'withdrawal' && (
                <div className="animate-fade-in">
                    <p className="text-sm text-gray-700 mb-2">How much would you like to withdraw?</p>
                    <input type="number" placeholder="Enter amount" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-task-primary outline-none transition mb-4" />
                    <button className="w-full bg-task-secondary text-white font-semibold p-3 rounded-xl hover:opacity-90">Initiate Withdrawal</button>
                </div>
            )}

            {activeTab === 'methods' && (
                <div className="space-y-3 animate-fade-in">
                    <h3 className="font-semibold text-gray-800">Linked Accounts</h3>
                    <div className="p-3 border border-gray-200 rounded-lg flex justify-between items-center">
                        <span className="text-gray-700">GCash (...1234)</span>
                        <span className="text-task-secondary text-sm font-medium">Default</span>
                    </div>
                    <button className="w-full border border-task-primary text-task-primary font-semibold p-3 rounded-xl hover:bg-task-primary/10 transition">+ Link New Method</button>
                </div>
            )}
        </div>
    );
}