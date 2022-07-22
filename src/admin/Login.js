import React from "react";

const Login = () =>{

    const emailV = localStorage.getItem('email');
    const passV = localStorage.getItem('password');
    
    if(emailV === '' && passV === '' || emailV === undefined && passV === undefined || emailV === null && passV === null){
        
        window.location.assign("/admin");
        
    }

    const logoutEvent = () =>{

        localStorage.removeItem('email');
        localStorage.removeItem('password');
        window.location.assign("/admin");
    }

    return (
        <>
            <h1>welcom to the My Account</h1>
            <button onClick={logoutEvent}>Logout</button>
        </>
    )
}
export default Login;