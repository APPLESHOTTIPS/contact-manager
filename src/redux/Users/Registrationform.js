import React,{useState} from 'react';
let  Registrationform = ()=> {

    let [user , setUser] = useState(
        {
            username:"",
            email :"",
            password :"",
            designation :"",
            terms : false 
        }
    );
   let  updateinput = (e)=>{
        if(e.target.type === "checkbox"){
            setUser({
                ...user,
             [e.target.name] :e.target.checked
            });
        }
            else {
                setUser({
                    ...user,
                 [e.target.name] :e.target.value
                });
            }


        
    };
    let Submit = (e)=>{
        e.preventDefault();
        console.log(user);
    };

    
        return (
            <React.Fragment>
                <pre>{JSON.stringify(user)}</pre> 
                <section className=" APP p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-4">
                                <div className="card">
                                    <div className="card-header bg-danger text-white">
                                        <p className="h4">REGISTRATIONFORM</p>

                                    </div>
                                    <div className="card-body  rgba-red-light">
                                        <form  onSubmit ={Submit}>
                                            <div className="form-group">
                                                <input
                                                 name ="username"
                                                 value ={user.name}
                                                 onChange={updateinput}
                                                 type ="text"
                                                 className ="form-control"placeholder ='username'/>
                                            </div>
                                            <div className="form-group">
                                                <input 
                                                 name ="email"
                                                 value ={user.email}
                                                 onChange={updateinput}
                                                type ="email"className ="form-control"placeholder ='email'/>
                                            </div>
                                            <div className="form-group">
                                                <input
                                                 name ="password"
                                                 value ={user.password}
                                                 onChange={updateinput}                                               
                                                type ="password"className ="form-control"placeholder ='password'/>
                                            </div>
                                            <div className="form-group">
                                              <select 
                                                 name ="designation"
                                                 value ={user.designation}
                                                 onChange={updateinput}
                                                   className ="form-control">
                                                    <option value="">select designation</option>
                                                    <option value="software engineer">select designation</option>
                                                    <option value="jr.software engineer">jr.software engineer</option>
                                                    <option value="sr.software engineer">jr.software engineer</option>
                                                    <option value="tech engineer">tech engineer</option>
                                                    <option value="projectmanager">projectmanger</option>
                                                    <option value="group manger">group manger</option>

                                                </select>
                                            </div>
                                                    <div class="input-group mb-4">
                                                    {/* <div class="input-group-text"> */}
                                                    <input 
                                                    name = "terms"
                                                    value = {user.terms}
                                                    onChange = {updateinput}
                                                    class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input"/>
                                                    <label className="form-check-label"htmlFor=""> Accept Terms & Conditions </label>
                                                    </div>
                                                    
                                                    <input type="submit" class="btn btn-success text-center"/>
                    

                                                                                                
                                        </form>
  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            

                </section>
            </React.Fragment>
            
           
        );
    }


export default Registrationform;