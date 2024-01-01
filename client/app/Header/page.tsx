import Navbottom from "./nav/Navbottom/page";
import Nav from "./nav/page";
import "./Header.css";

const Header = () => {
  return (
    <div className="header__container">
      <Nav />
      <Navbottom />
    </div>
  );
};

export default Header;
