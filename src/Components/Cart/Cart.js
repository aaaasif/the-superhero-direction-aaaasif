import React from 'react';
import Selected from '../Selected/Selected';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props;
    const totalDevelopers = cart.length;
    let total = 0;
    for (const developer of cart) {
        total = total + developer.salary;
    }
    
    return (
        <div className="cart-main">
            <div className="cart h-100">
                <div className="cart-details">
                    <h3>Added Developers: <span className="fw-bolder text-success">{totalDevelopers}</span></h3>
                    <h4>Total Costs: <span className="fw-bolder text-success">{total} $</span></h4>
                    <h4>Devloper's List: </h4>
                    {/* selected Developers show */}
                    <div>
                        {
                            cart.map(developer => <Selected developer={developer}></Selected>)
                        }
                    </div>
                </div>
                <button className="hire-now">Hire Now</button>
            </div>
            
        </div>
    );
};

export default Cart;