import '../css/Register.css'

const LoginScreen = (props) =>
{
    return(
        <div className="loginMaster">
            <div className='inputHolder'>
                <h2 id='webTitle'>Welcome!</h2>
                <form>
                    <input type='text' placeholder='Username goes here!'/>
                    <input type='password' placeholder="Password is hidden! Don't worry!"/>
                    <button>Log In</button>
                </form>
            </div>

            <div className='reminder'>
                <p className='reminderText'>Don't have an account? Create one <a id='url' href='/register'>here</a>!</p>
            </div>
        </div>
    )
}

export default LoginScreen