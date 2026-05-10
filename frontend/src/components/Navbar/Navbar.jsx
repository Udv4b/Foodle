import React from 'react'
import { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({ setShowLogin }) => {

    const [menu, setMenu] = useState("home");

    const { getCartTotal, token, setToken } = useContext(StoreContext);

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate("/");
    }

    return (
        <div className='navbar'>
            <Link to="/"><img src={assets.logo} alt="" className="logo" /></Link>
            <ul className="navbar-menu">
                <Link to="/" className={menu === "home" ? "active" : ""} onClick={() => setMenu("home")}>Home</Link>
                <a href="#explore-menu" className={menu === "menu" ? "active" : ""} onClick={() => setMenu("menu")}>Menu</a>
                <a href="#about" className={menu === "about" ? "active" : ""} onClick={() => setMenu("about")}>About Us</a>
                <a href="#footer" className={menu === "contact" ? "active" : ""} onClick={() => setMenu("contact")}>Contact</a>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="" className="search-icon" />
                <div className="navbar-search-icon">
                    <Link to="/cart"><img src={assets.basket_icon} alt="" className="cart-icon" /></Link>
                    <div className={getCartTotal() === 0 ? "" : "dot"}></div>
                </div>
                {!token ? <button className="login-btn" onClick={() => setShowLogin(true)}><span>Login</span><span></span></button>
                    : <div className='navbar-profile'>
                        <img src={assets.profile_icon} alt="" />
                        <ul className="nav-profile-dropdown">
                            <li><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
                            <hr />
                            <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
                        </ul>
                    </div>}

            </div>
        </div>
    )
}

export default Navbar