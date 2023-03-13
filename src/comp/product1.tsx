import React from "react";

import { product1 } from "./prodata2";
const Product1 = () => {
  return (
    <section className="flex  items-center justify-center">
      <div className="mx-6 mt-12 flex cursor-pointer flex-col items-center gap-8  min-[590px]:flex-row">
        {product1.map((item) => (
          <div className=" h-[100vh] w-full flex-1" key={item.name}>
            <a href={item.name} className={``}>
              <div className="animation_triggering_class h-auto w-auto cursor-pointer justify-center overflow-hidden">
                <img
                  className="hover scale_triggering_class overflow-hidden duration-[3000ms] ease-in-out hover:scale-110 hover:brightness-75 lg:h-[12.5rem] lg:w-[24rem]"
                  src={item.ImageURL}
                  alt="product"
                />
              </div>
            </a>
            <div>
              <h3 className="mt-5 text-gray-600">{item.name}</h3>
            </div>
            <div className="max-w-xs">
              <p className=" text-[23px]  text-gray-700">{item.details}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="h-screen"></div>
    </section>
  );
};

export default Product1;
