import React from "react";
import ProductsCard from "./ProductsCard";

const Products = ({ products }) => {
  return (
    <div className=" py-10 mobile:px-4">
      <div className=" flex flex-col items-center gap-4">
        <h1 className=" text-2xl bg-black text-white py-2 w-80 text-center">
          shopping everyday
        </h1>
        <span className=" w-20 h-[3px] bg-black"></span>
        <p className=" max-w-[700px] text-gray-600 text-center mobile:font-base">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
          porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
          purus lectus malesuada libero, sit amet commodo magna eros quis urna.
          Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean
          nec lorem. In porttitor. Donec laoreet nonummy augue. Suspendisse dui
          purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris
          eget neque at sem venenatis eleifend. Ut nonummy
        </p>
      </div>
      <div className=" max-w-screen-xl mx-auto py-10 grid laptop:grid-cols-4 px-3 lg:px-0 mobile:grid-cols-1 tablet:grid-cols-2 gap-10  ">
        {products.map((item) => (
          <ProductsCard key={item._id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
