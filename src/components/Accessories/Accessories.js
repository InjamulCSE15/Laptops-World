import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Accessories = ( props ) => {

const {_id, name, details, price, imageURL} = props.laptop;

    return (
        <div className="col">
            <div className="card container h-100" style={{ width: '22rem',margin: 'auto' }}>
                <img src={imageURL} className="card-img-top" alt="..." />
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><h5><strong>{name}</strong></h5></li>
                    <li className="list-group-item"><strong>Details:</strong> {details}</li>
                </ul>
                <div class="card-body d-flex justify-content-between">
                    <div>
                        <h5>{price} BDT</h5>
                    </div>
                    <div>
                    <Link to={`/checkout/${_id}`}><button className="nav-link btn btn-outline-primary"><FontAwesomeIcon icon={faShoppingCart} />  BUY NOW</button></Link>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Accessories;