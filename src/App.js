import { useState} from 'react'
import {Constdata} from './utils/constData'
import Search from './component/search/Search'
import ApiItems from "./component/apiItems/ApiItems"
import "./style.scss"

function App() {
const [search, setSeacrch] = useState('')
const [apis, setApis]=useState(Constdata)

const toggleBookmark=(id)=> {
 setApis(
  apis.map((card) => {
    if(card.id===id){
      card.bookmark=!card.bookmark;
    }
    return card;
  }
  )
 )
}


  return (
    <div className="App">
     <h3>A collective list of free APIs for use in <br/> software and web development.</h3>

     <Search search={search} setSeacrch={setSeacrch} placeholder="Find development, games, images APIs"/>

     <div className="container">
      <h4>Featured APIs of this week</h4>
      <div className="api-list">

      {Constdata
      .filter((api) =>(
        api.name.toLowerCase().includes(search.toLowerCase())
      ))
      .map((card, id) => (
         <ApiItems toggleBookmark={toggleBookmark} key={id} card={card}/>
      ))}


      </div>
     </div>

     <div className="container">
      <h4>BookMarks</h4>
      <div className="api-list">

      {Constdata
      .filter(api => api.bookmark===true)
      .map((card, id) => (
         <ApiItems toggleBookmark={toggleBookmark} key={id} card={card}/>
      ))}
      
      </div>
     </div>
    </div>
  );
}

export default App;
