import { useContext } from "react";
import CartItems from "./Cart-items";
import { ItemContext } from "../../store/ItemContext";

// const fruits = [
//   {
//     id: 1,
//     name: "Apple",
//     price: 40.0,
//     description: "A sweet, crisp fruit that is great for snacking.",
//     quantity: 2,
//   },
//   {
//     id: 2,
//     name: "Banana",
//     price: 15.0,
//     description:
//       "A soft, creamy fruit that is perfect for smoothies and baking.",
//     quantity: 1,
//   },
//   {
//     id: 3,
//     name: "Mango",
//     price: 100.0,
//     description:
//       "A small, red fruit with a tart flavor, often used in desserts.",
//     quantity: 2,
//   },
// ];

const Cart = ({ hideCartHandler }) => {
  const { items, totalAMount } = useContext(ItemContext);

  const totalPrice = `${totalAMount.toFixed(2)}`;

  return (
    <section className="cart-box bg-white py-5 px-[80px] rounded-lg">
      <h2 className=" text-2xl font-bold mb-4 text-yellow-400">
        Your cart items are here
      </h2>
      {items.length < 1 ? (
        <h1 className="text-lg text-red-400 font-bold text-center my-10">
          No items in your cart !!
        </h1>
      ) : (
        <section className="overflow-ctr">
          {items.map((item) => (
            <div key={item.id}>
              <CartItems item={item} />
            </div>
          ))}
        </section>
      )}

      <hr className=" border border-gray-300 mb-3" />
      <div className="total">
        <h3 className=" font-semibold">Total Price</h3>
        <p>$ {totalPrice}</p>
      </div>
      <div className="btns">
        <button
          onClick={hideCartHandler}
          className=" font-semibold outline-yellow-400 text-yellow-500 text-sm border border-solid border-yellow-400 py-1 px-2 rounded-lg hover:bg-yellow-500 hover:text-gray-50 active:scale-95 duration-200"
        >
          Close
        </button>
        {items.length < 1 ? (
          <></>
        ) : (
          <button
            onClick={() => {
              confirm("Are you sure to order !!");
            }}
            className="bg-yellow-500 text-gray-50 text-sm border border-solid border-yellow-400 py-1 px-2 rounded-lg hover:bg-yellow-400 active:scale-95 duration-200"
          >
            Order
          </button>
        )}
      </div>
    </section>
  );
};

export default Cart;
