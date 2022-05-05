import React, { Component } from 'react'
import './style.css';
 class Shop extends Component {
     state = {
         numofLaptops : 100
     }
     Buy=()=>{
        this.setState({numofLaptops:this.state.numofLaptops-1})
        }
  render() {
    
    return (
      <div className='app'>
          <div>
              <h1 className='title'>Welcome to My Store </h1>
              <div className="item">
              <p>Number of laptops : {this.state.numofLaptops}</p>
              <p> Dell inspiron  3</p>
              <button onClick={this.Buy}>BUY</button>
              </div>
          </div>
      </div>
    )
  }
}
export default Shop;