import React, { useState } from "react";
import '../css/signin.css'

const SigninWidget = () =>
{
    const [error, errorEnabled] = useState(true)

    return(
        <div className="signinMain">
            <h2 id='signinTitle'>Join the chat for FREE candies 🍬🍭🍫</h2>

            <div className="signinForm">
                <input id='signinField' type='text' placeholder='Enter a name to join!'></input>
                <button id='signinButton'>Confirm and Go</button>

                {error && <h4>You are not permitted!</h4>}
            </div>
        </div>
    )
}

export default SigninWidget