import Cart from "./Cart/Cart";

const Backdrop = ({ ShowCart, hideCartHandler }) => {
  return (
    <>
      {ShowCart && (
        <>
          <section className="backdrop" onClick={hideCartHandler} />
          <Cart hideCartHandler={hideCartHandler} />
        </>
      )}
    </>
  );
};

export default Backdrop;
