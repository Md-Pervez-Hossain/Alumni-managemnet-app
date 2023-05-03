import React, { useEffect, useRef } from "react";
import _ from "lodash";
import { Outlet } from "react-router-dom";
import Footer from "../sharedComponents/Footer/Footer";
import Header from "../sharedComponents/Header/Header";

const Main = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(
      _.debounce((entries) => {
        console.log("Element size changed!");
        // handle resize events here
      }, 100)
    );
    resizeObserver.observe(elementRef.current);

    // cleanup function to disconnect the observer when the component unmounts
    return () => resizeObserver.disconnect();
  }, []);

  return (
    <div ref={elementRef}>
      <Header />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default Main;
