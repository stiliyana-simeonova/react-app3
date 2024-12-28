import { data } from "../../../data";
import { useState } from "react";

console.log(data);

const UseStateArray = () => {

  const [people, setPeople] = useState(data);

  const removeElement = (id) => {
    console.log(id);
    const newArr =  people.filter((person) => person.id!==id);
    setPeople(newArr); 
  }

  const clearList = () => {

    setPeople([]);
  }

  return (
    <div>
      {people.map(person =>{
           const {id, name} = person;
           return (
            <div key={id}> {name} <button type="button" onClick={() => removeElement(id)}>Remove</button></div>
           )
      } )}
      <button type="button" onClick={clearList} className="btn">Clear List</button>
    </div>
  );

};

export default UseStateArray;
