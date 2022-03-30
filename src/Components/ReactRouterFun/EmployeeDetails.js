import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
function EmployeeDetails() {
  let employeeID = useParams().id;
  let [selectedEmployee, setSelectedEmployee] = useState([]);
  let [errorMessage, setError] = useState("");
  useEffect(() => {
    let dataUrl =
      "https://gist.githubusercontent.com/APPLESHOTTIPS/fe605eada88c2ec7b8dbaf1064e6f773/raw/07bce225fb41fccbeceac47a3ee9563261443cbd/Stockdetails.json";
    Axios.get(dataUrl)
      .then((response) => {
        let anEmployee = response.data.find(
          employee => employee.id === employeeID
        );
        setSelectedEmployee(anEmployee);
        console.log(selectedEmployee);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  // Click = ()=>{
  //   console.log(alert(CLICKED))
  // }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="lead">"employeeDetails"</p>
            <p className="lorem">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
              sed eos exercitationem, nihil animi incidunt quibusdam praesentium
              delectus nemo voluptates hic reiciendis ullam laborum nam.
              Voluptate doloremque facere nulla quam!
            </p>
          </div>
        </div>
        <section>
          <div className="row">
            <div className="col-md-4">
              <div className="card"></div>
              <div className="card-header bg-warning">
                <ul className="list-group">
                    <li className="list-group-item">
                        NAME:{selectedEmployee.name}
                    </li>
                </ul>
              </div>
            </div>
              <div className="col-md-8 bg-warning">
                <ul className="list-group" onClick={(e)=>console.log(alert("clicked"))}>
                  <li className="list-group-item">
                    ID : {selectedEmployee.id }
                  </li>
                  <li className="list-group-item">
                  SECTOR : {selectedEmployee.sector }
                  </li>
                  <li className="list-group-item">
                  SYMBOL : {selectedEmployee.symbol }
                  </li>
                  <li className="list-group-item">
                  MARKET : {selectedEmployee.market }
                  </li>
                </ul>
              </div>
               
          </div>
        </section>
      </div>
    </>
  );
}
export default EmployeeDetails;
