import "./style.css";
import { ShoppingCart01Icon } from "hugeicons-react";


const Header = () => {
    return (
        <div className="header">
            <div className="brand-logo">
                Eleven Water
            </div>

            <div className="cart-icon">
                    <ShoppingCart01Icon size={32} color={"#fff"}/>
            </div>

        </div>
    )
}

export default Header;