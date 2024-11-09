import Header from '../Components/Header/Header';
import Item from "../Components/Item/Item";
import React from "react";


function Cart({cart, addToCart, removeFromCart}) {
    return (
        <div className="wrapper">
            <Header/>

            <div className="container">
                <div className="main-title">
                    Products in your cart
                </div>
                <div className="sub-title">
                    List of all products in your cart
                </div>
                <div className="items-container">
                    {cart.map((product) => (
                        <Item key={product.product_id} addToCart={addToCart} removeFromCart={removeFromCart} cart={cart}
                              product={product}/>
                    ))}
                </div>
                {/*<OrderButton />*/}
            </div>

        </div>
    );
}

export default Cart;
