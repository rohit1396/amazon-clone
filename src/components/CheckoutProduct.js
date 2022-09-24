import React from "react";
import "./CheckoutProduct.css";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import StarIcon from "@mui/icons-material/Star";
import { useStateValue } from "../StateProvider";

const CheckoutProduct = ({ id, image, title, price, rating }) => {
  const [{}, dispatch] = useStateValue();
  const removeItem = () => {
    dispatch({
      type: "DELETE_ITEM",
      id: id,
    });
  };
  return (
    <div>
      <img className="checkoutProduct_image" src={image} alt="" />
      <div className="checkoutProduct_info">
        <h2 className="checkoutProduct_title">{title}</h2>
        <p className="checkoutProduct_price">
          <small>
            <CurrencyRupeeIcon />
          </small>
          <strong>{price}</strong>
        </p>
        <p className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>
                <StarIcon />
              </p>
            ))}
        </p>
        <button onClick={removeItem}>Remove From Cart</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
