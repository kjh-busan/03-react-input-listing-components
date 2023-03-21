import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [entereduserName, setEntereduserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
  };
  const changeUserNameHandler = (event) => {
    setEntereduserName(event.target.value);
  };
  const changeAgeHandler = (event) => {
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
          onChange={changeUserNameHandler}
        />
        <label className={classes.label} htmlFor="age">
          Age (Years){" "}
        </label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={changeAgeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
