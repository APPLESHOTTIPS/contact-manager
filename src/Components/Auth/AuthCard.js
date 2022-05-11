import React from 'react';
import * as authReducer from '../../redux/auth/auth.reducer';
import * as authActions from '../../redux/auth/auth.actions';
import { useDispatch, useSelector } from 'react-redux';

const AuthCard = () => {
    let dispatch  = useDispatch();

    let authInfo = useSelector((state)=>{
        return  state[authReducer.authFeatureKey];
    })

    let {loggedIn}= authInfo;

   let  clicked = ()=>{
    dispatch(authActions.Login_User)

    }
    let click= ()=>{
        dispatch(authActions.Logout_User)
    }
    return (
     <>
             <pre>{JSON.stringify(authInfo)}</pre>
                <section className="p-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="card bg-warning">
                                    <div className="card-header bg-primary text-white">
                                        <p className="h4">Authentic</p>

                                    </div>
                                    <div className="card-body">
                                        
                                            {
                                                loggedIn?
                                                <button  className = "btn btn-danger" onClick={click}>LogOut</button>:
                                            <button  className = "btn btn-success"onClick={clicked}>Loging</button>
                                            }
                                        

                                        
                                           {
                                            loggedIn ?
                                            <React.Fragment>
                                            <div>
                                                <p className="h3">Welcome Arvind </p>
                                                <small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, sed!</small>
                                            </div>
                            </React.Fragment> :
                            <React.Fragment>
                        <div>
                       <p className="h3">GustWellCome</p>
                       <small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, sed!</small>
                       </div>

                        </React.Fragment>
                                           }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            

                </section>
        </>
    )
}


export default AuthCard;