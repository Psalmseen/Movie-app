import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  decreasePageList,
  increasePageList,
} from "../../redux/page-count/page-count.actions";
import { selectPageList } from "../../redux/page-count/page-count.selectors";
import PageListItem from "./page-list-item.component";

const PageList = ({ pageList, decreasePageList, increasePageList }) => {
    console.log({pageList})
  return (
    <div className="page-list">
      {pageList[0] !==1 && <p onClick={decreasePageList} className="back"> &#8592;</p>}
      {pageList.map((el) => (
        <PageListItem num={el} />
      ))}
      <p onClick={increasePageList} className="front"> &#8594; </p>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  pageList: selectPageList,
});
const mapDispatchToProps = (dispatch) => ({
  increasePageList: () => dispatch(increasePageList()),
  decreasePageList: () => dispatch(decreasePageList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PageList);
