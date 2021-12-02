import React from "react";
import items from "./esty.json";
import Item from "./Item.js"

const Listing = () => {
  return items.map((item) => <Item item={item} />);
};
  
export default Listing;