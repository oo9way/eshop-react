import { useParams } from 'react-router-dom';

import Header from '../Components/Header/Header';
import ProductCover from '../Components/ProductCover/ProductCover';
import ProductBottom from '../Components/ProductBottom/ProductBottom';
import {useEffect, useState} from "react";
import apiService from "../Services/apiService";

function Detail() {
    let {product_id} = useParams();

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const data = await apiService.getProductDetail(product_id);
                setProduct(data.data || []);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        fetchProduct();
    }, [product_id]);
    return (
        <div className="wrapper">
            <Header />
            {loading && <div className="loading">Loading...</div>}
            {error && <div className="error">{error}</div>}
            <ProductCover title={product.product_name} url={product.image_url}/>
            <ProductBottom product={product}/>
        </div>
    );
}

export default Detail;
