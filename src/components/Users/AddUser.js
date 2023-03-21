import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [entereduserName, setEntereduserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (entereduserName.trim().length === 0 || enteredAge.trim().length === 0) {
      console.log("entereduserName is empty");
      setError({
        title: "Invalid Error",
        message: "Please enter a valid name ang age (non-empty values).",
      });
      return;
    }

    if (+enteredAge < 1) {
      console.log("+enteredAge is smaller than 1");
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (> 0).",
      });
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
  const onOkayHandler = () => {
    setError("");
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onButton={onOkayHandler}
        />
      )}
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
    </div>
  );
};

export default AddUser;
