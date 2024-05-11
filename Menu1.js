import React from "react";

import{ NavLink}
from "react-router-dom";

const Menu1 =() =>{
    return(
        <>
        
        <div className="Menu">
            <nav>
                <ul>
                <li><NavLink to={'/Dashboard'}
                    className={"nav"}>
                        <div className="p1">
                         <div className="s1">
                        
                        <img src="https://w7.pngwing.com/pngs/31/291/png-transparent-monitor-with-chart-dashboard-computer-icons-business-intelligence-annual-reports-miscellaneous-infographic-text.png" alt="img3"height="50px"width="50px"/>
                        </div><br></br>
                        <div className="s2">
                        Dashboard
                        </div>
                        </div>
                        </NavLink></li>
                    
                    <li><NavLink to={'/Home'}
                    className={"nav"}>
                        <div className="p1">
                            <div className="s1">
                        <img src="https://png.pngtree.com/element_our/sm/20180516/sm_5afc76eed0142.jpg" alt="img3"height="50px"width="50px"/>
                        </div>
                        <div className="s2">
                        Home
                        </div>
                        </div>
                        </NavLink></li>
                        
                        <li><NavLink to={'/Register'}
                    className={"nav"}>
                        <div className="p1">
                            <div className="s1">
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/000/643/326/small/vector60-7909-01.jpg" alt="img3"height="50px"width="50px"/>
                        </div>
                        <div className="s2">
                        Apply
                        </div> 
                        </div>
                        </NavLink></li>
                
                    <li><NavLink to={'/Employees'}
                    className={"nav"}>
                        <div className="p1">
                            <div>
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/000/643/326/small/vector60-7909-01.jpg" alt="img3"height="50px"width="50px"/>
                        </div>
                        <div className="s2">
                        Employees
                        </div>
                        </div>
                        </NavLink></li>
                    <li><NavLink to={'/Attendance'}
                    className={"nav"}>
                        <div className="p1">
                            <div className="s1">
                        <img src="https://www.shutterstock.com/image-vector/book-icon-vector-design-template-600w-1447843232.jpg" alt="img3"height="50px"width="50px"/>
                        </div>
                        <div className="s2">
                        Attendance
                        </div>
                        </div>
                        </NavLink></li>
                        <li><NavLink to={'/Transport'}
                    className={"nav"}>
                        <div className="p1">
                            <div className="s1">
                        <img src="https://cdn3.vectorstock.com/i/1000x1000/96/82/logout-icon-vector-21679682.jpg" alt="img3"height="50px"width="50px"/>
                        </div>
                        <div className="s2">
                        Log Out
                        </div>
                        </div>
                        </NavLink></li>
                    
                </ul>
            </nav>
        </div>
        
        
        </>
    );
}

export default Menu1