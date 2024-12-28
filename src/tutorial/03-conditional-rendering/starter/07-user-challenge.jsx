import { useState } from "react";

const UserChallenge = () => {

  //define state value
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({name:"Bambi"});
    return;
  };

  const logout = () => {
    setUser(null);
    return; 
  };

  return (
    <div>
      {user ? 
        <div><h2>Hello {user.name}!</h2> <button onClick={logout} className="btn">logout</button></div> 
        : 
        <div><h2>Please Login</h2><button onClick={login} className="btn">Login</button></div>}
    </div>
  );
};

export default UserChallenge;
