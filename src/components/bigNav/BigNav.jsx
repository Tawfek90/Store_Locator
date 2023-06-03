import React from "react";
import "./bigNav.css";
export default function BigNav() {
  return (
    <div className="bignav">
      <div className="bignav_container">
        <ul className="list">
          <li>top details</li>
          <li>Deals od the day</li>
          <li>men </li>
          <li>women</li>
          <li>kids</li>
          <li>new</li>
          <li>brands</li>
          <li>sports</li>
          <li>Accessories</li>
          <li className="active">sale</li>
        </ul>
      </div>
    </div>
  );
}
