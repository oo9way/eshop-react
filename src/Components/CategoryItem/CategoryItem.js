import { Fragment } from "react";
import "./style.css";

const CategoryItem = () => {
    const pic = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Sport_balls.svg/400px-Sport_balls.svg.png"
    
    return (
        <div>
            <a href="#" className="category-item">
                <img src={pic} className="category-cover" />
                <div className="category-title">
                    Sports asdkmaslk dmaslkd mlkas
                </div>
            </a>
        </div>
    )
}

export default CategoryItem;