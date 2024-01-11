import React from "react";
import { useSelector } from "react-redux";

import Poster from "../Poster/Poster";
import Products from "../Products/Products";
import Categories from "../Categories/Categories";

const Home = () => {
  const { products, categories } = useSelector((state) => state);

  return (
    <>
      <Poster />
      <Products products={products.list} amount={5} title="Популярное" />
      <Categories
        products={categories.list}
        amount={5}
        title="Стоит попробовать"
      />
    </>
  );
};

export default Home;
