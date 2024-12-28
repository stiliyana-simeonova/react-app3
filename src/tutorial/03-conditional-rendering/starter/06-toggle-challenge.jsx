import { useState } from "react";

const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(false);

/*   const toggleAlert = () => {
    if (showAlert) {
      setShowAlert(false);
    }
    else {
      setShowAlert(true);
    }
    return;
  } */

  return (
    <div>
      <button className="btn" onClick={()=>setShowAlert(!showAlert)}>toggle</button>
      {showAlert ? <Alert />: ""}
    </div>);
};

const Alert = () => {
  return (
    <div className="alert alert-danger">hellow world under alert! </div>
  )
 }
export default ToggleChallenge;
