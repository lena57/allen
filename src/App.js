import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ScientificCard from "./data/ScientificCard";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [data, setData] = useState([]);

  const getRandomCards = () => {
    axios
      .get(
        "https://pubchem.ncbi.nlm.nih.gov/rest/pug_view/structure/compound/2244/JSON"
      )
      .then((res) => {
        const randomNum = Math.floor(Math.random() * 3);
        const cards = res.data["Structure"]["Structures"];
        setData(cards.slice(randomNum, randomNum + 5));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getRandomCards();
  }, []);

  const handleRefresh = () => {
    getRandomCards();
  };

  return (
    <div className="container text-center">
      <h1>Scientific Data</h1>
      <div className="container text-start">
        <button
          type="button"
          className="btn btn-primary mb-3"
          onClick={handleRefresh}
        >
          Refresh
        </button>
        <div className="row">
          {data.map((card) => (
            <ScientificCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
