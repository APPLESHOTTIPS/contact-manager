import { type } from "@testing-library/user-event/dist/type"
import { Buy_LapTop } from "../Actions/ActionTypes"

const initialState =  {
    numOfLaptops : 100
}
const laptopReducer = (state = initialState,action) =>{
    switch(action,type){
        case Buy_LapTop:
            return {numOfLaptops: state.numOfLaptops-5}
            default:
                return state ;
    }
}
export default laptopReducer;