import React,{useEffect, useState} from 'react'
import Data from './emoji.json';
import "./App.css";
const EmojiSearch = () => {
  const [search,setSearch] = useState("");
  const [data,setData] = useState([]);
  useEffect(()=>{
      const newData = Data.filter(emoji => emoji.title.toLowerCase().includes(search.toLowerCase()));
      setData(newData);
  },[search])
  return (
    <div>
      <center>
        <h1>Search Any Emoji</h1>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
        </center><br/>
        {data.map(emoji =>
          <div key={emoji.title}>
          <div className="card">
            <div className="card-body"><center>
            {emoji.symbol} {emoji.title}</center>
            </div>
          </div>
        </div>
        )}
    </div>
  )
}
export default EmojiSearch;