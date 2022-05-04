export const userFeatureKey = 'user-info';
import * as userActions from './Users/user.action';

let initialState = {
    user : {
        username:"",
        email :"",
        password :"",
        designation :"",
        terms : false 
    }
};
export const  reducer = (state = initialState, action)=>{
    switch (action.type) {
        case userAction.REGISTER_USER:
            return{
                user :action.payload.user
            }
    
        default: return state;
            break;
    }
}  
