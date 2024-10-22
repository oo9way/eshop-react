import Header from '../Components/Header/Header';
import ItemsContainer from "../Components/ItemsContainer/ItemsContainer";
import CategoryContainer from '../Components/CategoryContainer/CategoryContainer';
import {useState} from "react";

function Home() {
    const [cart, setCart] = useState([]);

    const AddOrIncreaseProduct = (product_id) => {
        const index = cart.findIndex(item => item.product_id === product_id);
        if (index === -1) {
            setCart([...cart, {product_id: product_id, quantity: 1}]);
        }
        else {
            setCart([...cart.slice(0, index), {...cart[index], quantity: cart[index].quantity + 1}]);
        }
        console.log(cart);
    };

    const RemoveOrDecreaseProduct = (product_id) => {
        const index = cart.findIndex(item => item.product_id === product_id);
        if (index === -1) {
            return;
        }
        if (cart[index].quantity === 1) {
            setCart(cart.filter(item => item.product_id !== product_id));
        }
        else {
            setCart([...cart.slice(0, index), {...cart[index], quantity: cart[index].quantity - 1}]);
        }
        console.log(cart);
    };

    return (
    <div className="wrapper">
        <Header />
        {/*<SearchBar />*/}
        <CategoryContainer />
        <ItemsContainer addToCart={AddOrIncreaseProduct} removeFromCart={RemoveOrDecreaseProduct} cart={cart}/>
    </div>
);
}

export default Home;
