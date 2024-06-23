import { useState } from "react";
import { Login } from "../Login/Login";
import { Register } from "../register/register";
export function CustomDemo3() {

    const [component, setComponent] = useState();
    function handleLoginClick() {
        setComponent(<Login />);
    }
    function handleRegisterClick() {
        setComponent(<Register />)
    }

    return (

        <div className="container-fluid">
            <h1>Home</h1>
            <button onClick={handleLoginClick}>Login</button>  <button onClick={handleRegisterClick}>Register</button>
            <div className="mt-3">
                {component}
            </div>
        </div>
    )
}