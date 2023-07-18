import React, { useRef } from "react";
import classes from "./NewForm.module.css";
import Card from "../../UI/Card/Card";
const NewForm = (props) => {
  const newTask = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const task = newTask.current.value;
    if (task === "") {
      return;
    }
    props.onAddTask(task);
    newTask.current.value = "";
  };
  return (
    <Card className={classes.cardForm}>
      <form onSubmit={submitHandler} className={classes.form}>
        <input ref={newTask} className={classes.input} type="text" />
        <button type="submit" className={classes.button}>
          Add Task
        </button>
      </form>
    </Card>
  );
};
export default NewForm;
