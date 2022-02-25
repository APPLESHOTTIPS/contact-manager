import React from 'react'

 class Methods extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn : true 
        }

    }
    login() {
        this.setState({
            isLoggedIn:true

        });
    }
        logout() {
            this.setState({
                isLoggedIn:false
            })
            
        }
    render() {
        return ( 
           <>
           <section className='p-3'>
               <div className='container'>
                   <div className="row">
                       <div className="col-md-6">
                           <div className="card">
                               <div className="card-header bg-secondary text-white">
                                   <p className="h4">Auth Card</p>
                               </div>
                               <div className="card-body bg-secondary"> 
                                   {
                                       this.state.isLoggedIn ? 
                                       <button onClick={this.logout.bind(this)} className='btn btn-danger btn-sm'>LogOut</button>:
                                       <button onClick={this.login.bind(this)}  className='btn btn-success btn-sm'>Login</button>
                                         
                                   }
                                   
                                
                                {
                                    this.state.isLoggedIn ?
                                    <>
                                    <div>
                                        <p className="h3">Welcome </p>
                                        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita iusto similique iure? Ab, accusamus. Eligendi libero itaque deserunt expedita, ipsum tempora similique deleniti praesentium ex iusto facilis! Distinctio, quasi nobis.</small>


                                    </div>
                                    </>:
                                    <>
                                    <p className="h3">Logout</p>
                                    <small>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta ipsum placeat doloremque sequi hic, sit deserunt velit nisi omnis nesciunt.</small>
                                    </>

                                }
                               </div>
                           </div>
                       </div>
                   </div>
               </div>

           </section>
           </>
        )
    }
}
export default Methods;