import React from "react";
import "./Checkout.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

const Checkout = () => {
  const [{ cart }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_advertise_img"
          src="\Images\ILB_WordCount_NotApproved._CB1613492740_._TTW_.jpg"
          alt=""
        />
        <Link to="/">
          <button>Add Items</button>
        </Link>
        {cart.length == 0 ? (
          <div>
            <h2>Your Shopping Cart Is Empty</h2>
            <p>There is no items available in your shopping cart. </p>
            <p>
              Please Add one or more items in your cart to proceed to shopping.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout_title">Your Shopping Basket</h2>
            {cart.map((item) => (
              <CheckoutProduct
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {cart?.length > 0 && (
        <div className="checkout_right">
          <Subtotal />
        </div>
      )}
    </div>
  );
};

export default Checkout;
