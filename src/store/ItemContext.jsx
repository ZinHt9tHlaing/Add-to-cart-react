import React, { useReducer } from "react";
import { createContext } from "react";

const initialState = {
  items: [],
  totalAMount: 0,
};

const itemReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedTotalAmount =
      state.totalAMount + action.item.price * action.item.amount;

    const exitItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const exitItem = state.items[exitItemIndex];

    let updatedItems;
    if (exitItem) {
      const updatedItem = {
        ...exitItem,
        amount: exitItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[exitItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAMount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    const exitItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const exitItem = state.items[exitItemIndex];
    const updatedTotalAmount = state.totalAMount - exitItem.price;

    let updatedItems;
    if (exitItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...exitItem, amount: exitItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems = [exitItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAMount: updatedTotalAmount,
    };
  }
  return initialState;
};

export const ItemContext = createContext({
  items: [],
  totalAMount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

const ItemContextProvider = ({ children }) => {
  const [itemState, dispatchItem] = useReducer(itemReducer, initialState);

  const addItemHandler = (item) => {
    dispatchItem({ type: "ADD_ITEM", item });
  };

  const removeItemHandler = (id) => {
    dispatchItem({ type: "REMOVE_ITEM", id });
  };

  const itemCtx = {
    items: itemState.items,
    totalAMount: itemState.totalAMount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <ItemContext.Provider value={itemCtx}>{children}</ItemContext.Provider>
  );
};

export default ItemContextProvider;
