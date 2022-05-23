import React,{useRef} from 'react'

function Useref() {

    let refed = useRef(null);

   let  register = (e)=>{
    refed.current.disabled = !e.target.checked;
    }
  return (
    <>
    <section>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header bg-secondary text-white ">
                            <p className="h4">Register</p>
                        </div>
                        <div className="card-body">
                            <form action="">
                                <div className="form-check">
                                    <input
                                     onChange={register}
                                    type="checkbox"className='form-check-input'/>
                                    <label className='form-check-label'>Terms & conditions</label>
                                </div>
                                <input
                                ref={refed}
                                 type="submit" value="Register" className='btn-btn-success btn-sm' disabled  />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Useref;