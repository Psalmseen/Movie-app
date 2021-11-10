import { pageCountTypes } from "./page-count.types";

export const increamentPageCount = () => ({
  type: pageCountTypes.INCREASE_PAGE_COUNT,
});

export const decreamentPageCount = () => ({
  type: pageCountTypes.DECREASE_PAGE_COUNT,
});

export const gotoPageCount = (num) => ({
  type: pageCountTypes.GOTO_PAGE_COUNT,
  payload: num,
});

export const increasePageList = () => ({
  type: pageCountTypes.INCREASE_PAGE_LIST,
});
export const decreasePageList = () => ({
  type: pageCountTypes.DECREASE_PAGE_LIST,
});
