import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Detail from './Pages/Detail';
import { useState} from "react";
import Cart from "./Pages/Cart";

function App() {
    const [cart, setCart] = useState([]);

    const AddOrIncreaseProduct = (product_id, image, name, sell_cost) => {

        const index = cart.findIndex(item => item.product_id === product_id);
        if (index === -1) {
            setCart([...cart, {product_id: product_id, quantity: 1, image: image, name: name, sell_cost: sell_cost}]);
        }
        else {
            let newCart = cart.map((item, i) =>
                i === index ? { ...item, quantity: item.quantity + 1 } : item
            )
            setCart(newCart);
            localStorage.setItem("cart", JSON.stringify(newCart));
        }
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
            setCart(cart.map((item, i) =>
                i === index ? { ...item, quantity: item.quantity - 1 } : item
            ));
        }
    };

    return (
    <Router>
      <Routes>
          <Route path="/" element={<Home RemoveOrDecreaseProduct={RemoveOrDecreaseProduct} AddOrIncreaseProduct={AddOrIncreaseProduct} cart={cart} />} />
          <Route path="/cart" element={<Cart cart={cart} addToCart={AddOrIncreaseProduct} removeFromCart={RemoveOrDecreaseProduct} />} />
        <Route path="/product/:product_id" element={<Detail RemoveOrDecreaseProduct={RemoveOrDecreaseProduct} AddOrIncreaseProduct={AddOrIncreaseProduct} cart={cart}  />} />
      </Routes>
    </Router>
  );
}

export default App;
