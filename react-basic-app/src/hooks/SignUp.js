import React from "react";
export default function SignUp(){
    
    const  signUp= () => {

    }

    const handleChange = (e) => {
        
    }
    
    const element = () => {
        return <div>
        <body className="signUp">
            <a href="/">MiniShopping</a>
            <div className="signUp-container">
            <form onSubmit={signUp()}>
                <h3>Register Account</h3>
                <ul className="signUp-form-ul">
                    <li>
                        <p>username</p>
                        <input type="tel" name = "phone" onChange={handleChange()} />
                    </li>
                    <li>
                        <p>name</p>
                        <input type="text" name="name" onChange={handleChange()} />
                    </li>
                    <li>
                        <p>address</p>
                        <input type="text" name="address" onChange={handleChange()} />
                    </li>
                    <li>
                        <p>password</p>
                        <input type="password" name="password" onChange={handleChange()} />
                    </li>
                    <li>
                        <p>confirm password</p>
                        <input type="password" name="repassword" onChange={handleChange()} />
                    </li>
                    <li id="submit">
                        <p></p>
                        <button>submit</button>
                    </li>
                </ul>
                <ul>
                    <li>
                        <h6>By creating an account you agree to our <a href="/login">Terms & Privacy</a>.</h6>
                    </li>
                </ul>
            </form>
            </div>
            <a className="source" target= "_blank" href="https://www.istockphoto.com/photo/abstract-blurred-gradient-bright-mesh-banner-background-texture-blue-violet-purple-gm1330343437-413785636?utm_medium=organic&utm_source=google&utm_campaign=iptcurl"
                ><h6>click here to see the source of background</h6></a>
            </body>
        </div>

    }

    return (
        <>
        {element()}
        </>
    )
}