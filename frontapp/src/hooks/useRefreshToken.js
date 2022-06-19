import axios from '../api/axios'
import useAuth from './useAuth'

const useRefreshToken = () =>
{
    const { setAuth } = useAuth()

    const refreshToken = async () =>
    {
        let response = await axios.get('/refreshapp', { withCredentials: true })
        setAuth(prevData => {
            console.log(JSON.stringify(prevData))
            console.log(response.data.accessToken)
            return { ...prevData, accessToken: response.data.accessToken }
        })

        return response.data.accessToken
    }

    return refreshToken
}

export default useRefreshToken
