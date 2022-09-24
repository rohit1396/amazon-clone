import React from "react";
import "./Product.css";
import StarIcon from "@mui/icons-material/Star";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";

const Product = ({ id, title, image, price, rating }) => {
  const [{}, dispatch] = useStateValue();
  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product_content">
        <p className="product_title">{title}</p>
        <p className="product_price">
          <small>
            <CurrencyRupeeIcon className="product_priceIcon" />
          </small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>
                <StarIcon className="starIcon" />
              </p>
            ))}
        </div>
      </div>
      <img className="product_img" src={image} alt="" />
      <Link to="/checkout">
        <button onClick={addToCart}>Add To Cart</button>
      </Link>
    </div>
  );
};

export default Product;
