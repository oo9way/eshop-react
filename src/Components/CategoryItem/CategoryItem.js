import "./style.css";

const CategoryItem = ({category}) => {
    const {id, name, image} = category;
    return (
        <div>
            <a href={id} className="category-item">
                <img src={image} className="category-cover"  alt={name}/>
                <div className="category-title">
                    {name}
                </div>
            </a>
        </div>
    )
}

export default CategoryItem;