import { Navigate, Outlet } from "react-router-dom"
import useAuth from "../hooks/useAuth"

const RequireAuth = () =>
{
    const { auth } = useAuth()
    return(auth?.userID ? <Outlet /> : <Navigate to='/join' state={{notJoined: true, message: "You must have a display name before joining!"}} replace={true}/>)
}

export default RequireAuth
