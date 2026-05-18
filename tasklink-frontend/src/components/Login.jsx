import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import tasklinkLogo from '../assets/tasklink.png'; 

export default function Login() {
    const navigate = useNavigate();
    
    // NEW: Add a loading state to prevent double-clicks
    const [isLoading, setIsLoading] = useState(false);

    function handleLogin(event) {
        event.preventDefault();
        
        // Immediately disable the button
        setIsLoading(true);
        
        // Navigate to home (the short timeout ensures the UI updates and prevents double clicks)
        setTimeout(() => {
            navigate('/home');
        }, 100);
    }

    return (
        // Full screen background centered
        <div className="min-h-screen w-full flex items-center justify-center bg-gray-200 p-4 font-sans">
            
            {/* Professional Wide Card Container */}
            <div className="bg-white w-full max-w-md rounded-[24px] shadow-2xl p-8 sm:p-10 flex flex-col items-center">
                
                {/* Logo Section */}
                <div className="flex flex-col items-center mb-8">
                    <img 
                        src={tasklinkLogo} 
                        alt="TaskLink Logo" 
                        className="w-32 h-32 object-contain mb-4 drop-shadow-md" 
                    />
                    <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">TaskLink</h1>
                    <p className="text-sm text-gray-500 mt-2">Log in to your account</p>
                </div>

                {/* Form */}
                <form onSubmit={handleLogin} className="w-full space-y-5">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
                        <input id="email" name="email" type="email" required 
                               className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-task-primary focus:border-task-primary outline-none transition" 
                               placeholder="you@example.com" />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input id="password" name="password" type="password" required 
                               className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-task-primary focus:border-task-primary outline-none transition" 
                               placeholder="••••••••" />
                    </div>

                    <div className="flex items-center justify-between w-full pt-1">
                        <div className="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-task-primary border-gray-300 rounded focus:ring-task-primary cursor-pointer" />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-800 cursor-pointer">
                                Remember me
                            </label>
                        </div>
                        <div className="text-sm">
                            <a href="#" className="font-semibold text-task-primary hover:text-task-primary/80 transition">
                                Forgot password?
                            </a>
                        </div>
                    </div>

                    <div className="pt-2">
                        {/* UPDATED: Added ID, disabled state, and dynamic text */}
                        <button 
                            id="login-button"
                            type="submit" 
                            disabled={isLoading}
                            className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-md text-lg font-bold text-white transition duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-task-primary ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-task-primary hover:opacity-90'}`}>
                            {isLoading ? 'Signing In...' : 'Sign In'}
                        </button>
                    </div>
                </form>
                
                {/* Divider */}
                <div className="mt-8 w-full">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-white text-gray-500 font-medium">
                                Or continue with
                            </span>
                        </div>
                    </div>
                </div>

                {/* Google Button */}
                <div className="mt-6 w-full">
                    <button type="button" className="w-full flex items-center justify-center py-3 px-4 border border-gray-300 rounded-xl shadow-sm text-sm font-bold text-gray-700 bg-white hover:bg-gray-50 transition duration-150">
                        <svg className="w-5 h-5 mr-3" viewBox="0 0 48 48">
                            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.343c-1.806,2.783-4.99,5-8.343,5c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12 c3.437,0,6.564,1.45,8.835,3.783L39.208,7.915C35.244,4.195,30.077,2,24,2C11.85,2,2,11.85,2,24s9.85,22,22,22 s22-9.85,22-22c0-1.341-0.138-2.658-0.413-3.957"/>
                            <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.437,0,6.564,1.45,8.835,3.783l5.208-5.868 C35.244,4.195,30.077,2,24,2C15.429,2,8.129,7.185,4.606,14.691z"/>
                            <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                            <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.343c-0.792,1.259-1.908,2.33-3.21,3.135l6.19,5.238 C41.663,33.056,44,28.67,44,24C44,22.659,43.862,21.342,43.611,20.083z"/>
                        </svg>
                        Sign in with Google
                    </button>
                </div>

                {/* Sign Up Link */}
                <div className="mt-8 text-center text-sm">
                    <p className="text-gray-600">
                        Don't have an account?{' '}
                        <a href="#" className="font-bold text-task-secondary hover:opacity-80 transition">
                            Sign Up
                        </a>
                    </p>
                </div>

            </div>
        </div>
    );
}