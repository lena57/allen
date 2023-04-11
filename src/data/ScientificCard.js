import React from 'react';
import '../ScientificCard.css';
import 'bootstrap/dist/css/bootstrap.css';

const ScientificCard = ({card}) => {

  return (
    <div className="col-4 mb-5">
      <div className="card h-100 shadow">
        <div>
          <img src={card["ImageURL"]} className="card-img-top" alt="..."/>
        </div>
        <div className="card-body flex-column justify-content-start ">
            <h5 className="card-title">Title: {card["Taxonomy"]["Name"]}</h5>
          <div className="list-group list-group-flush ">
            <div className="card-subtitle list-group-item " >Subtitle: <b>{card["PDB_ID"]}</b></div>
            <div className="card-description list-group-item "><b>Description:</b> {card["Description"]}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScientificCard;
