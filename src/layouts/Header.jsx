import Nav from "../components/Nav";
import Summary from "../components/Summary";

const Header = ({showCartHandler}) => {
  return (
    <div>
      <Nav showCartHandler={showCartHandler} />
      <Summary />
    </div>
  );
};

export default Header;
