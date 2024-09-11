import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
            <div className="max-w-lg text-center space-y-8">
                <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 animate-pulse">404</h1>
                <h2 className="text-3xl font-bold">Lost in Space?</h2>
                <p className="text-lg text-gray-400">The page you're looking for doesn't seem to exist. Maybe it’s out there somewhere in the galaxy.</p>
                
                <div className="flex justify-center space-x-4">
                    <Link to="/" className="bg-gradient-to-r from-blue-500 to-purple-600 py-3 px-6 rounded-lg font-bold text-lg hover:bg-blue-600 hover:shadow-lg transition-all duration-300 ease-in-out">
                        Go to Home
                    </Link>
                    <Link to="/contact" className="bg-gradient-to-r from-red-500 to-orange-600 py-3 px-6 rounded-lg font-bold text-lg hover:bg-red-600 hover:shadow-lg transition-all duration-300 ease-in-out">
                        Contact Us
                    </Link>
                </div>

                <div className="mt-12">
                    <p className="text-gray-400 text-sm">Need help? Don’t worry, we’re here for you.</p>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
