import '../css/Login.css'

const LoginScreen = (props) =>
{
    return(
        <div className="loginMaster">
            <div className='logInputHolder'>
                <h2 id='webTitle'>Welcome Back!</h2>
                <form id='loginForm'>
                    <input type='text' id='loginUname' placeholder='Username goes here!'/>
                    <input type='password' id='loginPass' placeholder="Password is hidden! Don't worry!"/>
                    <button id='actButt'>Sign In</button>
                </form>
            </div>

            <div className='reminder'>
                <p className='reminderText'>Don't have an account? Create one <a id='url' href='/register'>here</a>!</p>
            </div>
        </div>
    )
}

export default LoginScreen