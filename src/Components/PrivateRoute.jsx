import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({children}) => {
    
    const {user, loading} = useAuth();

    const location = useLocation();
    //console.log(user)

    // if(loading){
    //     console.log('object')
    //     return <div className="flex items-center justify-center"><div className="h-[400px] w-1/2 flex items-center justify-center"><span className="loading loading-bars loading-lg"></span></div></div>
    // }

   // console.log(user)

    if(!user){
        return <Navigate to='/login' state={location?.pathname || '/'}></Navigate>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;