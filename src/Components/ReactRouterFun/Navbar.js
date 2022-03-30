import React from 'react';
import {Link} from 'react-router-dom';

 let Navbar = ()=> {
  return (
    <>
    <nav className='navbar navbar-dark bg-secondary navbar-expand-sm'>
        <div className="container">
            <Link to ="/"className='navbar-brand'>React Routing</Link>
            <div className='collapse navbar-collapse'>
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <Link to = "/"className='nav-link'>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to = "/Employees"className='nav-link'>Employees</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to = "/Stocks"className='nav-link'>Stocks</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to = "/About"className='nav-link'>About</Link>
                    </li>


                </ul>

            </div>
        </div>

    </nav>

    </>
  )
}
export default Navbar;
