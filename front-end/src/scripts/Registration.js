import '../css/Register.css'

const RegisterScreen = () =>
{
    return(
        <div className='registrationMaster'>
            <div className='inputHolder'>
                <h2 id='registerTitle'>User Registration</h2>
                <form>
                    <input type='text' placeholder='Username'/>
                    <input type='email' placeholder='Email'/>
                    <input type='password' placeholder="Password"/>
                    <input type='password' id='confpass' placeholder='Password Confirmation'/>
                    <button>Summon your account!</button>
                    <button>Cancel</button>
                </form>
            </div>
        </div>
    )
}

export default RegisterScreen