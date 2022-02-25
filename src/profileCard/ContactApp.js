import React from 'react';
import ContactCard from './ContactCard';
import ContactList from './ContactList';
class ContactApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedContact : {}
        };
    }
    
    receiveContact = ( contact)=>{ 
        this.setState({
            ...this.state,
            selectedContact : contact

        });

    };

    render() {
        return (
            <>
            {/* <pre>{JSON.stringify(this.state.selectedContact)}</pre> */}
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <p className="h3 text-primary">ContactApp</p>
                                <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus suscipit voluptates aperiam dolore labore, eaque sit atque saepe natus itaque deserunt neque dolorem. Officia aperiam consequatur maiores quo earum accusantium!</p>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9">
                            <ContactList  sendContact = {this.receiveContact} />
                            </div>
                            <div className="col-md-3">
                                <ContactCard  selectedContact ={this.state.selectedContact}/>

                            </div>
                        </div>
                    </div>

                </section>
                
            </>
        );
    }
}

export default ContactApp;
