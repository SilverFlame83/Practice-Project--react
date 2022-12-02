import React, { Fragment, useRef, useState } from "react";
import ErrorModal from "../UI/ErrorModal";

import styles from "./UserInput.module.css";

const UserInput = (props) => {
  const userNameInput = useRef();
  const userAgeInput = useRef();

  const [inputError, setInputError] = useState();

  const submitHandler = (event) => {
    event.preventDefault();
    const userName = userNameInput.current.value;
    const userAge = userAgeInput.current.value;

    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setInputError({
        title: "Empty Form",
        message: "Complete all the fields!",
      });
      return;
    }
    if (+userAge < 0) {
      setInputError({
        title: "Invalid Number",
        message: "Enter valid age greater than 0",
      });
      return;
    }
    props.onUserInput(userName, userAge);
    userNameInput.current.value = "";
    userAgeInput.current.value = "";
  };

  const errorHandler = ()=>{
    setInputError(null);
  }

  return (
    <Fragment>
      {inputError && (
        <ErrorModal
          title={inputError.title}
          message={inputError.message}
          onError={errorHandler}
        />
      )}
      {/* <section className={styles["input-form"]}></section> */}
      <div className={styles["login-box"]}>
        <h2>Student's Info</h2>
        <form onSubmit={submitHandler}>
          <div className={styles["user-box"]}>
            <input type="text" ref={userNameInput}></input>
            <label>Name</label>
          </div>
          <div className={styles["user-box"]}>
            <input type="number" ref={userAgeInput}></input>
            <label>Age</label>
          </div>
          <button type="submit">
            {/* <span></span>
          <span></span>
          <span></span>
          <span></span> */}
            Add Info
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default UserInput;
