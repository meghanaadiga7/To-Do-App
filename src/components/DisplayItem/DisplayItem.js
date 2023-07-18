import React from "react";
import classes from "./DisplayItem.module.css";
import Card from "../../UI/Card/Card";
import TaskItem from "./TaskItem";
const DisplayItem = (props) => {


  let taskList = <h2>No tasks Found</h2>;

  if (props.items.length > 0) {
    taskList = (
      <ul>
        {props.items.map((task) => {
          return <TaskItem onDelete={props.onDelete} id={task.id} key={task.id}>{task.text}</TaskItem>;
        })}
      </ul>
    );
  }

  let content = taskList;

  if (props.error) {
    content = <h2>Try Again!</h2>;
  }

  if (props.loading) {
    content = <h2>Loading Tasks...</h2>;
  }

  return (
    <Card className={classes.card}>
      <div>{content}</div>
    </Card>
  );
};
export default DisplayItem;
