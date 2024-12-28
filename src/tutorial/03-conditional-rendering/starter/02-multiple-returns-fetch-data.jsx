import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState (false);
  const [user, setUser] = useState(null);

  useEffect( () => {
    const fetchUsers = async () => {
      try{
        const resp = await fetch(url);
        const res = await resp.json();
        if (!resp.ok) {
          setIsError(true);
          setIsLoading(false);
        }
        setUser(res);
      }
      catch (error) {
        setIsError(true);
        console.log(error);
      }
      setTimeout(()=>{},5000);
      setIsLoading(false);
    }
    fetchUsers();
  }, []);

  if (isLoading) {
    return(
      <h2>Loading ... </h2>
    )
  }
  if (isError) {
    return(
      <h2>There was an error! Check the console </h2>
    )
  }

  const {avatar_url, id, login} = user;
  return(
    <section>
    <img src={avatar_url} />
      <div key={id}>
          <a href="#">{login}</a>
      </div>
    </section>
  )
};

export default MultipleReturnsFetchData;
