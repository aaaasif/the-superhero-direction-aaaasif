import React, { useEffect, useState } from 'react';
import Developers from '../Developer/Developer';
import Cart from '../Cart/Cart';
import './Main.css'

const Main = () => {
    // useStates
    const [developers, setDevelopers] = useState([]);
    const [cart, setCart] = useState([]);

    // loading Data
    useEffect(() => {
        fetch('./Developer.JSON')
            .then(res => res.json())
            .then(data => {
                setDevelopers(data);
            });
    }, []);
    // Add to list clickhandler
    const handleAddToCart = (developers) => {
            const newCart = [...cart, developers];
            setCart(newCart);
    }

    return (
        <div className="developers">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                {
                    developers.map(developer => <Developers
                        key={developer.key}
                        developerObject={developer}
                        handleAddToCart={handleAddToCart}
                    >
                    </Developers>)
                }
            </div>
            
            <div>
                {/* list is here */}
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Main;