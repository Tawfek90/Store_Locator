import React, { useState, useEffect } from "react";
import axios from "axios";
import Line from "../line/Line";
export default function GetItems({ text }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("https://api-task.bit68.com/en/api/items/").then((res) => {
      setItems(res.data.results);
    });
  }, []);
  const calc = (beforeSale, afterSale) => {
    const result = beforeSale - afterSale;
    if (result > 0) {
      return { type: true, result };
    } else {
      return false;
    }
  };
  return (
    <>
      <div className="items">
        <h3>{text}</h3>
        <div className="items_container">
          {items.map((item) => {
            return (
              <div className="single_item" key={item.id}>
                <img src={item.image} alt="image" />
                <div className="info">
                  <p>
                    nike jordab kids air <span>jordan 4</span>
                  </p>
                  <p
                    className={`price ${
                      calc(item.price_before_sale, item.price_after_sale).type
                        ? "red"
                        : "blue"
                    }`}
                  >
                    <span className="original_price">{`egp ${item.price_before_sale}`}</span>
                    {`           ${
                      calc(item.price_before_sale, item.price_after_sale).type
                        ? `save ${
                            calc(item.price_before_sale, item.price_after_sale)
                              .result
                          }`
                        : " "
                    }`}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Line />
    </>
  );
}
