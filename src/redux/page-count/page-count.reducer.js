import { pageCountTypes } from "./page-count.types";

const INITIAL_STATE = {
  value: 1,
  pageList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
};
const pageCountReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case pageCountTypes.INCREASE_PAGE_COUNT:
      return {
        ...state,
        value: (state.value += 1),
      };
    case pageCountTypes.DECREASE_PAGE_COUNT:
      return {
        ...state,
        value: (state.value -= 1),
      };
    case pageCountTypes.GOTO_PAGE_COUNT:
      return {
        ...state,
        value: payload,
      };
    case pageCountTypes.INCREASE_PAGE_LIST:
      return {
        ...state,
        pageList: state.pageList.map((el) => el + 10),
      };
    case pageCountTypes.DECREASE_PAGE_LIST:
      return {
        ...state,
        pageList: state.pageList.map((el) => el - 10),
      };
    default:
      return { ...state };
  }
};

export default pageCountReducer;
