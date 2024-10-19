import "./style.css";
import {Link} from "react-router-dom";
import {Home11Icon} from "hugeicons-react";

const ProductCover = ({title, url}) => {
    
    return (
        <div className="container single">
            <Link to={"/"} className="single-title">
                <Home11Icon size={28} color={"#9CA0AF"}/>
                Bosh sahifa
            </Link>
            <div className="single-cover">
                <img alt={title} src={url} />
            </div>
        </div>
    )
}

export default ProductCover;