import React from 'react';
import './Developer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Developer = (props) => {
    const { name, age, role, photo, salary, country, } = props.developerObject;

    return (
        <div className="col">
            {/* developers */}
            <div class="card h-100 developer">
                <img src={photo} className="card-img-top mx-auto" alt="developers" />
                <div className ="card-body">
                    <h5>Name: {name}</h5>
                    <h5>Age: {age} Years</h5>
                    <h5>Role: {role}</h5>
                    <h5>Country: {country}</h5>
                    <h5>Salary: {salary} $</h5>
                </div>
                
                <div className="">
                    {/* Add to list button and clickhandler */}
                    <button
                        onClick={() => props.handleAddToCart(props.developerObject)}
                        className="add-to-list"
                    ><FontAwesomeIcon icon={faShoppingCart} /> Add to List</button>
                </div>
            </div>
        </div>
    );
};

export default Developer;