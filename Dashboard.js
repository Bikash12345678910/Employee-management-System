import React from "react"
import Menu1 from "./Menu1";


function Dashboard(){
    return(
        <>
        <Menu1/>
        <h1 style={{textAlign:"center"}}>Dashboard</h1>
        <div className="main">
            <div className="sub">
                <label>SALES EMPLOYEE</label>
                <h4>7678</h4>
            </div>
            <div className="sub">
                <label>DESIGNER</label>
                <h4>34567</h4>
            </div>
            <div className="sub">
                <label>SOFTWARE DESIGNER</label>
                <h4>2678</h4>
            </div>
            <div className="sub">
                <label>TESTER</label>
                <h4>7896</h4>
            </div>
            <div className="sub">
                <label>TOTAL EMPLOYEE</label>
                <h4>52819</h4>
            </div>
            <div className="sub">
                <label>TOTAL MANAGER</label>
                <h4>78</h4>
            </div>
        </div>
            <h4>SPECIAL EMPLOYEE</h4>
            <div className="table-box2">
                <div className="table-row2 table-head">
                    <div className="table-cell2">
                    <p>Sl no</p>
                    </div>
                    <div className="table-cell2">
                    <p>Name</p>
                    </div>
                    <div className="table-cell2">
                    <p>id no</p>
                    </div>
                    <div className="table-cell2">
                    <p>Department</p>
                    </div>
                    <div className="table-cell2">
                    <p>connected to Company</p>
                    </div>
                </div>
                <div className="table-row2">
                    <div className="table-cell2">
                    <p>1</p>
                    </div>
                    <div className="table-cell2">
                    <p>Ram Mondal</p>
                    </div>
                    <div className="table-cell2">
                    <p>3681</p>
                    </div>
                    <div className="table-cell2">
                    <p>Sales</p>
                    </div>
                    <div className="table-cell2">
                    <p>20</p>
                    </div>
                </div>
                <div className="table-row2">
                    <div className="table-cell2">
                    <p>2</p>
                    </div>
                    <div className="table-cell2">
                    <p>Omkar sarkar</p>
                    </div>
                    <div className="table-cell2">
                    <p>3681</p>
                    </div>
                    <div className="table-cell2">
                    <p>Manager</p>
                    </div>
                    <div className="table-cell2">
                    <p>18</p>
                    </div>
                </div>
                <div className="table-row2">
                    <div className="table-cell2">
                    <p>3</p>
                    </div>
                    <div className="table-cell2">
                    <p>Krishna mondal sarkar</p>
                    </div>
                    <div className="table-cell2">
                    <p>2156</p>
                    </div>
                    <div className="table-cell2">
                    <p> Service Manager</p>
                    </div>
                    <div className="table-cell2">
                    <p>25</p>
                    </div>
                </div>
            </div>
            <div className="main2">
                <div className="sub2">
                    <label>Helpline no:</label>
                    <h5>8710059145</h5>
                </div>
                <div className="sub2">
                    <label>Tolfree  no:</label>
                    <h5>9834091267</h5>
                </div>
                <div className="sub2">
                    <label>CEO no</label>
                    <h5>9834091289</h5>
                </div>
                <div className="sub2">
                    <label>Email id:</label>
                    <h5>company12@gmail.com</h5>
                </div>
            </div>
        </>
    )
}

export default Dashboard;