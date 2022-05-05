import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './Components/ReactRouterFun/Navbar';
import Home from './Components/ReactRouterFun/Home';
import About from'./Components/ReactRouterFun/About';
import Employees from './Components/ReactRouterFun/Employees';
import EmployeeDetails from './Components/ReactRouterFun/EmployeeDetails';
import Stocks  from './Components/ReactRouterFun/Stocks';
import StockDetails from './Components/ReactRouterFun/StockDetails'
import AuthCard from './Components/Auth/AuthCard';
import Shop from './Components/ShopComponents/Shop';

const App = () => {
  return (
  <React.Fragment> 

    <AuthCard/>
    <Shop/>

        {/* <Router>
        <Navbar/>
          <Switch>         
            <Route exact path='/'component= {Home}/>
            <Route exact path='/about'component= {About}/>
            <Route exact path='/employees'component= {Employees}/>
            <Route exact path='/employees/:id'component= {EmployeeDetails}/>
            <Route exact path='/stocks'component= {Stocks}/>
            <Route exact path='/stocks/:id'component= {StockDetails}/>
          </Switch>

        </Router> */}
  
 </React.Fragment>


  )}
export default App;