import '../css/Register.css'

const RegisterScreen = () =>
{
    return(
        <div className='registrationMaster'>
            <div className='regInputHolder'>
                <h2 id='registerTitle'>User Registration</h2>
                <form id='regForm'>
                    <input className='regFields' type='text' placeholder='Username' id='regUname'/>
                    <input className='regFields' type='email' placeholder='Email'/>
                    <input className='regFields' type='password' placeholder="Password"/>
                    <input className='regFields' type='password' id='regConfPass' placeholder='Password Confirmation'/>
                    <div className='buttonsHolder'>
                        <button id='createButt'>Summon your account!</button>
                        <button id='cancelButt'>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterScreen