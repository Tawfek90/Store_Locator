import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { BsFillPersonFill } from "react-icons/bs";
import { MdLocalGroceryStore } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

import "./navbar.css";
export default function Navbar() {
  const [listState, setListState] = useState(false);
  return (
    <>
      {/*navbar */}
      <div className="navbar">
        <div className="navbar_container">
          <div
            className="bars"
            onClick={() => {
              setListState(!listState);
            }}
          >
            {listState ? <GrClose /> : <FaBars />}
          </div>
          {/*logo */}
          <div className="logo">
            <img src="./img/vuesax-bold-map.png" alt="logo" />
            <p>store locator</p>
          </div>
          {/*hidden ul */}
          <ul className={`${listState ? "showList" : "list"}`}>
            <li>
              <div className="logo">
                <img src="./img/vuesax-bold-map.png" alt="logo" />
                <p>store locator</p>
              </div>
            </li>

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
            <li className="arabic">العربية</li>
          </ul>
          {/*search */}
          <div className="search">
            <input type="search" placeholder="search" />
            <div className="icon">
              <FiSearch />
            </div>
          </div>
          {/*icons */}
          <div className="icons">
            <p>العربية</p>

            <BsFillPersonFill />
            <MdLocalGroceryStore />
          </div>
        </div>
      </div>
      {/* input search for small screens*/}
      <div className="input_container">
        <input type="search" placeholder="بحث" className="search_input" />
        <div className="icon">
          <FiSearch />
        </div>
      </div>
    </>
  );
}
