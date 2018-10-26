import React from "react";
import './SearchBox.css';
const SearchBox = ({searchField,searchChange})=>{
    return  (
    <div className="search-box">
        <input className="search-input" type="text" placeholder="Search"
            onChange={searchChange} />
    </div>
    );
}

export default SearchBox