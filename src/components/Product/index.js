import React from "react";
import "./product.css";
import Card from "../Card";
import { motion } from "framer-motion";

const Product = ({ products }) => {
  // console.log(products)
  return (
    <div className="displaySection" layout>
      {products?.map((item) => (
        <motion.div key={item.id} layout>
          <Card 
            key={item.id}
            image={item.image}
            brand={item.brand}
            size={item.size}
            title={item.title}
            price={item.price}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Product;
