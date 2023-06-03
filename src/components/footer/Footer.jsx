import React from "react";
import "./footer.css";
export default function Footer() {
  return (
    <div className="footer">
      <hr />
      <div className="footer_container">
        <ul className="list trending">
          <h5>Active Trending</h5>
          <li>men</li>
          <li>women</li>
          <li>kids</li>
        </ul>
        <ul className=" list about">
          <h5>About Us</h5>
          <li>about company</li>
          <li>connect us</li>
          <li>our branshes</li>
        </ul>
      </div>
      <hr />
      <div className="conclusion">Copyright © 2022 All Rights Reserved</div>
    </div>
  );
}
