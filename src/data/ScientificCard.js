import React from "react";

const ScientificCard = ({ card }) => {
  return (
    <div className="col-md-4 col-sm-6 mb-4">
      <div className="card h-100 shadow">
        <div>
          <img src={card["ImageURL"]} className="card-img-top" alt="..." />
        </div>
        <div className="card-body flex-column justify-content-start ">
          <h5 className="card-title">Title: {card["Taxonomy"]["Name"]}</h5>
          <div className="list-group list-group-flush ">
            <div className="card-text list-group-item ">
              Subtitle: <b>{card["PDB_ID"]}</b>
            </div>
            <div className="card-text list-group-item ">
              <b>Description:</b> {card["Description"]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScientificCard;
