/** @format */

import { ADD_TO_CART } from "../Constant";

const initialState = {
  cardData: [],
};

export const cardItem = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cardData: action.data,
      };
      break;
    default:
      return state;
  }
};
