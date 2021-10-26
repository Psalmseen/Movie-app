import { pageCountTypes } from "./page-count.types";

const INITIAL_STATE = {
  value: 1,
};
const pageCountReducer = (state = INITIAL_STATE, { type }) => {
  switch (type) {
    case pageCountTypes.INCREASE_PAGE_COUNT:
      return {
        ...state,
        value: state.value+=1,
      };
    case pageCountTypes.DECREASE_PAGE_COUNT:
      return {
        ...state,
        value: state.value-=1,
      };
    default:
      return {...state};
  }
};

export default pageCountReducer;
