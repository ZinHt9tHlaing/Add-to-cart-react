import Header from "./Header";
import Body from "./Body";
import Backdrop from "../components/Backdrop";
import { useState } from "react";

const Main = () => {
  const [ShowCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <section>
      <Header showCartHandler={showCartHandler} />
      <Body />
      <Backdrop ShowCart={ShowCart} hideCartHandler={hideCartHandler} />
    </section>
  );
};

export default Main;
