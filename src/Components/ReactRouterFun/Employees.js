import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

 function Employees() {

  let [employees,setEmployees]=useState([]);
  let [errorMessage, setErrorMessage] = useState([]);
  useEffect(()=>{
    let dataUrl = "https://gist.githubusercontent.com/APPLESHOTTIPS/fe605eada88c2ec7b8dbaf1064e6f773/raw/07bce225fb41fccbeceac47a3ee9563261443cbd/Stockdetails.json";
       Axios.get(dataUrl).then((response)=>{
         setEmployees(response.data);
       }).catch((error)=>{
         setErrorMessage(errorMessage);

       })

  },[]);
  return (
    <>
   <div className="container p-3">
      <div className="row">
        <div className="col">
          <p className="h3 text-danger">Employee Info</p>
          <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque tenetur iusto, necessitatibus, modi dicta aperiam rerum ipsa vitae animi, sit ea temporibus? Consequuntur, illum nostrum explicabo autem saepe nemo! Facilis.</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <table className='table table-hover text-center table-striped table-secondary'>
            <tr  className= "bg-dark text-white">
              <th>ID</th>
              <th>NAME</th>
              <th>MARKET</th>
              <th>SECTOR</th>
              <th>Symbol</th>
              <th>CURRENCY</th>
              <th>INDUATRY</th>
            </tr>
            <tbody>
              {
                employees.length >0 ?
                <>
                {
                  employees.map(employee => {
                    return(
                      <tr key = {employee.id}>
                        <td>{employee.id}</td>
                        <td>
                          <Link to = {`/employees/${employee.id}`} className ="text-bold">{employee.name}/</Link>
                        </td>
                        <td>{employee.market}</td>
                        <td>{employee.sector}</td>
                        <td>{employee.symbol}</td>
                        <td>{employee.currency}</td>
                        <td>{employee.induatry}</td>

                      </tr>
                    )
                  })
                }
                </>:null
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  )
}
export default Employees;
