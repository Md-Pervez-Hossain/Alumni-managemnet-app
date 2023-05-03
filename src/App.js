import React, { useEffect, useRef } from "react";
import "./App.css";
import _ from "lodash";

function App() {
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

  return <div className="app" ref={elementRef}></div>;
}

export default App;
