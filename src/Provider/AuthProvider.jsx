import { createContext, useEffect, useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { getEmailInfo } from "../utils/getStorage";
import { setEmail } from "../utils/setStorage";

export const AuthContext = createContext(null)


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();
    
    const logoutUser = () => {
        setEmail('');
        localStorage.setItem('access-token', '')
    }
      const logOut = async () => {
        setLoading(true)
        
        return logoutUser();
      }

    // onAuthStateChange
    useEffect(() => {
        const email = getEmailInfo();
        // console.log('from loc = ', email);
        setUser(email)
        if (email) {
            // console.log('my = ', email)

            axiosPublic.post('/jwt', {email}, {withCredentials:true})
                .then(res => {
                    // console.log(res.data)
                    if (res.data.token) {
                        localStorage.setItem('access-token', res.data.token);
                        setLoading(false)
                    }
                })
        }
       
    }, [user])

    const authInfo = {
        user,
        loading,
        setLoading,

        setUser,
        logOut

    }

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider