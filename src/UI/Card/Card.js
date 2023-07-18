import React from "react";
import "./Card.css";
const Card = (props) => {
  const classSet = "card " + props.className;
  return <div className={classSet}>{props.children}</div>;
};
export default Card;
