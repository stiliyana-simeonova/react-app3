import { useState } from "react";

const ErrorExample = () => {

  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  }

  return (  
    <div>
      <h2>You clicked {count} times</h2>
      <button type="button" onClick={handleClick} className="btn">Click me</button>
    </div>
  );
};

export default ErrorExample;
 