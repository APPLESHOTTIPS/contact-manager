import { React, useState } from "react";

function Forms() {
  let [state, setState] = useState({
      user : {
          userName :"",
          email: "",
          password:"",
          designation:"",
          bio : '',
          terms : false

      }
  });
 
   
  let updateInput = (e) => {
      setState( (state)=> ({
          user : {
              ...state.user,
              [e.target.name] : e.target.value
          }
      }))
}
let updateChecked = (e)=>{
    setState( (state)=> ({
        user : {
            ...state.user,
            [e.target.name] : e.target.checked
        }
    }))

}

let submitForm  = (e)=>{
    e.preventDefault();
    console.log(user);
}

let {user} = state;
 
  return (
    <>

    <pre>{JSON.stringify(state)}</pre>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <h1> registration form </h1>
              </div>
              <div className="card-body">
                <form  onSubmit={submitForm}>
                  <div className="mb-3">
                        <input
                        name ="userName"
                        value= {user.userName}
                        onChange={updateInput}
                        type="text"
                        className="form-control"
                        placeholder="EnterName"
                        />
                  </div>
                  <div className="mb-3">
                    <input
                    name = "email"
                      type="email"
                      onChange={updateInput}
                      className="form-control"
                      value={user.email}
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      name = "password"
                      type="password"
                      onChange={updateInput}
                      className="form-control"
                      value={user.password}
                      placeholder="password"
                    />
                  </div>
                  {/* <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      value={""}
                      placeholder=" name"
                    />
                  </div> */}
                  <div className="mb-3">
                    <select 
                    name ="designation"
                    onChange={updateInput}
                     className="form-control">
                      <option value="">Select Designation</option>
                      <option value="software Engineer">
                        software Engineer
                      </option>
                      <option value="sr .Software Engineer">
                        sr .Software Engineer
                      </option>
                      <option value="tech Lead">tech Lead</option>
                      <option value="Project Manger">Project Manger</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <textarea
                    name = "bio"
                    onChange={updateInput}
                    value = {user.bio}
                      row={4}
                      className="form-control"
                      placeholder="Bio"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                    name = "terms"
                    onChange={updateChecked}
                      type="checkbox"
                      className="form-check-input"

                      placeholder=" name"
                    />{" "}
                    Accept Terms
                  </div>
                  <div className="mb-3">
                    <input type="submit" className="btn btn-warning btn-sm text-align-center" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Forms;
