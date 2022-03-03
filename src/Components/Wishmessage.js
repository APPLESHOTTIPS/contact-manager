import React from "react";
import {useDispatch,useSelector} from "react-redux";
import * as messageActions from "../redux/wishMessage/wishMessage.action";
import * as messageReducer from "../redux/wishMessage/wishMessage.reducer";
const Wishmessage = () => {

   let dispatch = useDispatch();

   let messageInfo = useSelector((state) => {
     return state[messageReducer.messageFeatureKey];
   });
  return (
    <>
      <section className="p-3">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="card">
                <div className="card-header bg- secondary text-white"></div>
                <div className="card-body">
                  <h2>{messageInfo.message}</h2>
                  <button onClick={(e) => dispatch(messageActions.printGoodMorning())} className="btn btn-success btn-sm m-1">
                    Good morning
                  </button>
                  <button onClick={(e)=> dispatch(messageActions.printGoodAfternoon())} className="btn btn-warning btn-sm m-1">
                    Good Afternoon
                  </button>
                  <button onClick={(e)=> dispatch(messageActions.printGoodEvening())} className="btn btn-danger btn-sm m-1">
                    Good Evening
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Wishmessage;
