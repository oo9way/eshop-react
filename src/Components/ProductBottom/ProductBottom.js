import "./style.css";

const ProductBottom = () => {
    
    return (
        <div className="container single-bottom">
            <div>
                <div className="bottom-title">
                    Nike Air Max 270
                </div>
                <div className="bottom-cat">
                    men shoes
                </div>

                <div className="description">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                </div>
            </div>
            <div className="bottom-actions">
                <div className="bottom-price">
                    <span>Price:</span>
                    <p>$290.00</p>
                </div>
                <button className="bottom-add-cart">
                    Add to cart
                </button>
            </div>
        </div>
    )
}

export default ProductBottom;