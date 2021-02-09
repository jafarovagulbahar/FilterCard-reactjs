import React  from 'react'
import {BsBookmark, BsBookmarkFill} from 'react-icons/bs'
import {IoIosArrowForward} from 'react-icons/io'
import "./apiItem.scss"

const ApiItems =({card, toggleBookmark})=>{
        return (
        <div className="api-items" >
          <div className="item-icons">
             <img src={card.icon} alt="icon" />
          </div>
          <div className="item-detalis">
            <h4>{card.name}</h4>
            <div className="item-catagory">{card.category}</div>
            <div className="item-description">{card.description}</div>
          </div>

          <div className="item-hover">
           <button onClick={()=>toggleBookmark(card.id)}>
            {card.bookmark ?  <BsBookmarkFill/> :  <BsBookmark/>}
             Bookmark
           </button>
           <a href="#/">
             API Docs
             <IoIosArrowForward/>
           </a>
          </div>
        </div>
        )
}
export default ApiItems;