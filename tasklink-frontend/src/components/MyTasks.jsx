// src/components/MyTasks.jsx
import React from 'react';

export default function MyTasks() {
    return (
        <div className="page p-4 bg-task-background w-full h-full">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">My Task Dashboard</h2>

            <section className="mb-8">
                <h3 className="font-bold text-lg text-task-primary mb-3">Tasks I Requested</h3>
                <div className="space-y-3">
                    <div className="bg-white p-4 rounded-xl shadow border border-gray-100">
                        <p className="font-semibold text-gray-800">Move my old couch (Completed)</p>
                        <p className="text-sm text-gray-500 mt-1">Tasker: Alex P.</p>
                        <div className="mt-3 flex items-center justify-between">
                            <span className="text-sm text-task-secondary font-medium">Payment Released. Rated ★★★★★</span>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <h3 className="font-bold text-lg text-task-secondary mb-3">Tasks I'm Doing</h3>
                <div className="space-y-3">
                    <div className="bg-white p-4 rounded-xl shadow border border-gray-100">
                        <p className="font-semibold text-gray-800">Repair leaky faucet</p>
                        <p className="text-sm text-gray-500 mt-1">Requestor: Mike K. - Bid: ₱500</p>
                        <div className="mt-3 flex items-center justify-between">
                            <span className="text-sm text-yellow-600 font-medium">In Progress</span>
                            <button className="bg-task-secondary text-white text-sm font-semibold px-3 py-1 rounded-full hover:opacity-90 transition">Mark as Complete</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}