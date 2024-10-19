import "./style.css";
import CategoryItem from "../CategoryItem/CategoryItem";
import { useState, useEffect } from "react";
import apiService from "../../Services/apiService";

const CategoryContainer = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const data = await apiService.getCategories();
                setCategories(data.data.items || []);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        fetchCategories();
    }, []);

    return (
        <>
            {loading && <div className="loading">Loading...</div>}
            {error && <div className="error">{error}</div>}
            <div className="container categories">
                {categories.map((category) => (
                    <CategoryItem key={category.id} category={category} />
                ))}
            </div>
        </>
    )
}

export default CategoryContainer;