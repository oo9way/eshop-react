import "./style.css";

const ProductCover = ({title, url}) => {
    
    return (
        <div className="container single">
            <div className="single-title">
                Nike men shoes
            </div>
            <div className="single-cover">
                <img src={url} />
            </div>
        </div>
    )
}

export default ProductCover;