import React from "react";


import styles from "./InputList.module.css";
import Card from '../UI/Card';

const InputList = (props) => {
  return (<Card className={styles.users}>
    <ul>
      {props.users.map(user=> <li key={user.id}>{user.name} is {user.age} years old</li>)}
    </ul>
    </Card>
  );
};

export default InputList;
