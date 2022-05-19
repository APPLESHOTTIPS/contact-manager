import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import Navbar from './Components/ReactRouterFun/Navbar';
// import Home from './Components/ReactRouterFun/Home';
// import About from'./Components/ReactRouterFun/About';
// import Employees from './Components/ReactRouterFun/Employees';
// import EmployeeDetails from './Components/ReactRouterFun/EmployeeDetails';
// import Stocks  from './Components/ReactRouterFun/Stocks';
// import StockDetails from './Components/ReactRouterFun/StockDetails'
// import AuthCard from './Components/Auth/AuthCard';
// import Shop from './Components/ShopComponents/Shop';
// import Usereff from './Components/usereff/Usereff';
// import UseReducer from './Components/useReducer/UseReducer';
import UserList from './Components/UserList';
import ListProducts from './Components/JSON_FAKE_SERVER/ListProducts';
import AddProducts from './Components/JSON_FAKE_SERVER/AddProducts';
import Navbar from './Components/JSON_FAKE_SERVER/Navbar';
// import { Navbar } from 'react-bootstrap';
import FormCreation from './Components/JSON_FAKE_SERVER/FormCreation';

const App = () => {
  return (
  <> 
{/* <UserList/> */}
  
  {/* <div className='m-3 p-3' col-md-6>
     <ListProducts/>
     <AddProducts/>
     </div>
      */}

   
   {/* <Usereff/>
   <UseReducer/> */}
    {/* <AuthCard/>
    <Shop/> */}

        {/* <Router>
        <Navbar/>
          <Switch>         
            <Route exact path='/'component= {App}/>
            <Route exact path='/about'component= {About}/>
            <Route exact path='/employees'component= {Employees}/>
            <Route exact path='/employees/:id'component= {EmployeeDetails}/>
            <Route exact path='/stocks'component= {Stocks}/>
            <Route exact path='/stocks/:id'component= {StockDetails}/>
          </Switch>

        </Router> */}

     <Router>
        <Navbar/>
              <Switch>
                    <Route exact path ='/' component = {ListProducts}/>
                    <Route exact path ='/list-products' component = {ListProducts}/>
                    <Route exact path ='/add-products' component = {AddProducts}/>
              </Switch>
        </Router> 
  
 </>


  )}
export default App;