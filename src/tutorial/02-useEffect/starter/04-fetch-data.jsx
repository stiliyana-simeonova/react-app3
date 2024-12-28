import { useState, useEffect } from "react";

const url = 'https://api.github.com/users';

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const resp = await fetch(url);
        const people = await resp.json();
        setUsers (people);
      }
      catch (error){
        console.log(error);
      }
    }
    fetchPeople();
  },[]);

  return (
    <> { users.map (user => {
          return (
            <div className="users" key={user.id}>
              <img src = {user.avatar_url} />
              <p>{user.login}</p>
            </div>
          )
        })
      }
    </>

  );
};
export default FetchData;
