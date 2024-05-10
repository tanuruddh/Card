import Card from "./components/Card";
import './App.css'
import { useEffect, useState } from "react"
import axios from "axios";
import FirstCard from "./components/FirstCard";

function App() {
  const [data, setData] = useState([]);

  useEffect(function () {
    async function fetchData() {
      const response = await axios.get("https://randomuser.me/api/?page=1&results=50&seed=abc")
      setData(response.data.results);
      console.log(response.data.results)
    }
    fetchData();
  }, []);
  return (
    <div className="main-div">
      <FirstCard data={data[0]} />
      <Card data={data} />
    </div>
  );
}

export default App;
