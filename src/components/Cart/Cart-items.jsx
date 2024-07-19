import React, { useContext } from "react";
import { ItemContext } from "../../store/ItemContext";

const CartItems = ({ item }) => {
  const { addItem, removeItem } = useContext(ItemContext);

  const addAmountHandler = () => {
    addItem({ ...item, amount: 1 });
  };

  const removeAmountHandler = () => {
    removeItem(item.id);
  };

  return (
    <div className="flex justify-between py-5 px-5 border-2 border-orange-500 rounded-md my-5 scroll-smooth">
      <div className=" space-y-3 w-64 lg:w-96">
        <h1 className=" text-lg font-semibold">{item.name}</h1>
        {/* <p className=" text-sm  pe-6 text-gray-500 line-clamp-2">
          {item.description}
        </p> */}
        <p className=" font-medium">$ {item.price}</p>
      </div>
      <div className="">
        <p className=" px-[6px] py-1 bg-yellow-400 text-center font-medium text-white rounded-lg">
          x<span className=" font-semibold">{item.amount}</span>
        </p>
        <div className=" flex">
          <button className="quantity-btn mr-2" onClick={removeAmountHandler}>
            -
          </button>
          <button className="quantity-btn" onClick={addAmountHandler}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
