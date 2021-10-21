import React from "react";import results from "../../result";
import Card from "../card/card.component";
import getCollections from "../../utils/collection.utils";


const Overview = () => {

  return (
    <div className="overview">
      {results.map((result) => (
        <Card key="result.id" {...result} />
      ))}
    </div>
  );
};

export default Overview;

/******************************************************************************
 * 
 *              CREATE THE REACT REDUX STORE  TO DISPATCH THE DATA FROM FETCH
 * 
 *              WORK ON THE COLLECTION UTILS COMPONENT
 * 
 * *************************************************************************** */