import React, {useState, useEffect} from 'react';
import "./App.css";
import Cards from "./Cards";

const App = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  
  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((res) => setData(res));
  }, [])
  console.log(data);
  return(
    <>
      <input type="text" name="search" placeholder="Search..." onChange={(e) => setSearch(e.target.value)} value={search} />
      <div className="cards">
        {
          data.filter((value) => {
            if(search === ""){
              return value;
            }else{
              return value.name.toLowerCase().match(search);
            }
          })
          .map((item, idx) => (
            <Cards key={idx}
              name = {item.name}
              username = {item.username}
              phone = {item.phone}
              email = {item.email}
              company = {item.company.name}
            />
          ))
        }
      </div>
    </>
  )
}


export default App;