import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Accessories = ({ laptop }) => {
    return (
        <div className="col">
            <div className="card container h-100" style={{ width: '22rem',margin: 'auto' }}>
                <img src={laptop.imageURL} className="card-img-top" alt="..." />
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><h5>{laptop.name}</h5></li>
                    <li className="list-group-item"><strong>Details:</strong></li>
                </ul>
                <div class="card-body d-flex justify-content-between">
                    <div>
                        <h5>{laptop.price} BDT</h5>
                    </div>
                    <div>
                        <button type="button" className="btn btn-outline-primary"> <FontAwesomeIcon icon={faShoppingCart} />  BUY NOW</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Accessories;