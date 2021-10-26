import { pageCountTypes } from "./page-count.types";

export const increamentPageCount = () => ({
  type: pageCountTypes.INCREASE_PAGE_COUNT,
});

export const decreamentPageCount = () => ({
  type: pageCountTypes.DECREASE_PAGE_COUNT,
});
