import axios from "axios";
export const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

// let fetchUserRequest = () => {
//   return {
//     type: FETCH_USER_REQUEST,
//   };
// };
// let fetchUserSuccess = (users) => {
//   return {
//     type: FETCH_USER_SUCCESS,
//     payload: users
//   };
// };
// let fetchUserFailure = (error) => {
//   return {
//     type : FETCH_USER_FAILURE,
//     payload : error,
//   };
// };

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch({type: FETCH_USER_REQUEST});
    let dataUrl = "https://jsonplaceholder.typicode.com/users";
    axios
      .get(dataUrl)
      .then((response) => {
        dispatch({ type: FETCH_USER_SUCCESS, payload: response.data});
      })
      .catch((error) => {
        dispatch({ type : FETCH_USER_FAILURE, payload : error});
      });
  };
};


let getDataAsync = ()=>{
    return async(dispatch)=>{
        dispatch({type: FETCH_USER_REQUEST});
        try {
        let dataUrl = "https://jsonplaceholder.typicode.com/users";
        let response  = axios.get(dataUrl);
        dispatch({type : FETCH_USER_SUCCESS, payload :response.data});
        }
        catch (error) { 
            dispatch({type:FETCH_USER_FAILURE,payload:error})
        }
    }
}
