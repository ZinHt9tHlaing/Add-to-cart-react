import { useContext, useState } from "react";
import { ItemContext } from "../store/ItemContext";

const Card = ({ fruit }) => {
  const { id, name, description, price } = fruit;

  const { addItem } = useContext(ItemContext);
  const [currentAmount, setCurrentAmount] = useState(1);
  const currentAmountNumber = +currentAmount; // string to number change

  const addToCartHandler = () => {
    if (currentAmount < 1 && currentAmount < 5) {
      alert("Please enter an invalid amount !!!")
      return;
    }
    addItem({
      id,
      name,
      price,
      amount: currentAmountNumber,
    });
  };

  return (
    <div className="flex justify-between py-5 px-2 border-2 border-orange-500 rounded-md my-5">
      <div className=" space-y-3">
        <h1 className=" text-xl font-medium">{name}</h1>
        <p className=" line-clamp-1 text-sm w-80 md:w-72 lg:w-96 xl:w-full">
          {description}
        </p>
        <p className=" font-bold">$ {price}</p>
      </div>
      <div className="">
        <input
          type="number"
          className="text-sm text-gray-400 font-bold w-[64px] mt-3 mb-2 ps-2 py-2 block border border-yellow-400 rounded caret-yellow-400 focus-visible:outline-none focus:border-2 focus:border-yellow-400"
          min={1}
          max={5}
          value={currentAmount}
          onChange={(e) => {
            setCurrentAmount(e.target.value);
          }}
        />
        <button
          onClick={addToCartHandler}
          className="bg-yellow-500 text-gray-50 text-sm border border-solid border-yellow-400 py-1 px-2 rounded-lg hover:bg-yellow-400 active:scale-95 duration-200"
        >
          + Add
        </button>
      </div>
    </div>
  );
};

export default Card;
