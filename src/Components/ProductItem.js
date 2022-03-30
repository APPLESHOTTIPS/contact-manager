import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import * as  productActions from '../redux/productItem/Productitem.actions';
import * as productReducer from '../redux/productItem/Product.reducer';

function ProductItem() {
    let dispatch = useDispatch();
    let productInfo = useSelector((state) => {
        return state[productReducer.productItemFeatureKey];

    });
    let {product}= productInfo;
    let clickIncr = ()=>{
        dispatch(productActions.incrQty())
    }
    let clickDcr = ()=>{
        dispatch(productActions.decrQty())
    }
  return (
    <>
    <section className='p-3'>
        <div className="container">
            <div className="row">
                <div className="col">
                    <p className="h3 text-primary">Product Item</p>
                    <p className="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit dolores quae consequuntur nisi laborum repellat id, veritatis quod rerum placeat tenetur hic perspiciatis sint assumenda nulla quaerat illum libero odit.</p>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div className="container">
            <div className="row">
                <div className="col">
                    <table className='table table-hover text-center table-primary '>
                        <thead className='bg-dark text-white'>
                            <tr>
                                <th>SNO</th>
                                <th>IMAGE</th>
                                <th>NAME</th>
                                <th>PRICE</th>
                                <th>QTY</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{product.sno}</td>
                                <td>
                                    <img src={product.image} alt="" width='50' height='50' />
                                </td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>
                                    <i className= "fa fa-minus-circle" onClick={clickDcr}/>
                                    {product.qty}
                                    <i className= "fa fa-plus-circle" onClick= {clickIncr} />
                                </td>
                                    
                                <td>{product.price * product.qty}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default ProductItem