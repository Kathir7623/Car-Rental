import React from "react";
import './LoginForm.css';
import { FaRegUserCircle } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const LoginForm = () => {
    return (
        <div className="wrapper">
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <FaRegUserCircle className="icon" />
                    <input type="text" placeholder="Username" required />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required />
                    <FaLock />
                </div>
                <div className="remember-forget">
                    <label>
                        <input type="checkbox" /> Remember me
                    </label>
                    <a href=" ">Forgot password</a>
                </div>
                <button type="submit">Login</button>
                <div className="register-link">
                    Don't have an account? <a href=" ">Register</a>
                </div> 
            </form>
        </div>
    );
}

export default LoginForm;
