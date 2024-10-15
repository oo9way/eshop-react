import "./style.css";
import CategoryItem from "../CategoryItem/CategoryItem";

const CategoryContainer = () => {
    return (
        <div className="container categories">
               <CategoryItem />
               <CategoryItem />
               <CategoryItem />
               <CategoryItem />
               <CategoryItem />
               <CategoryItem />
               <CategoryItem />
           </div>
    )
}

export default CategoryContainer;