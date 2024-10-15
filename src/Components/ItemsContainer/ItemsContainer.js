import "./style.css";
import Item from "../Item/Item";

const ItemsContainer = () => {
    return (
        <div className="container">
            <div className="main-title">
                Products
            </div>
            <div className="sub-title">
                List of all products we have
            </div>
           <div className="items-container">
               <Item />
               <Item />
               <Item />
               <Item />
               <Item />
               <Item />
               <Item />
           </div>
        </div>
    )
}

export default ItemsContainer;