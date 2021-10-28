import React, { useEffect } from "react";
import Card from "../card/card.component";
import PageNavigation from "../page-navigation/page-navigation.component";

const Overview = ({ results }) => {
  useEffect(() => {
    console.log("fired from overview");
  }, []);

  return (
    <div className="overview">
      {results.map((result) => (
        <Card key={result.id} {...result} />
      ))}
      <PageNavigation />
    </div>
  );
};

export default Overview;

/******************************************************************************
 *
 *
 *              LINK WITH FIRESTORE TO CREATE LOGIN
 *
 *
 *              CREATE A FAVOURITE PAGE  COMPONENT
 *
 * *************************************************************************** */
