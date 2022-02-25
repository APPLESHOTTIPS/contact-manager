import React from 'react';
class ServerCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                

            
        } 
    }
    

    

    render() {
        return (
            <>
            <div className="card">
                <div className="card-header bg-success text-white">
                    <p className="h4">ProductDetails</p>
                </div>
                <div className="card-body">
                    <div className="p3">&#8377;{this.props.total.toFixed(2)}</div>
                </div>
            </div>
                
            </>
        );
    }
}



export default ServerCard;
