import "./style.css";
import { ShoppingBasketAdd01Icon, PlusSignCircleIcon, RemoveCircleIcon } from "hugeicons-react";
import { useState } from "react";
import {Link} from "react-router-dom";

const Item = ({product}) => {
    const {id, image_url, sell_cost_uzs, product_name} = product;
    const [toggle, setToggle] = useState(false)
    const updateToggle = () => {
        setToggle(!toggle)
    }
    return (
        <div className="item-container">
            <Link to={`/product/${id}`} className={"item"}>
                <div className="item-image">
                    <img
                        src={image_url}
                        alt={product_name}/>
                </div>
                <div className="item-info">
                    <div className="item-title">
                        {product_name}
                    </div>
                    <div className="item-price">
                        {sell_cost_uzs.toLocaleString()}
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
                <button onClick={() => console.log("Increase quantity", {id})}>
                    <PlusSignCircleIcon size={20} color="#333" />
                </button>
                <input type="text" value={1} readOnly/>
                <button onClick={() => console.log("Decrease quantity", {id})}>
                    <RemoveCircleIcon size={20} color="#333" />
                </button>
            </div>
        </div>
    )
}

export default Item;