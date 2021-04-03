import React from 'react';
import { Link } from 'react-router-dom';

const Order = () => {
    return (
        <div>
            <div className="container">
                <table id="cart" className="table table-hover table-condensed mt-2">
                    <thead>
                        <tr>
                            <th><h4>Your ordered items</h4></th>
                            <th style={{ width: '10%' }}>Quantity</th>
                            <th style={{ width: '15%' }} className="text-center">Price</th>
                            <th style={{ width: '10%' }}></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-th="Product">
                                <div className="row">
                                    <div className="col-sm-2 hidden-xs"><img src="http://placehold.it/100x100" alt="..." className="img-responsive" /></div>
                                    <div className="col-sm-10">
                                        <h5 className="nomargin">Asus Zenbook 14</h5>
                                        <p>Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet.</p>
                                    </div>
                                </div>
                            </td>
                            <td data-th="Quantity">
                                <input type="number" className="form-control text-center" value="1" />
                            </td>
                            <td data-th="Price" className="text-center">55000 BDT</td>
                            <td className="actions text-end" data-th="">
                                <button className="btn btn-info btn-sm" title="Edit"><i className="fa fa-edit"></i></button> <button className="btn btn-danger btn-sm" title="Delete"><i className="fa fa-trash-o"></i></button>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td><Link to="/" className="btn btn-warning"><i className="fa fa-angle-left"></i> Continue Shopping</Link></td>
                            <td  className="hidden-xs"></td>
                            <td className="hidden-xs text-center"><strong>Total 55000 BDT</strong></td>
                            <td><Link to="/checkout" className="btn btn-success btn-block">Checkout <i className="fa fa-angle-right"></i></Link></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default Order;