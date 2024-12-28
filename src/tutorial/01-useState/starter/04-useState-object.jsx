import { useState } from 'react';

const UseStateObject = () => {

  const [person, setPerson] = useState({
    name: "Stili",
    age: 46,
    hobby: "gardening",
  });

  const newPerson = () => {
    setPerson({name:"Bob", age:"28", hobby:"bowling"})
  }
  return (
    <div>
      <h1>{person.name} / {person.age} / {person.hobby}</h1>
      <button type='button' className="btn" onClick={newPerson}>Click me</button>
    </div>
  );
};

export default UseStateObject;
