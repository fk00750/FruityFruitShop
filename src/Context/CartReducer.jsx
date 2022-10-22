export const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c._id !== action.payload._id),
      };
    case "CHANGE_CART_QTY":
      return {
        ...state,
        cart: state.cart.filter((c) => {
          return c._id === action.payload._id ? (c.qty = action.payload.qty) : c.qty;
        }),
      };
    default:
      state;
  }
};

export const fruitReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY_PRICE":
      return { ...state, sort: action.payload };
    case "SORT_BY_RATING":
      return { ...state, byRating: action.payload };
    case "VITAMIN_C":
      return { ...state, byVitaminC: !state.byVitaminC };
    case "VITAMIN_B6":
      return { ...state, byVitaminB6: !state.byVitaminB6 };
    case "POTASSIUM":
      return { ...state, byPotassium: !state.byPotassium };
    case "CLEAR_FILTERS":
      return {
        byVitaminC: false,
        byVitaminB6: false,
        byPotassium: false,
        byRating: 0,
      };
    default:
      return state;
  }
};
