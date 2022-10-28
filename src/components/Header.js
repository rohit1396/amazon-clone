import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useStateValue } from "../StateProvider";
import { UserAuth } from "../AuthContext";
import { auth } from "../firebase";

const Header = () => {
  const [{ cart }] = useStateValue();
  const { user } = UserAuth();
  const { logOut } = UserAuth();

  const handleLogout = async (e) => {
    try {
      await logOut();
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <nav className="navbar">
      <Link to="/">
        <img
          className="navbar_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon_logo"
        />
      </Link>
      <div className="navbar_search">
        <input className="navbar_searchInput" type="text" />
        <SearchIcon className="navbar_searchIcon" />
      </div>
      <div className="navbar_nav">
        <Link to={!user && "/login"} className="navbar_link">
          <div className="navbar_option" onClick={handleLogout}>
            <span className="navbar_optionOne">Hello {user?.email}</span>
            <span className="navbar_optionTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/" className="navbar_link">
          <div className="navbar_option">
            <span className="navbar_optionOne">Return</span>
            <span className="navbar_optionTwo">& Orders</span>
          </div>
        </Link>
        <Link to="/" className="navbar_link">
          <div className="navbar_option">
            <span className="navbar_optionOne">Your</span>
            <span className="navbar_optionTwo">Prime</span>
          </div>
        </Link>
        <Link to="/checkout" className="navbar_link">
          <div className="navbar_optionBasket">
            <ShoppingBasketIcon />
            <span className="navbar_basketCount">{cart.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
