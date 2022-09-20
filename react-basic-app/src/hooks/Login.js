import React from "react";
import './Login.css';

export default function Login(){
    
    const login = () => {

    }

    const handleChange = (e) => {
        
    }

    const element = () => {
        return <div>
            <body className="login">
            <a href="/">MiniShopping</a>
            <div className="login-container">
            <a>logo here</a>
            <form onSubmit={login()}>
                <h3>Login</h3>
                <ul className="login-form-ul">
                    <li>
                        <p>username</p>
                        <input type="text" name = "username" onChange={handleChange()} />
                    </li>
                    <li>
                        <p>password</p>
                        <input type="password" name="password" onChange={handleChange()} />
                    </li>
                    <li id="submit">
                        <p></p>
                        <button>submit</button>
                    </li>
                    <li>
                        <p>Don't have an account? <a id="linkCreateAccount" href="/signUp">click here</a></p>
                        <a href="">
                        <img src='../images/googleIcon.png' alt=" " width={"100px"}/>
                        </a>
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