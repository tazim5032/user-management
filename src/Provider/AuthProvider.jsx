import { createContext, useEffect, useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { getEmailInfo } from "../utils/getStorage";
import { setEmail } from "../utils/setStorage";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();

    const logoutUser = () => {
        setEmail('');  // Clear email from storage
        setUser(null); // Clear user state
        localStorage.removeItem('access-token'); // Clear token from local storage
        setLoading(false); // Set loading to false after logging out
    };

    const logOut = async () => {
        setLoading(true);
        return logoutUser();
    };

    useEffect(() => {
        const email = getEmailInfo(); // Retrieve email from storage

        if (email) {
            setUser(email); // Set user if email is found
            // Request JWT token
            axiosPublic.post('/jwt', { email }, { withCredentials: true })
                .then(res => {
                    if (res.data.token) {
                        localStorage.setItem('access-token', res.data.token); // Store JWT token
                    }
                    setLoading(false); // Set loading to false after token retrieval
                })
                .catch(() => setLoading(false)); // Handle error and stop loading
        } else {
            setLoading(false); // Stop loading if no user found
        }
    }, []); // Empty dependency array to run once

    const authInfo = {
        user,
        loading,
        setLoading,
        setUser,
        logOut
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
