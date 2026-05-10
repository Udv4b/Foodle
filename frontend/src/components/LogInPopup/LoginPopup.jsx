import React, { useContext, useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'

const LogInPopup = ({ setShowLogin }) => {

    const {url, setToken} = useContext(StoreContext)

    const [currentState, setCurrentState] = useState("Log In")
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data, [name]:value}))
    }

    const onLogin = async (event) => {
        event.preventDefault();
        let newUrl = url;
        if (currentState === "Log In") {
            newUrl += "/api/user/login"
        } else {
            newUrl += "/api/user/register"
        }

        const response = await axios.post(newUrl, data);
        if (response.data.success) {
            setToken(response.data.token);
            localStorage.setItem("token", response.data.token);
            setShowLogin(false)
        } else {
            alert(response.data.message)
        }
    }

    return (
        <div className='login-popup'>
            <form onSubmit={onLogin} action="" className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currentState === "Log In" ? "Log In" : "Sign Up"}</h2>
                    <img onClick={() => { setShowLogin(false) }} src={assets.cross_icon} alt="" className="close-icon" />
                </div>
                <div className="login-popup-input">
                    {currentState === "Log In" ? <></> : <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Enter Your Name' required />}
                    <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Enter Your Email' required />
                    <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Enter Your Password' required />
                </div>
                <button type='submit'>{currentState === "Sign Up" ? "Create Account" : "Log In"}</button>
                <div className="login-popoup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the terms & conditions</p>
                </div>
                {currentState === "Log In" ?
                    <p>Don't have an account? <span onClick={() => setCurrentState("Sign Up")}>Click Here</span></p>
                    : <p>Already have an account? <span onClick={() => setCurrentState("Log In")}>Click Here</span></p>}
            </form>
        </div>
    )
}

export default LogInPopup