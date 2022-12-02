import React, { Fragment, useState } from "react";

import InputList from "./Components/Users/InputList";
import UserInput from "./Components/Users/UserInput";

function App() {
  const [userData, setUserData] = useState([]);

  const userInputHandler = (uName, uAge) => {
   setUserData((prevState)=>{
    return [
      ...prevState,
      {name:uName, age: uAge, id: Math.random().toString()}
    ]
   });
   
  };

  return (
    <Fragment>
      <UserInput onUserInput={userInputHandler} />
      <InputList users = {userData}/>
    </Fragment>
  );
}

export default App;
