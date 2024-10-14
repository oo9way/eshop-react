import "./style.css";
import {Search01Icon} from "hugeicons-react";
const SearchBar = () => {
    return (
        <div className="search-bar">
            <Search01Icon className={"search-icon"} size={18} color={"#9CA0AF"}/>
            <input type="text" placeholder="Search for products" />
        </div>
    )
}


export default SearchBar;