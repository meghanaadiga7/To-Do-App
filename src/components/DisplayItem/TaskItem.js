import React from "react";
import classes from "./TaskItem.module.css";
import Card from "../../UI/Card/Card";
const TaskItem = (props) => {
  const clickHandler=()=>{
    const id=props.id;
    props.onDelete(id);
    

  }
  return (
    <Card className={classes.card}>
      <li onClick={clickHandler} className={classes.list}>{props.children}</li>
    </Card>
  );
};
export default TaskItem;
