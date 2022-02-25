import React from 'react';
class Child extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        cText: "hello i'm from Child",
    };
} 
clickSend = () => {
     this.props.sendData(this.state.cText);

};

    render() {
        return  <>
        <div className='container'>
            <section>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body rgba-light-green">
                                <p className="h4">Child</p>
                                <small>{this.props.pText}</small> <br />
                                <button onClick={this.clickSend} className="btn btn-danger">send</button>
                            </div>
                        </div>
                    </div>
                </div>
                

            </section>
        </div>
        
        </>;
    }
}

export default Child;