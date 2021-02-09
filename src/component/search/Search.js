import React from 'react'
import {GrSearch} from 'react-icons/gr'
import "./search.scss"

const Search = ({placeholder, search, setSeacrch}) => {
        return (
            <form className="api-search" 
            > 
                <div className="icon">
                <GrSearch/>
                </div>
                <input type="text" value={search} onChange={(e)=>setSeacrch(e.target.value)} placeholder={placeholder}/>
            </form>
        )
}
export default Search;
