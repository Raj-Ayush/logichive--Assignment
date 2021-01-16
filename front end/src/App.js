//import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import data from './component/data';
//import ListItem from './component/ListItem';

function App() {
  const [items, setItems] = useState([])
  useEffect(()=>{
    fetch("http://localhost:8000/service")
    .then(resp => resp.json())
    .then(r => {setItems(r)
    console.log(r)});
  },[])
  return (
    <div className="App">
      <div><header>OUR SERVICES</header></div>
      <div className="list">
        {items.map((item)=> 
        <div className="card">
          <div className="card-img">
            <img src= {item.image} alt ="image"></img>
          </div>
          <div className="content">
            <h1>{item.content}</h1>
          </div>
          <div className="subcontent">
            {item.subcontent}
          </div>
        </div>)
       }
      </div>
    </div>
  );
}

export default App;
