import React from 'react'; import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Menu1 from './Employees management System/Menu1';
import Dashboard from './Employees management System/Dashboard'; import Register from './Employees management System/Register'; import Employees from './Employees management System/Employees'; import Home from './Employees management System/Home';
import Attendance from './Employees management System/Attendance'; import Login from './Employees management System/Login';
import Transport from './Employees management System/Transport'; import Wellcome from './Employees management System/Wellcome';

function App(){ return(

<div className='App'>
<BrowserRouter>

<Routes>
<Route exact path='/' element={<Login/>}></Route>
<Route exact path='/Login' element={<Wellcome/>}></Route>
<Route exact path='/Wellcome' element={<Menu1/>}></Route>
<Route exact path='/Dashboard' element={<Dashboard/>}></Route>
<Route exact path='/Home' element={<Home/>}></Route>
<Route exact path='/Register' element={<Register/>}></Route>
<Route exact path='/Employees' element={<Employees/>}></Route>
<Route exact path='/Attendance' element={<Attendance/>}></Route>
<Route exact path='/Login' element={<Transport/>}></Route>
<Route exact path='/Transport' element={<Login/>}></Route>
</Routes>
</BrowserRouter>
 
</div>
);
}
export default App
