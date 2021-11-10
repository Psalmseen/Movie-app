import React from "react";
import { connect } from "react-redux";
import { gotoPageCount } from "../../redux/page-count/page-count.actions";

const PageListItem = ({ gotoPageCount, num }) => {
  return (
    <p
      className={`page-list-item ${num % 2 === 0 ? "even" : "odd"}`}
      onClick={() => gotoPageCount(num)}
    >
      {num}
    </p>
  );
};

const mapDispatchToProps = (dispatch) => ({
  gotoPageCount: (num) => dispatch(gotoPageCount(num)),
});

export default connect(null, mapDispatchToProps)(PageListItem);
