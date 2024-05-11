import React from "react";
import { NavLink }
 from "react-router-dom";

const Transport =()=>{
    return(
        <>
            <div className="btn">
                    <nav>
                        <ul>
                            <li><NavLink to={'/Transport'}
                                className={"nav"}>
                            </NavLink></li>
                        </ul>
                    </nav>
                </div>
        </>
    )
}
export default Transport