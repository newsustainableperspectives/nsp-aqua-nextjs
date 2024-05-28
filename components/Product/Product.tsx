"use client";
import { useState } from "react";
import Header from "../Header/Header";

export default function Product() {
  const [count, setCount] = useState(0);
    return (
      <>
        <Header />

        <div>My Product</div>
        <button onClick={() => setCount(count + 1)}>Add To Cart</button>
      </>
    );
  }