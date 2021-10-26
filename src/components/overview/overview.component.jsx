import React from "react";
import Card from "../card/card.component";
import PageNavigation from "../page-navigation/page-navigation.component";

const Overview = ({ results }) => {
  return (
    <div className="overview">
      {results.map((result) => (
        <Card key={result.id} {...result} />
        ))}
        <PageNavigation/>
    </div>
  );
};

export default Overview;

/******************************************************************************
 *
 *
 *
 *
 *              CREATE A FAVOURITE PAGE  COMPONENT
 *
 *
 *              MAKE THE OVERVIEW COMPONENT HAVE PAGES
 *
 * *************************************************************************** */
