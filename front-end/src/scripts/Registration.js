const RegisterScreen = () =>
{
    return(
        <div className='registrationMaster'>
            <h2 id='registerTitle'>User Registration</h2>
            <div className='inputHolder'>
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

export default RegisterScreen