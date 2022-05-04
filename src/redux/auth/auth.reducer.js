import * as authActions from "./auth.actions";
export const authFeatureKey ="auth-info";

let initialSate = {
   loggedIn :  false
}

export const  reducer = (state= initialSate,action)=>{
    switch(action.type){
        case authActions.Login_User:
            return{
                loggedIn:true 
            };
            case authActions.Logout_User:
                return{
                    loggedIn:false 
                };    
                default: return state;

    }
}