import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {UserContext} from '../../App';

const Checkout = () => {
    const { id } = useParams();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [product, setProduct] = useState([])
        useEffect(()=>{
            fetch(`http://localhost:5000/checkout/${id}`)
            .then(response => response.json())
            .then(data =>setProduct(data))
        },[])

    return (
        <div>
            <h1>Your Products: </h1>
            
                <div>
                <h4>Product Name: {product.name}</h4>
                <h5>Product Price: {product.price}</h5>
                </div>
            
        </div>
    );
};

export default Checkout;