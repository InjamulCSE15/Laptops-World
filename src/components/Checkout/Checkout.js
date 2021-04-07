import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import {UserContext} from '../../App';

const Checkout = () => {
    const { id } = useParams();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [product, setProduct] = useState([])
        useEffect(()=>{
            fetch(`https://mysterious-sea-38335.herokuapp.com/checkout/${id}`)
            .then(response => response.json())
            .then(data =>setProduct(data))
        },[])

    return (
        <div>
            <div className="container">
                <table id="cart" className="table table-hover table-condensed mt-2">
                    <thead>
                        <tr>
                            <th><h4>Your checkout items:</h4></th>
                            <th style={{ width: '10%' }}>Quantity</th>
                            <th style={{ width: '15%' }} className="text-center">Price</th>
                            <th style={{ width: '10%' }}></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-th="Product">
                                <div className="row d-flex">
                                    <div className="col-sm-2 hidden-xs"><img src={product.imageURL} alt="..." style={{ width: '100%' }} /></div>
                                    <div className="col-sm-10">
                                        <h5 className="nomargin">{product.name}</h5>
                                    </div>
                                </div>
                            </td>
                            <td data-th="Quantity">
                                <input type="number" className="form-control text-center" value="1" />
                            </td>
                            <td data-th="Price" className="text-center">{product.price}</td>
                            <td className="actions text-end" data-th="">
                                <button className="btn btn-info btn-sm" title="Edit"><i className="fa fa-edit"></i></button> <button className="btn btn-danger btn-sm" title="Delete"><i className="fa fa-trash-o"></i></button>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td><Link to="/home" className="btn btn-warning"><i className="fa fa-angle-left"></i> Continue Shopping</Link></td>
                            <td  className="hidden-xs"></td>
                            <td className="hidden-xs text-center"><strong>Total: {product.price}</strong></td>
                            <td><Link to="/order" className="btn btn-success btn-block">Checkout <i className="fa fa-angle-right"></i></Link></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default Checkout;