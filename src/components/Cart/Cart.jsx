import CartItems from "./Cart-items";

const fruits = [
  {
    id: 1,
    name: "Apple",
    price: 40.0,
    description: "A sweet, crisp fruit that is great for snacking.",
    quantity: 2,
  },
  {
    id: 2,
    name: "Banana",
    price: 15.0,
    description:
      "A soft, creamy fruit that is perfect for smoothies and baking.",
    quantity: 1,
  },
  {
    id: 3,
    name: "Mango",
    price: 100.0,
    description:
      "A small, red fruit with a tart flavor, often used in desserts.",
    quantity: 2,
  },
];

const Cart = () => {
  return (
    <section className=" bg-white py-5 px-[60px] rounded-lg">
      <h2 className=" text-2xl font-bold text-yellow-400">Carts</h2>
      {fruits.map((fruit) => (
        <div key={fruit.id}>
          <CartItems fruit={fruit} />
        </div>
      ))}
      <hr className=" border border-gray-300 mb-3" />
      <div className="total">
        <h3 className="text-lg font-bold">Total Price</h3>
        <p>$ 3000.00</p>
      </div>
      <div className="btns">
        <button className=" font-semibold outline-yellow-400 text-yellow-500 text-sm border-2 border-solid border-yellow-400 py-1 px-2 rounded-lg hover:bg-yellow-500 hover:text-gray-50 active:scale-95 duration-200">
          Close
        </button>
        <button className="bg-yellow-500 text-gray-50 text-sm border-2 border-solid border-yellow-400 py-1 px-2 rounded-lg hover:bg-yellow-400 active:scale-95 duration-200">
          Order
        </button>
      </div>
    </section>
  );
};

export default Cart;
