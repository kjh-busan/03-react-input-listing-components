import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  const returnAddUser = () => {
    props.onButton();
  };
  return (
    <div>
      <div className={classes.backdrop} onClick={returnAddUser} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={returnAddUser}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
