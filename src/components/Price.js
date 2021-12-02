import React from "react";
import PropTypes from "prop-types"

const Price = ({ price, code }) => {
    if (code === "USD") {
      return <p className="item-price">${price}</p>;
    } else if (code === "EUR") {
      return <p className="item-price">€{price}</p>;
    
};

Price.propTypes = {
  price: PropTypes.string,
  code: PropTypes.string
}

Price.defaultProps = {
  price: '0.0',
  code: 'USD'
}

export default Price; 