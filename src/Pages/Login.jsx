import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../Hooks/useAuth';
import SocialLogIn from './SocialLogin';

const Login = () => {
    const { signIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                if (result.user) {
                    navigate(from);
                    Swal.fire({
                        icon: 'success',
                        title: 'Login Successful!',
                        text: 'Welcome back!',
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Login Failed',
                        text: 'Invalid email or password!',
                    });
                }
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 p-6 sm:p-12 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Login</h2>
                
                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="input input-bordered w-full p-3 rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Password</span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            className="input input-bordered w-full p-3 rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <div className="text-right mt-2">
                            <Link to="#" className="text-blue-600 hover:underline text-sm">Forgot password?</Link>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition"
                    >
                        Login
                    </button>
                </form>

                <div className="mt-8 text-center">
                    <div className="mt-4 flex justify-center gap-4">
                        <SocialLogIn />
                    </div>
                </div>

                <p className="mt-6 text-center text-sm text-gray-600">
                    Don't have an account?{' '}
                    <Link to="/signup" className="text-blue-600 font-semibold hover:underline">
                        Signup
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
