import React from 'react';
import axios from 'axios';
class ContactList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts : [],
            errorMessage :""
        };
    } 
    componentDidMount(){
        this.allContacts();
    }
    allContacts = async ()=>{
        try{
            let dataUrl ='https://gist.githubusercontent.com/thenaveensaggam/fe5a67531d964f8c17fc92f0c70ced21/raw/f7c43379ec32421c871a57f832e314dd8e5d92f7/contacts.15.6.2021.json';
             let response = await axios.get(dataUrl)
             this.setState({

                ...this.state,

                contacts : response.data
             });


        }
        catch (error){
            console.error(error)
            this.setState({
                  ...this.state,
                errorMessage : error
             });

        }
    };
    click = (contact)=>{
        this.props.sendContact(contact);
    };
    render() {
        return (
            <>
            <table className='table  table-hover text-center table-stripe table-primary'>
            <thead className='bg-dark text-primary'>
                <tr>
                    <th>SNO</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>PHONE</th>
                    <th>LOCATION</th>
                </tr>

            </thead>
            <tbody>
                {
                    this.state.contacts.length > 0 ? 
                    <>
                    {  
                      this.state.contacts.map((contact,index) => {
                        return (
                            <tr key ={contact.login.uuid }  onClick={this.click.bind(this,contact)}>
                                <td>{index}</td>
                                <td>{contact.name.first}{contact.name.last}</td>
                                <td>{contact.email}</td>
                                <td>{contact.phone}</td>
                                <td>{contact.location.city}</td>

                            </tr>

                        )
                       })
                   }
                    </>:null
                }
            </tbody>

            </table>


                
            </>
        );
    }
}

export default ContactList;
