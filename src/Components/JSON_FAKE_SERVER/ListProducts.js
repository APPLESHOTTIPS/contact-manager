
import React, { Component } from 'react';
import axios from 'axios';
import Products from './Products';
import {connect} from  'react-redux';
 class ListProducts extends Component {
    // constructor(){
    //     super();
    //     this.state = {
    //         comments : []

    //     }
    // }

    UNSAFE_componentWillMount(){
        let url = "http://localhost:3000/comments";
        axios.get(url).then(response => {
          this.props.dispatch({
            type:"FETCH_PRODUCT",
             comments:response.data
         });
        })
         .catch( error => console.log(error))

    }
  render() {
    return (
      <>
      <table className='table table-striped table-center table-hover table-bordered text-center'>
          <thead className="bg-danger">
              <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>PRICE</th>
                    <th>LOCATION</th>
              </tr>
          </thead>
          <tbody>
              {
                  this.props.comments.map((comment,index)=>(
                     <Products comment ={comment} key = {index}/>
                    ))
                  }
          </tbody>
      </table>
      <div className='m-7'>
      
      </div>

      </>
    )
  }
}
const  mapStateToProp = (state)=>{
  return {
    comments : state
  }
}
export default connect(mapStateToProp) (ListProducts);