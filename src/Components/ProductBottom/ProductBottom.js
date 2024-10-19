import "./style.css";

const ProductBottom = ({product}) => {
    
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
                <button className="bottom-add-cart">
                    Add to cart
                </button>
            </div>
        </div>
    )
}

export default ProductBottom;