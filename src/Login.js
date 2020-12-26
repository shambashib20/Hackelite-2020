import React from 'react'
// import { Switch, Route, Link } from "react-router-dom";
// import PrimarySearchAppBar from './Header'
import './Login.css' 
import Logo from './logo.png'
import { Link } from "react-router-dom"

function Login() {
    return (
        <div className="container">
        <div className="card">
                <div className="circle">
                    <img src={Logo} alt="any component"/>
                </div>

                <div className="info">
                    <form>
                        <label className="entry">
                            Email ID : <br />
                            <input className="field" type="email" placeholder=" email id" />
                        </label>
                                <br /> <br/> <br /> <br />
                        <label className="entry">Password : <br />
                            <input className="field" type="password" placeholder=" password" />
                        </label>
                    </form>

                    <div class="login">
                    <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                        <button>Login</button>
                        </Link>
                    </div>
                </div>
        </div>
    </div>

    )
}

export default Login
