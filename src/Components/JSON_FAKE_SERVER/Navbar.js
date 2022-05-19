import React from "react";
import { Link } from "react-router-dom";

let Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-light bg-warning navbar-expand-sm">
        <div className="container">
          <Link to="/" className="navbar-brand">
            SERVER-FETCHING
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to='/list-products' className="nav-link">
                  List Product
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/add-products' className="nav-link">
                  Add Products
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
