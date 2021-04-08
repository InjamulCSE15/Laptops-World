import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

import './Checkout.css'
import { Button } from '@material-ui/core';

const Checkout = () => {
    const { id } = useParams();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch(`https://mysterious-sea-38335.herokuapp.com/checkout/${id}`)
            .then(response => response.json())
            .then(data => setProduct(data))
    }, [])

    const handleCheckout = () => {
        const orderedDate = document.getElementById('date').value;
        const userName = loggedInUser.name;
        const itemCount = document.getElementById('quantity').value;

        console.log(orderedDate);
        const detailsOrdered = {
            name: product.name,
            details: product.details,
            price: product.price,
            quantity: itemCount,
            email: loggedInUser.email,
            user: userName,
            date: orderedDate
        }
        console.log(detailsOrdered);
        fetch('https://mysterious-sea-38335.herokuapp.com/checkoutItems', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(detailsOrdered)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
    }

    return (
        <div>
            <div className="container">
                <table id="cart" className="table table-hover table-condensed mt-2">
                    <thead>
                        <tr>
                            <th><h4>Your checkout items:</h4></th>
                            <th style={{ width: '10%' }}>Quantity</th>
                            <th style={{ width: '10%' }} className="text-center">Price</th>
                            <th style={{ width: '10%' }} ></th>
                            <th style={{ width: '10%' }} >Customize</th>
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
                                <input type="number" className="form-control text-center" id="quantity" value="1" />
                            </td>
                            <td data-th="Price" className="text-center">{product.price} BDT</td>
                            <td className="text-center"></td>
                            <td className="actions text-end" data-th="">
                                <button className="btn btn-info btn-sm" title="Edit"><i className="fa fa-edit"></i></button> <button className="btn btn-danger btn-sm" title="Delete"><i className="fa fa-trash-o"></i></button>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td><Link to="/home" className="btn btn-warning"><i className="fa fa-angle-left"></i> Continue Shopping</Link></td>
                            <td className="hidden-xs"></td>
                            <td className="hidden-xs text-center"><strong>Total: {product.price} BDT</strong></td>
                            <td className="hidden-xs"></td>
                            <td><MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid container justify="space-around">

                                    <KeyboardDatePicker
                                        margin="normal"
                                        id="date"
                                        label="Date(dd/MM/yyyy)"
                                        format="dd/MM/yyyy"
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </Grid>
                                <div>
                                    <button className="btn btn-outline-success" onClick={handleCheckout}>

                                        <Link to="/order">Checkout <i className="fa fa-angle-right"></i> </Link>

                                    </button>
                                </div>

                            </MuiPickersUtilsProvider>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default Checkout;