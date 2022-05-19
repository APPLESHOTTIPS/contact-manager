import axios from 'axios';
import React from 'react';
import {connect} from  'react-redux';

class Products extends React.Component {
    constructor(props) {
        super(props);
        
        this.deleteTableRow = this.deleteTableRow.bind(this)
    }
    deleteTableRow =()=>{
        
        axios.delete("http://localhost:3000/comments/" + this.props.comment.id)
        .then(response=>{
            console.log(response.status)
            if(response.data === 200){
                this.props.dispatch({
                    type:'DELETE_PRODUCT',
                    id :this.props.comment.id
                })
            }
        })
        .catch(error => console.error(error))

    }

    render() {
        return (
            <>
            
                <tr className='bg-secondary text-bold'>
                    <td>{this.props.comment.id}</td>
                    <td>{this.props.comment.name}</td>
                    <td>{this.props.comment.price}</td>
                    <td>{this.props.comment.location}</td>
                    <td>
                        <button 
                        onClick={this.deleteTableRow}
                        className='btn btn-danger btn-sm'>
                            Delete</button>
                    </td>
                </tr>
            
            
            </>
        );
    }
}


export default connect() (Products);
