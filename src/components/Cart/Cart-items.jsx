import React from "react";

const CartItems = ({ fruit }) => {
  return (
    <div className="flex justify-between py-5 px-5 border-2 border-orange-500 rounded-md my-5 scroll-smooth">
      <div className=" space-y-3">
        <h1 className=" text-lg font-semibold">{fruit.name}</h1>
        <p className=" text-sm w-64 lg:w-96 pe-6 text-gray-500 line-clamp-2">
          {fruit.description}
        </p>
      </div>
      <div className="">
        <p className=" font-medium">$ {fruit.price}</p>
        <input
          type="number"
          className="text-sm text-gray-400 font-bold w-[64px] mt-3 mb-2 ps-2 py-2 block border border-yellow-400 rounded caret-yellow-400 focus-visible:outline-none focus:border-2 focus:border-yellow-400"
          min={1}
          max={5}
        />
      </div>
    </div>
  );
};

export default CartItems;
