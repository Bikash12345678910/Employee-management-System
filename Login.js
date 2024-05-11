import React from "react";
import { NavLink } from "react-router-dom";


const Login = () => {
    return (
        <>
        <div className="pow">
            <h1 style={{textAlign:"center"}}>Sign Up Account</h1>
            <div className="container1">
                <div className="Row3">
                    <label for="exampleInputform">Full Name<span>*</span></label><br></br>
                    <input type="text" placeholder />
                </div>
                <br></br>
                <div className="Row3">
                    <label for="exampleInputform">Email address<span>*</span></label><br></br>
                    <input type="text" placeholder />
                </div>
                <br></br>
                <div className="Row3">
                    <label for="exampleInputform">Password<span>*</span></label><br></br>
                    <input type="password" placeholder />
                </div>
                <br></br>
                <div className="Row3">
                    <label for="exampleInputform">phone number<span>*</span></label><br></br>
                    <input type="number" placeholder />
                </div>
                <br></br>
                <div className="Row3">
                    <label for="exampleInputform">Number of Employees<span>*</span></label><br></br>
                    <select>
                        <option>....Select the number of Emoloyees</option>
                        <option>10+</option>
                        <option>20-30+</option>
                        <option>30-50+</option>
                        <option>50-70+</option>
                        <option>70-80+</option>
                    </select>
                </div>
                <br></br>
                <div className="Row3">
                    <label for="exampleInputform">Your title<span>*</span></label><br></br>
                    <select>
                        <option>....Select the Your title</option>
                        <option>Founder/CEO</option>
                        <option>Finance/HR Manager</option>
                        <option>Employee</option>
                    </select>
                </div>
                <div className="btn">
                    <nav>
                        <ul>
                            <li><NavLink to={'/Login'}
                                className={"nav"}>
                                <button className="dan">Login</button>
                            </NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
        
       
    </>
    );
    }
export default Login