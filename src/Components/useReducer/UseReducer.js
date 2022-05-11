import { type } from '@testing-library/user-event/dist/type';
import React,{useReducer} from 'react'

// let Good_Morning = "Good_Mokmdjdjdrning";
// let Good_Afternoon = "Good_Afternoon";
// let Good_Evening = "Good_Evening"
export default function UseReducer() {
    let initialState = "hello";

    let reducer = (state = initialState, action)=>{
        switch(action.type){
            case "Good_Morning":
                return  "GoodMorning";
                case "Good_Afternoon":
                return  "GoodAfternoon";
                case "Good_Evening":
                return  "GooDEvening";
                default : return state;
        }
    };
    let [message,dispatch] = useReducer(reducer, initialState)
  return (
    <>
    <div className="p-3">
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <div className="card my-6">
                        <div className="card-header">
                            <p className="h3">UseReducer</p>
                        </div>
                        <div className="card-body">
                            <p className="h2">{message}</p>
                            <button  onClick={ () => dispatch("Good_Morning")} className='btn btn-success btn-md m-2'>GoodMorning</button>
                            <button className='btn btn-warning btn-md m-2'>Good|Afternoon</button>
                            <button className='btn btn-danger btn-md'>GoodEvening</button>
                        </div>
                    </div>
                 </div>
           </div>
      </div>
  </div></>
  )
}
