import "./style.css";
import { ShoppingBasketAdd01Icon, PlusSignCircleIcon, RemoveCircleIcon } from "hugeicons-react";
import { useState } from "react";

const Item = () => {
    const [toggle, setToggle] = useState(false)
    const updateToggle = () => {
        setToggle(!toggle)
    }
    return (
        <div className="item-container">
            <div className="item">
                <div className="item-image">
                    <img
                        src="https://off.com.ph/_next/image?url=https%3A%2F%2Fedge.sitecorecloud.io%2Fscjohnsonana080-dart-production-40df%2Fmedia%2Fproject%2Fdart%2Foff%2Fphilippines%2Fhomepage%2Fcategory-images%2Foff_ph_4x3_720x540_category_card-overtime.png%3Fh%3D540%26iar%3D0%26w%3D720&w=3840&q=75"
                        alt=""/>
                </div>
                <div className="item-info">
                    <div className="item-title">
                        Eleven Water
                    </div>
                    <div className="item-price">
                        $19.99
                    </div>
                </div>
            </div>
            <button className="item-add-cart-btn" onClick={updateToggle}>
                <ShoppingBasketAdd01Icon className={"add-icon"} size={18} color={"#9CA0AF"}/>
                <p>
                    Add to cart
                </p>
            </button>
            {
                toggle && (
                    <div className="item-actions">
                        <button className="">
                            <PlusSignCircleIcon size={20} color={"#9CA0AF"}/>
                        </button>
                        <input type="text"/>
                        <button className="">
                            <RemoveCircleIcon size={20} color={"#9CA0AF"}/>
                        </button>
                    </div>
                )
            }
        </div>
    )
}

export default Item;