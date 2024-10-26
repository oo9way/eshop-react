import "./style.css";
import {PlusSignCircleIcon, RemoveCircleIcon} from "hugeicons-react";
import {useEffect, useState} from "react";


const ProductBottom = ({AddOrIncreaseProduct, RemoveOrDecreaseProduct, cart, product}) => {
    const [toggle, setToggle] = useState(false);
    const [qty, setQty] = useState(1);

    useEffect(() => {

        if (cart.find(item => item.product_id === product.id)) {
            setQty(cart.find(item => item.product_id === product.id).quantity);
        }else{
            setQty(0);
        }

        if (qty !== 0){
            setToggle(true);
        }else{
            setToggle(false);
        }

    }, [cart, product, qty]);

    return (
        <div className="container single-bottom">
            <div>
                <div className="bottom-title">
                    {product && product.product_name}
                </div>
                <div className="bottom-cat">
                    #{product && product.barcode}
                </div>

                <div className={"description"} dangerouslySetInnerHTML={{__html: product.description}}></div>
            </div>
            <div className="bottom-actions">
                <div className="bottom-price">
                    <span>Price:</span>
                    <p>{
                        product && product.sell_cost_uzs && product.sell_cost_uzs.toLocaleString()
                    }</p>
                </div>
                <div>
                    {!toggle && (
                        <button onClick={() => setToggle(!toggle)} className="bottom-add-cart">
                            Add to cart
                        </button>
                    )}
                    {toggle && (
                        <div className="counter-items">
                            <button onClick={() => AddOrIncreaseProduct(product.id, product.image_url, product.product_name, product.sell_cost_uzs)}>
                            <PlusSignCircleIcon size={20} color="#333"/>
                            </button>
                            <input type="text" readOnly value={qty}/>
                            <button onClick={() => RemoveOrDecreaseProduct(product.id)}>
                                <RemoveCircleIcon size={20} color="#333"/>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProductBottom;