import React from 'react'
// import { Switch, Route, Link } from "react-router-dom";
// import PrimarySearchAppBar from './Header'
import './Register.css' 
import Logo from './logo.png'
import { Link } from "react-router-dom"

function Register() {
    return (
        <div className="container">
        <div className="card">
                <div className="circle">
                    <img src={Logo} alt="any component"/>
                </div>

                <div className="info">
                    <form>
                        <label className="entry">
                            Full Name : <br />
                            <input className="field" type="email" placeholder=" full name" />
                        </label>
                                <br /> <br/> <br /> <br />
                        <label className="entry">
                            Contact : <br />
                            <input className="field" type="integer" placeholder=" contact" />
                        </label>
                        <br /> <br/> <br /> <br />
                        <label className="entry">
                            Email ID : <br />
                            <input className="field" type="email" placeholder=" email" />
                        </label>
                                <br /> <br/> <br /> <br />
                        <label className="entry">
                            UserName : <br />
                            <input className="field" type="text" placeholder=" username" />
                        </label>
                        <br /> <br/> <br /> <br />
                        <label className="entry">
                            Password : <br />
                            <input className="field" type="password" placeholder=" password" />
                        </label>
                    </form>

                    <div class="login">
                    <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                        <button>Register</button>
                        </Link>
                    </div>
                </div>
        </div>
    </div>

    )
}

export default Register
