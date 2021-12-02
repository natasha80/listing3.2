import React from "react";
import PropTypes from "prop-types";

const Quantity = ({ quantity }) => {
    const level = quantity <= 10 ? 'level-low' : quantity <= 20 ? 'level-medium' : 'level-high';
        return <p className={`item-quantity ${level}`}>{quantity} left</p>;
};

Quantity.propTypes = {
  quantity: PropTypes.number
}

Quantity.defaultProps = {
  quantity: 0
}

export default Quantity;