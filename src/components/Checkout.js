import React from "react";
import "./Checkout.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";

const Checkout = () => {
  const [{ cart }] = useStateValue();
  return (
    <div className="checkout">
      <img
        className="checkout_advertise_img"
        src="\Images\ILB_WordCount_NotApproved._CB1613492740_._TTW_.jpg"
        alt=""
      />
      {cart.length == 0 ? (
        <div>
          <h2>Your Shopping Cart Is Empty</h2>
          <p>There is no items available in your shopping cart. </p>
          <p>
            Please Add one or more items in your cart to proceed to shopping.
          </p>
          <Link to="/">
            <button>Add Items</button>
          </Link>
        </div>
      ) : (
        <div>
          <h2 className="checkout_title">Your Shopping Basket</h2>
          {cart.map((item) => (
            <div>
              <CheckoutProduct
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                rating={item.rating}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Checkout;
