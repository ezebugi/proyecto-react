import { BiGame } from "react-icons/bi";
import "./CartWidget.css";
import { Link } from "react-router-dom";
const CartWidget = () => {
  return (
    <Link to="/cart">
      <div className="container-cart">
        <BiGame
          style={{
            fontSize: "2rem",
            color: "beige",
          }}
        />
        <div className="bubble-counter">
          <span>0</span>
        </div>
      </div>
    </Link>
  );
};

export default CartWidget;
