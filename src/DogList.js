import axios from "axios";
import { useEffect, useState } from "react";

const BASE_URL = "http://localhost:5001";

function DogList() {
  const [dogs, setDogs] = useState([]);

  console.log("DogList", dogs);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`${BASE_URL}/dogs`);
        console.log(res.data);
        setDogs(res.data);
      }
      catch(err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  // async function getDogs() {
  //   const res = await axios.get(`${BASE_URL}/dogs`)
  //   console.log(res.data);
  //   console.log(Object.entries(res.data).map(dog => dog));
  //   return (res.data.map(dog => dog))
  // }

  return (
    <div className="DogList">
      <h1>Here are our dogs!</h1>
      {dogs.map(dog => (
        <div key={dog.name} className="dogs">
          <p>Name: {dog.name}</p>
          <p>Age: {dog.age}</p>
          <img src={require(`../public/${dog.src}.jpg`)} alt={dog.src}/>
          <ul>
            {(dog.facts).map((fact, i) => <li key={i}>{fact}</li>)}
          </ul>
          <hr style={{height: 10, backgroundColor: "grey"}}/>
        </div>
      ))}
    </div>
  );
}

export default DogList;
