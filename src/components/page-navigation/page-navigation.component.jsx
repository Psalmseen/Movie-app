import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  decreamentPageCount,
  increamentPageCount,
} from "../../redux/page-count/page-count.actions";
import { selectPageCountValue } from "../../redux/page-count/page-count.selectors";

const PageNavigation = ({
  increamentPageCount,
  decreamentPageCount,
  value,
}) => (
  <div className="page-navigation">
    {value > 1 && (
      <div onClick={decreamentPageCount} className="arrows">
        prev
      </div>
    )}
    <p className="text">{value} </p>
    {value < 500 && (
      <div onClick={increamentPageCount} className="arrows">
        next
      </div>
    )}
  </div>
);
const mapStateToProps = createStructuredSelector({
  value: selectPageCountValue,
});

const mapDispatchToProps = (dispatch) => ({
  increamentPageCount: () => dispatch(increamentPageCount()),
  decreamentPageCount: () => dispatch(decreamentPageCount()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PageNavigation);
