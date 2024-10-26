import "./style.css";
import { ShoppingBasketAdd01Icon, PlusSignCircleIcon, RemoveCircleIcon } from "hugeicons-react";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";

const Item = ({addToCart, removeFromCart, cart, product}) => {
    const {product_id, image, quantity, sell_cost, name} = product;
    const [qty, setQty] = useState(0);
    const [toggle, setToggle] = useState(false)

    const updateToggle = () => {
        setToggle(!toggle)
    }

    useEffect(() => {
        if (quantity){
            setQty(quantity);
        }else{
            cart.find(item => item.product_id === product_id) && setQty(cart.find(item => item.product_id === product_id).quantity);
        }

        if (quantity !== 0){
            setToggle(true);
        }else{
            setToggle(false);
        }

    }, [product, quantity, product_id, cart]);
    return (
        <div className="item-container">
            <Link to={`/product/${product_id}`} className={"item"}>
                <div className="item-image">
                    <img
                        src={image}
                        alt={name}/>
                </div>
                <div className="item-info">
                    <div className="item-title">
                        {name}
                    </div>
                    <div className="item-price">
                        {sell_cost && sell_cost.toLocaleString()}
                    </div>
                </div>
            </Link>
            {!toggle && (
                <button className="item-add-cart-btn" onClick={updateToggle}>
                    <ShoppingBasketAdd01Icon className="add-icon" size={18} color="#9CA0AF" />
                    <p>Add to cart</p>
                </button>
            )}

            <div className={`item-actions ${toggle ? 'show' : ''}`}>
                <button onClick={() => addToCart(product_id, image, name, sell_cost)}>
                    <PlusSignCircleIcon size={20} color="#333" />
                </button>
                <input type="text" value={qty} readOnly/>
                <button onClick={() => removeFromCart(product_id)}>
                    <RemoveCircleIcon size={20} color="#333" />
                </button>
            </div>
        </div>
    )
}

export default Item;