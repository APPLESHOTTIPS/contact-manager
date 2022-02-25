import React from 'react';
import './App.css';
import ClientCard from './Components/ClientCard';
import Methods from './Components/Methods';
import PropsDrilling from './Components/PropsDrilling';
import ServerCard from './Components/ServerCard';
import ContactApp from './profileCard/ContactApp';

class App extends React.Component {
constructor(props) {
  super(props);

  this.state = {
    total : 0
  };
}
 receiveTotal = (value)=>{
   this.setState({
     total : value

   });


 };

  render() {
    return(
     <>
     
     <ContactApp/>
     {/* <div className ="App">
      <section className='p-3'>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
            <ClientCard sendData = {this.receiveTotal}/>
            <pre>{this.state.total}</pre>
            </div>
            <div className="col-md-4">
              <ServerCard   total ={this.state.total} />
            </div>
          </div>
        </div>
      </section>
      
    </div> */}
    </>
    )
  }
}
export default App;