import React from 'react';
import Child from './Child';

class PropsDrilling extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        pText:"Hello i'm from parent",
        cText : ""
    };
}

receive( value){
    this.setState({
        ...this.state,
        cText : value 

    })
}

    render() {
        return <>
        <div className=''>
            <section>
                <div className="row">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body bg-secondary">
                                <p className="h4">Parent</p>
                                <small>{this.state.cText}</small>
                                <Child  pText = {this.state.pText } sendData = {this.receive.bind(this)}/>
                            </div>
                        </div>
                    </div>
                </div>
                

            </section>
        </div>
        
        </>;
    }
}


export default PropsDrilling;