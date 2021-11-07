import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Card from "../../components/card/card.component";
import EmptyPage from "../empty-page/empty-page.component";
import { selectFavourites } from "../../redux/favourite/favourites.selector";

const FavouritePage = ({ favourites }) => (
  <div>
    {favourites.length > 0 ? (
      <div>
        <span> Double Click on card to remove them from Favourites </span>
        <div className="overview">
          {favourites.map((favourite) => (
            <Card key={favourite.id} result={favourite} />
          ))}
        </div>
      </div>
    ) : (
      <EmptyPage />
    )}
  </div>
);

const mapStateToProps = createStructuredSelector({
  favourites: selectFavourites,
});

export default connect(mapStateToProps)(FavouritePage);
