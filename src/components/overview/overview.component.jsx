import React from "react";
import Card from "../card/card.component";
import PageList from "../page-list/page-list.component";
import PageNavigation from "../page-navigation/page-navigation.component";

const Overview = ({ results }) => {
  return (
    <div>
     <span> Double Click on card to add them to Favourites </span>
    <div className="overview">
      {results.map((result) => (
        <Card key={result.id} result={result} />
      ))}
        <PageNavigation />
        <PageList/>
    </div>
    </div>
  );
};

export default Overview;

/******************************************************************************
 *
 *
 *              Fix the firebase issue
 *
 *
 *              CREATE A FAVOURITE PAGE  COMPONENT
 *
 * *************************************************************************** */
