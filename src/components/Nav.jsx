const Nav = () => {
  return (
    <nav className=" flex justify-between items-center py-2">
      <h2 className=" text-2xl uppercase text-yellow-400 font-bold">Shopify</h2>
      <button className=" bg-yellow-400 text-gray-50 py-1 px-2 font-medium rounded-md hover:bg-yellow-500 active:scale-95 duration-200">
        Cart <span>(1)</span>
      </button>
    </nav>
  );
};

export default Nav;
