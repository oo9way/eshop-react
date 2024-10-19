import "./style.css";
import Item from "../Item/Item";
import { useState, useEffect } from "react";
import apiService from "../../Services/apiService";

const ItemsContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await apiService.getProducts();
                setProducts(data.data.items || []);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);
    return (
        <>
            {loading && <div className="loading">Loading...</div>}
            {error && <div className="error">{error}</div>}
            <div className="container">
                <div className="main-title">
                    Products
                </div>
                <div className="sub-title">
                    List of all products we have
                </div>
                <div className="items-container">
                    {products.map((product)=> (
                        <Item key={product.id} product={product}/>
                    ))}
                </div>
            </div>

        </>
    )
}

export default ItemsContainer;