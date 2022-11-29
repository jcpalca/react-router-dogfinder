import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BASE_URL = "http://localhost:5001";

function DogDetails() {
  const [dog, setDog] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`${BASE_URL}/dogs`);
        console.log(res.data);
        if (res.data.name === name) {
          setDog(res.data);
        }
      }
      catch(err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="DogDetails">
      <p>Name: {name}</p>
      <p>Age: {dog.age}</p>
      <img src={require(`../public/${dog.src}.jpg`)} alt={dog.src}/>
      <ul>
        {(dog.facts).map((fact, i) => <li key={i}>{fact}</li>)}
      </ul>
      <hr style={{height: 10, backgroundColor: "grey"}}/>
    </div>
  )
}

export default DogDetails;
