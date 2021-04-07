import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Order = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://mysterious-sea-38335.herokuapp.com/orderedItems')
            .then(response => response.json())
            .then(data => setItems(data));
    }, [])
    return (
        <div className="container mt-3">
            <h3>You ordered {items.length}items:</h3>
            
            <table className="table mt-3">
                <thead className="table-dark">
                    <tr>
                        <th>Products</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(item =>
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>{item.price}</td>
                            </tr> 
                        ) 
                    }
                </tbody>
                <tfoot>
                    <tr>
                    <td><Link to="/home" className="btn btn-warning"><i className="fa fa-angle-left"></i> Continue Shopping</Link></td>
                                <td><strong>Total Products:</strong> {items.length}</td>
                                <td ><strong>Total Price:</strong> ##### BDT</td>
                        </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default Order;