import { useEffect, useState } from 'react';

const MultipleReturnsBasics = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      //lets pretend there is something we are doing here which will take some time
      setLoading(false);
    },5000);
  },[]);

  if (isLoading) {
    return <h2>Loading ...</h2>;
  }

  return <h2>Done loading</h2>;
};
export default MultipleReturnsBasics;
