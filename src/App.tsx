import React from "react";
import { useEffect } from "react";
import { Footer } from "./comp/footer";
import { Subscribe } from "./comp/subscribe";
// import Dropdown from './comp/drop';
import Product from "./comp/pro";
import Grid from "./comp/usualgrid";
import Product1 from "./comp/product1";
import BuyNow2 from "./comp/shacomp/BuyNow2";
import { BuyNowData } from "./comp/shacomp/BuyNow2/BuyNowData";
// import Dropup from "./comp/drop";

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(".animation_triggering_class");
    // Create an intersection observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add the "animate" class when the element is in the viewport
          entry.target.classList.add("animate");
        } else {
          entry.target.classList.remove("animate");
        }
      });
    });
    // Observe each element
    elements.forEach((element) => {
      observer.observe(element);
    });
    const elements2 = document.querySelectorAll(".scale_triggering_class");
    // Create an intersection observer
    const observer2 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add the "animate" class when the element is in the viewport
          entry.target.classList.add("scale");
        } else {
          entry.target.classList.remove("scale");
        }
      });
    });
    elements2.forEach((element) => {
      observer2.observe(element);
    });
  }, []);

  return (
    <div className="">
      {" "}
      <Product1 />
      <Grid />
      <BuyNow2 data={BuyNowData} />
      <Subscribe />
      <Product />
      <Footer />
    </div>
  );
}

export default App;
