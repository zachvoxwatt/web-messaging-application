import axios from '../api/axios'
import useAuth from './useAuth'

const useLeaveApp = () =>
{
    const { setAuth } = useAuth()

    const leaveApp = async () =>
    {
        setAuth({})

        try { await axios.get('/leaveapp', { withCredentials: true }) }
        catch (err) { console.log(err) }
    }

    return leaveApp
}

export default useLeaveApp