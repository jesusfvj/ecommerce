import { useAuthContext } from '../../context/AuthContext';
import { Navigate } from 'react-router-dom';

export default function PublicRoute(){

    const {isAuthenticated} = useAuthContext();

    if(!isAuthenticated) {
        return <Navigate to = {"/log-in"} />
    } else {
        return <Navigate to = {"/cart"} />
    }
}
