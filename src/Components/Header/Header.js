import "./style.css";
import { ShoppingCart01Icon } from "hugeicons-react";
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <div className="header">
            <Link to={"/"} className="brand-logo">
                Eleven Water
            </Link>

            <Link to={"/cart"} className="cart-icon">
                    <ShoppingCart01Icon size={32} color={"#fff"}/>
            </Link>

        </div>
    )
}

export default Header;