import React, { useState, useEffect } from "react";

import "./items.css";
import GetItems from "../getItems/GetItems";
export default function Items() {
  return (
    <>
      <GetItems text="featured Items" />
      <GetItems text="most viewed items" />
    </>
  );
}
