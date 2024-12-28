import { useState } from 'react';

const ShortCircuitOverview = () => {

  const [number, setNumber] = useState(0);
  const [string, setString] = useState("some string");

  return (
    <div>
      Falsy OR 1: { number || "1"} <br/>
      Falsy AND 1: { number && "1"} <br/>
      Trythy OR 1: { string || "str"} <br/>
      Truthy AND 1: { string && "str"} <br/>
    </div>
  );
};
export default ShortCircuitOverview;
