import '../css/Login.css'

const LoginScreen = (props) =>
{
    return(
        <div className="loginMaster">
            <div className='inputHolder'>
                <h2 id='webTitle'>Welcome Back!</h2>
                <form>
                    <input type='text' id='uname' placeholder='Username goes here!'/>
                    <input type='password' id='pass' placeholder="Password is hidden! Don't worry!"/>
                    <button>Sign In</button>
                </form>
            </div>

            <div className='reminder'>
                <p className='reminderText'>Don't have an account? Create one <a id='url' href='/register'>here</a>!</p>
            </div>
        </div>
    )
}

export default LoginScreen