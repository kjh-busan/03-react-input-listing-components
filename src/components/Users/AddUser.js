import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [entereduserName, setEntereduserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (entereduserName.trim().length === 0 || enteredAge.trim().length === 0) {
      console.log("entereduserName is empty");
      return;
    }

    if (+enteredAge < 1) {
      console.log("+enteredAge is smaller than 1");
      return;
    }

    props.onAddUser({ name: entereduserName, age: enteredAge });

    setEntereduserName("");
    setEnteredAge("");
  };
  const userNameChangehandler = (event) => {
    setEntereduserName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label className={classes.label} htmlFor="username">
          User Name
        </label>
        <input
          id="username"
          type="text"
          value={entereduserName}
          onChange={userNameChangehandler}
        />
        <label className={classes.label} htmlFor="age">
          Age (Years){" "}
        </label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={ageChangeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
