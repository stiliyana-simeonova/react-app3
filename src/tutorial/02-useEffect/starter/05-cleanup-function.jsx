import { useEffect } from "react";
import { useState } from "react";

const CleanupFunction = () => {

  const [toggle, setToggle] = useState(false);

  return <div>
    <button className="btn" onClick={() => setToggle(!toggle)}>toggle component</button>
    {toggle && <SomeComponent  />}
  </div>;
};

const SomeComponent = () => {
  useEffect(() => { 
    console.log("interesting");
    const intId = setInterval(() => {
      console.log ("setInterval")
    }, 1000);
    return () => {
      clearInterval(intId);
    }
  }, [])

  return <h1>Some Component</h1>
}

export default CleanupFunction;
