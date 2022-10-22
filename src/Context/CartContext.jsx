import { createContext, useContext, useReducer } from "react";
import { CartReducer, fruitReducer } from "./CartReducer";

const Cart = createContext();

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, {
    cart: [],
  });

  const [fruitState, fruitDispatch] = useReducer(fruitReducer, {
    byVitaminC: false,
    byVitaminB6: false,
    byPotassium: false,
    byRating: 0,
  });

  return (
    <Cart.Provider value={{ state, dispatch, fruitState, fruitDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
