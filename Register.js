import React from "react";


const Register=() =>{
    return(
        <>
        
            <div className="c1">Basic Information of Employee</div>
            <div className="container">
                <div className="p1">
                    <div className="row">
                        <div className="col-12 col-mid-4">
                            <div className="form-group">
                                <label for="exampleInputform">Name<span>*</span></label><br></br>
                                <input type="text"placeholder/>
                            </div>
                        </div>
                        <div className="col-12 col-mid-4">
                            <div className="form-group">
                                <label for="exampleInputform">Middle Name</label><br></br>
                                <input type="text"placeholder/>
                            </div>
                        </div>
                        <div className="col-12 col-mid-4">
                            <div className="form-group">
                                <label for="exampleInputform">Last Name<span>*</span></label><br></br>
                                <input type="text"placeholder/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p2">
                    <div className="row">
                        <div className="col-12 col-mid-4">
                            <div className="form-group">
                                <label for="exampleInputform">Father's FName<span>*</span></label><br></br>
                                <input type="text"placeholder/>
                            </div>
                        </div>
                        <div className="col-12 col-mid-4">
                            <div className="form-group">
                                <label for="exampleInputform"> Father's MName</label><br></br>
                                <input type="text"placeholder/>
                            </div>
                        </div>
                        <div className="col-12 col-mid-4">
                            <div className="form-group">
                                <label for="exampleInputform"> Father's LName<span>*</span></label><br></br>
                                <input type="text"placeholder/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p3">
                    <div className="row">
                        <div className="col-12 col-mid-4">
                            <div className="form-group">
                                <label for="exampleInputform">Mother's FName<span>*</span></label><br></br>
                                <input type="text"placeholder/>
                            </div>
                        </div>
                        <div className="col-12 col-mid-4">
                            <div className="form-group">
                                <label for="exampleInputform"> Mother's MName</label><br></br>
                                <input type="text"placeholder/>
                            </div>
                        </div>
                        <div className="col-12 col-mid-4">
                            <div className="form-group">
                                <label for="exampleInputform"> Mother's LName<span>*</span></label><br></br>
                                <input type="text"placeholder/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p4">
                    <div className="row">
                        <div className="col-12 col-mid-4">
                            <div className="form-group">
                                <label for="exampleInputform">Sex<span>*</span></label><br></br>
                                Male<input type="radio"name="male"id="male"value="male" />
                                Female<input type="radio"name="male"id="Female"Value="Female"/>
                                other<input type="radio"name="male"id="Other"value="Other"/>
                            </div>
                        </div>
                        <div className="col-12 col-mid-4">
                            <div className="form-group">
                                <label for="exampleInputform">How are you single?<span>*</span></label><br></br>
                                <input type="text"placeholder/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p5">
                    <div className="row">
                        <div className="col-12 col-mid-4">
                            <div className="form-group">
                                <label for="exampleInputform">VILLAGE<span>*</span></label><br></br>
                                    <input type="text" name="male"id="male"placeholder=""required/>
                                
                            </div>
                        </div>
                        <div className="col-12 col-mid-4">
                            <div className="form-group">
                                <label for="exampleInputform">POST<span>*</span></label><br></br>
                                <input type="text"placeholder/>
                            </div>
                        </div>
                        <div className="col-12 col-mid-4">
                            <div className="form-group">
                                <label for="exampleInputform">POLISE STATION<span>*</span></label><br></br>
                                <input type="text"placeholder/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p6">
                    <div className="row">
                        <div className="col-12 col-mid-4">
                            <div className="form-group">
                                <label for="exampleInputform">DISTRICT<span>*</span></label><br></br>
                                    <input type="text" name="male"id="male"placeholder=""required/>
                                
                            </div>
                        </div>
                        <div className="col-12 col-mid-4">
                            <div className="form-group">
                                <label for="exampleInputform">PIN<span>*</span></label><br></br>
                                <input type="text"placeholder/>
                            </div>
                        </div>
                        <div className="col-12 col-mid-4">
                            <div className="form-group">
                                <label for="exampleInputform">STATE<span>*</span></label><br></br>
                                <input type="text"placeholder/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p7">
                    <div className="row">
                        <div className="col-12 col-mid-4">
                            <div className="form-group">
                                <label for="exampleInputform">COUNTRY<span>*</span></label><br></br>
                                    <input type="text" name="male"id="male"placeholder=""required/>
                                
                            </div>
                        </div>
                        <div className="col-12 col-mid-4">
                            <div className="form-group">
                                <label for="exampleInputform">CITY<span>*</span></label><br></br>
                                <input type="text"placeholder/>
                            </div>
                        </div>
                        <div className="col-12 col-mid-4">
                            <div className="form-group">
                                <label for="exampleInputform">SUB DISTRICT<span>*</span></label><br></br>
                                <input type="text"placeholder/>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className="p8">
                    <div className="row">
                        <div className="col-12 col-mid-4">
                            <div className="form-group">
                                <label for="exampleInputform">Employee Phone no<span>*</span></label><br></br>
                                    <input type="number" name="male"id="male"placeholder=""required/>
                                
                            </div>
                        </div>
                        <div className="col-12 col-mid-4">
                            <div className="form-group">
                                <label for="exampleInputform">Father's Phone no<span>*</span></label><br></br>
                                <input type="number"placeholder/>
                            </div>
                        </div>
                        <div className="col-12 col-mid-4">
                            <div className="form-group">
                                <label for="exampleInputform">Email id<span>*</span></label><br></br>
                                <input type="email"placeholder/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <div className="c1">Education qualification</div>
            <div className="table-box">
                <div className="table-row">
                    <div className="table-cell">
                        <p></p>
                    </div>
                    <div className="table-cell">
                        <p>CLASS 10</p>
                    </div>
                    <div className="table-cell">
                        <p>CLASS 12</p>
                    </div>
                    <div className="table-cell">
                        <p>GRADUACTION</p>
                    </div>
                </div>
                <div className="table-row1">
                    <div className="table-cell">
                        <label for="exampleInput">Institue Name<span>*</span></label>
                    </div>
                    <div className="table-cell">
                        <input type="text"/>
                    </div>
                    <div className="table-cell">
                        <input type="text"/>
                    </div>
                    <div className="table-cell">
                        <input type="text"/>
                    </div>
                </div>
                <hr></hr>
                <div className="table-row1">
                    <div className="table-cell">
                        <label for="exampleInput">Result<span>*</span></label>
                    </div>
                    <div className="table-cell">
                        <input type="text"/>
                    </div>
                    <div className="table-cell">
                        <input type="text"/>
                    </div>
                    <div className="table-cell">
                        <input type="text"/>
                    </div>
                </div>
                <hr></hr>
                
                <div className="table-row1">
                    <div className="table-cell">
                        <label for="exampleInput">Board Name<span>*</span></label>
                    </div>
                    <div className="table-cell">
                        <input type="text"/>
                    </div>
                    <div className="table-cell">
                        <input type="text"/>
                    </div>
                    <div className="table-cell">
                        <input type="text"/>
                    </div>
                </div>
                <hr></hr>
                <div className="table-row1">
                    <div className="table-cell">
                        <label for="exampleInput">Admision Date<span>*</span></label>
                    </div>
                    <div className="table-cell">
                        <input type="date"/>
                    </div>
                    <div className="table-cell">
                        <input type="date"/>
                    </div>
                    <div className="table-cell">
                        <input type="date"/>
                    </div>
                </div>
                <hr></hr>
                <div className="table-row1">
                    <div className="table-cell">
                        <label for="exampleInput">Passing year<span>*</span></label>
                    </div>
                    <div className="table-cell">
                        <input type="date"/>
                    </div>
                    <div className="table-cell">
                        <input type="date"/>
                    </div>
                    <div className="table-cell">
                        <input type="date"/>
                    </div>
                </div>
            </div>
            <div className="c1">Upload Ducument</div>
            <div className="container">
                <div className="p1">
                    <div className="row">
                        <div className="col-12 col-mid-4">
                            <div className="form-group">
                                <label for="exampleInputform">Madhamik result<span>*</span></label><br></br>
                                <input type="file"placeholder/>
                            </div>
                        </div>
                        <div className="col-12 col-mid-4">
                            <div className="form-group">
                                <label for="exampleInputform">Hs result<span>*</span></label><br></br>
                                <input type="file"placeholder/>
                            </div>
                        </div>
                        <div className="col-12 col-mid-4">
                            <div className="form-group">
                                <label for="exampleInputform">GRADUACTION result<span>*</span></label><br></br>
                                <input type="file"placeholder/>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className="p1">
                    <div className="row">
                        <div className="col-12 col-mid-4">
                            <div className="form-group">
                                <label for="exampleInputform">cv<span>*</span></label><br></br>
                                <input type="file"placeholder/>
                            </div>
                        </div>
                        <div className="col-12 col-mid-4">
                            <div className="form-group">
                                <label for="exampleInputform">Birth certificate<span>*</span></label><br></br>
                                <input type="file"placeholder/>
                            </div>
                        </div>
                        <div className="col-12 col-mid-4">
                            <div className="form-group">
                                <label for="exampleInputform">Addahar certificate<span>*</span></label><br></br>
                                <input type="file"placeholder/>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className="p1">
                    <div className="row">
                        <div className="col-12 col-mid-4">
                            <div className="form-group">
                                <label for="exampleInputform">BDO certificate<span>*</span></label><br></br>
                                <input type="file"placeholder/>
                            </div>
                        </div>
                        <div className="col-12 col-mid-4">
                            <div className="form-group">
                                <label for="exampleInputform">Polise verification certificate<span>*</span></label><br></br>
                                <input type="file"placeholder/>
                            </div>
                        </div>
                        <div className="col-12 col-mid-4">
                            <div className="form-group">
                                <label for="exampleInputform">DM certificate<span>*</span></label><br></br>
                                <input type="file"placeholder/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="c2">Pervious Employment Information</div>
            <div className="container">
                <div className="p1">
                    <div className="row">
                        <div className="col-12 col-mid-4">
                            <div className="form-group">
                                <label for="exampleInputform">Period</label><br></br>
                                <input type="text"placeholder/>
                            </div>
                        </div>
                        <div className="col-12 col-mid-4">
                            <div className="form-group">
                                <label for="exampleInputform">JOB title</label><br></br>
                                <input type="text"placeholder/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p1">
                    <div className="row">
                        <div className="col-12 col-mid-4">
                            <div className="form-group">
                                <label for="exampleInputform">Company Name</label><br></br>
                                <input type="text"placeholder/>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <hr></hr>
                <div className="p1">
                    <div className="row">
                        <div className="col-12 col-mid-4">
                            <div className="form-group">
                                <label for="exampleInputform">Period</label><br></br>
                                <input type="text"placeholder/>
                            </div>
                        </div>
                        <div className="col-12 col-mid-4">
                            <div className="form-group">
                                <label for="exampleInputform">JOB title</label><br></br>
                                <input type="text"placeholder/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p1">
                    <div className="row">
                        <div className="col-12 col-mid-4">
                            <div className="form-group">
                                <label for="exampleInputform">Company Name</label><br></br>
                                <input type="text"placeholder/>
                            </div>
                        </div>
                        
                    </div>
                </div>
        
                <hr></hr>
                <div className="p1">
                    <div className="row">
                        <div className="col-12 col-mid-4">
                            <div className="form-group">
                                <label for="exampleInputform">Period</label><br></br>
                                <input type="text"placeholder/>
                            </div>
                        </div>
                        <div className="col-12 col-mid-4">
                            <div className="form-group">
                                <label for="exampleInputform">JOB title</label><br></br>
                                <input type="text"placeholder/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p1">
                    <div className="row">
                        <div className="col-12 col-mid-4">
                            <div className="form-group">
                                <label for="exampleInputform">Company Name</label><br></br>
                                <input type="text"placeholder/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="su">
            <input type="Submit"/>
            <input type="reset" />
            </div>
        </>
    )
}
export default Register