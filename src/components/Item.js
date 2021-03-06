import React from "react";
import Title from "./Title";
import Price from "./Price";
import Quantity from "./Quantity";

export const Item = (item) => {
  if (item.state === "active") {
    return null;
  }
  return <div className="item-list" key={item.listing_id}>
    <div className="item">
      <div className="item-image">
        <a href={item.url}>
          <img
            src={item.MainImage.url_570xN}
            alt={item.MainImage.listing_image_id}
          />
        </a>
      </div>
      <div className="item-details">
        <Title title={item.title} />
        <Price price={item.price} code={item.currency_code} />
        <Quantity quantity={item.quantity} />
      </div>
    </div>
  </div>
}