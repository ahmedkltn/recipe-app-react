import "./SearchBar.css";
import {FaSearch} from "react-icons/fa";
export const SearchBar = () => {

    return(
        <div className="search-wrapper">
            <FaSearch id="search-icon" />
            <input className="search-input"placeholder="Find a recipe..." type="text" />
        </div>

    );
}