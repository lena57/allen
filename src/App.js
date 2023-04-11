import './App.css';
import {useEffect, useState} from "react";
import ScientificCard from "./data/ScientificCard";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';


function App() {

  const [data, setData] = useState([]);
  console.log('data', data)

  const getCards = () => {
    axios.get('https://pubchem.ncbi.nlm.nih.gov/rest/pug_view/structure/compound/2244/JSON')
      .then((res) => setData(res.data["Structure"]["Structures"]))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getCards()
  }, [])

  const refreshScientificData = () => {
    axios.get('https://pubchem.ncbi.nlm.nih.gov/rest/pug/taxonomy/taxid/9600,9602,10121,10122,9601/summary/JSON')
      .then(res => setData(res.data["TaxonomySummaries"]["TaxonomySummary"]))
      .catch(error => console.error(error));
  }
  return (
    <div className="container">
      <div>
        <h1>Scientific Data!</h1>
      </div>
      <button type="button" className="btn btn-success" onClick={refreshScientificData}>Refresh</button>
      <div className="container text-start">
        <div className="row">

          {data.map((card) => <ScientificCard key={card.id} card={card}/>)}
        </div>
      </div>
    </div>
  );
}

export default App;
