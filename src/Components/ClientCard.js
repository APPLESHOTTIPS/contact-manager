import React from 'react';
class ClientCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            price : "",
            gst :""

        };
    }
    updateInput =(event)=>{
        this.setState({
            ...this.state,
            [event.target.name]: Number(event.target.value)

        });
    };
    calculate =(e)=>{
        e.preventDefault();
        let tax = this.state.price * this.state.gst/100;
        let  total = this.state.price + tax;
         this.props.sendData(total);

    };

    render() {
        return (
            <div>
                {/* <pre>{JSON.stringify(this.state)}</pre>  */}
                <div className="card">
                    <div className="card-header bg-warning">
                        <h4>ClientCard</h4>
                    </div>
                    <div className="card-body bg-warning">
                        <form onSubmit={this.calculate}>
                            <div className="form-group">
                                <input
                                 name= "price"
                                 value={this.state.price}
                                 onChange={this.updateInput}
                                  type= "number" className='form-control' placeholder='product price '/>
                            </div>
                            <div className="form-group">
                            <input 
                            name ="gst"
                            value={this.state.value}
                            onChange={this.updateInput}
                             type= "number" className='form-control' placeholder='GST'/>
                            </div>
                            <div>
                                <input type="submit" className='btn btn-success btn-sm' value="calculate" />
                            </div>
                        </form>
                    </div>
                </div>
                
            </div>
        );
    }
}



export default ClientCard;
