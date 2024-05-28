import { unstable_after as after } from "next/server";

import Product from "./Product";

export default async function ProductContainer() {
    const productRequest = await fetch("https://run.mocky.io/v3/b576750a-ab8f-4492-a185-1a61093c89d4", {
        cache: "force-cache",
    });

    after(() => {
        console.log("Finished rendering");
    });

    return (
      <>
        <meta name="description" content="Product Description" />

        <Product />
      </>
    );
  }