import React, { useEffect, useState } from 'react';
import Accessories from '../Accessories/Accessories';


const Home = () => {

    const [laptops, setLaptops] = useState([]);
    useEffect (() => {
        fetch('http://localhost:5000/products')
        .then(response => response.json())
        .then(data =>setLaptops(data))
    },[])

    return (
        <div className="row row-cols-md-4 g-4 m-auto">
            {
                laptops.map(laptop => <Accessories laptop={laptop}></Accessories>)
            }
        </div>
    );
};

export default Home;