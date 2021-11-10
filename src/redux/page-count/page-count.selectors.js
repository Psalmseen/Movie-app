import { createSelector } from "reselect";

export const selectPageCount = (state) => state.pageCount;

export const selectPageCountValue = createSelector(
  selectPageCount,
  (pageCount) => pageCount.value
);

export const selectPageList = createSelector(
  selectPageCount,
  pageCount => pageCount.pageList
)